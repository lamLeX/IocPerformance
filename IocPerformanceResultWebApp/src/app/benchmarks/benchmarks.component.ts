import { Component, OnInit } from '@angular/core';
import { SelectItem, DataTable } from "primeng/primeng";

import { BenchmarkResult } from "./shared/benchmark-result.model";
import { BenchmarkService } from "./benchmark.service";
import { BenchmarkInformation } from "./shared/benchmark-information.model";
import { ContainerAdapterInfo } from "./shared/container-adapter-info.model";
import { BenchmarkDisplay } from "./shared/benchmark-display.model";
import { Measurement } from "./shared/measurement.model";

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {
  benchmarks: BenchmarkResult[];
  benchmarkFeatures: BenchmarkInformation[];
  benchmarkFilters: SelectItem[];

  iocAdapters: ContainerAdapterInfo[];
  iocFilters: SelectItem[];

  benchmarkGroups: BenchmarkDisplay[];
  selectedFeatures: BenchmarkInformation[] = [];

  // testdata = [{
  //   IOC: "C", benches: [{ testName: "CA", single: 12, multi: 22 },
  //   { testName: "Va", single: 12, multi: 42 }]
  // },
  // {
  //   IOC: "A", benches: [{ testName: "CA", single: 12, multi: 22 },
  //   { testName: "Va", single: 12, multi: 42 }]
  // }];
  // private testOrder() {
  //   debugger;
  //   this.testdata.sort((a, b) => { return a.IOC.charCodeAt(0) - b.IOC.charCodeAt(0) });
  // }

  constructor(private benchmarkSerice: BenchmarkService) { }

  ngOnInit() {
    this.benchmarkSerice.getBenchmarkResults().subscribe((data) => {
      this.benchmarks = data;
      this.benchmarkFeatures = this.getFeatures(this.benchmarks);
      this.benchmarkFilters = this.benchmarkFeatures.map<SelectItem>((feature) => { return { label: feature.Name, value: feature }; });

      this.iocAdapters = this.getIocAdapters(this.benchmarks);
      this.iocFilters = this.iocAdapters.map<SelectItem>(ioc => { return { label: ioc.Name, value: ioc.Name }; });

      this.benchmarkGroups = this.createBenchmarkDisplayFromListOfContainers(this.iocAdapters);
    });
  }

  public get benchmarkString(): string {
    return JSON.stringify(this.benchmarks);
  }

  private reset(dt: DataTable) {
    dt.reset();
  }

  private onFeatureChosen(event) {
    this.selectedFeatures = event.value;
    this.benchmarkGroups.forEach(group => {
      group.benchmarks = [];
      event.value.forEach(feature => {
        let benchmark = this.benchmarks
          .find(b => b.BenchmarkInfo.FullName == feature.FullName
            && b.ContainerInfo.Name == group.containerInfo.Name);

        let single = this.getMaxValueForTime(this.benchmarks, feature,
          (br) => br.SingleThreadedResult);
        let rankInSingle = this.getRank(this.benchmarks, feature,
          (br) => br.SingleThreadedResult, benchmark.SingleThreadedResult.Time);

        let multi = this.getMaxValueForTime(this.benchmarks, feature,
          (br) => br.MultiThreadedResult);
        let rankInMulti = this.getRank(this.benchmarks, feature,
          (br) => br.MultiThreadedResult, benchmark.MultiThreadedResult.Time);

        group.benchmarks.push({
          benchInfo: feature,
          singleThreadedResult: benchmark.SingleThreadedResult,
          maxTimeInSingleThread: single,
          rankInSingleThread: rankInSingle,
          multiThreadedResult: benchmark.MultiThreadedResult,
          maxTimeInMultiThread: multi,
          rankInMultiThread: rankInMulti
        })
      })
    });
  }

  private dtOnSort(event, dt: DataTable) {
    let [i, thread] = event.field.split(".");
    dt.value.sort((a, b) => {
      let index = parseInt(i);
      let compare = (thread == "Single") ?
        a.benchmarks[i].singleThreadedResult.Time - b.benchmarks[i].singleThreadedResult.Time :
        a.benchmarks[i].multiThreadedResult.Time - b.benchmarks[i].multiThreadedResult.Time;
      return event.order * compare;
    });
  }

  private getFeatures(b: BenchmarkResult[]): BenchmarkInformation[] {
    let results: BenchmarkInformation[] = [];
    let temp = b.map(el => el.BenchmarkInfo);
    temp.forEach((value) => {
      if (results.findIndex(r => r.FullName == value.FullName) == -1) {
        results.push(value)
      }
    });
    return results;
  }

  private getIocAdapters(b: BenchmarkResult[]): ContainerAdapterInfo[] {
    let results: ContainerAdapterInfo[] = [];
    let temp = b.map(el => el.ContainerInfo);
    temp.forEach((value) => {
      if (results.findIndex(r => r.Name == value.Name) == -1) {
        results.push(value)
      }
    });
    return results;
  }

  private createBenchmarkDisplayFromListOfContainers(ioc: ContainerAdapterInfo[]): BenchmarkDisplay[] {
    let result: BenchmarkDisplay[] = [];
    ioc.forEach(container => {
      result.push(new BenchmarkDisplay({ containerInfo: container }));
    });
    return result;
  }

  private getMaxValueForTime(b: BenchmarkResult[], feature: BenchmarkInformation, getMeasurementFunc: (benchmarkResult: BenchmarkResult) => Measurement): number {
    let filteredValue = b.filter(r => getMeasurementFunc(r).Successful && r.BenchmarkInfo.Name == feature.Name)
    let maxVal = filteredValue.length == 0 ? 0 : Math.max(...filteredValue.map<number>(r => getMeasurementFunc(r).Time));
    return maxVal
  }

  private getRank(b: BenchmarkResult[], feature: BenchmarkInformation, getMeasurementFunc: (benchmarkResult: BenchmarkResult) => Measurement, valueToRank: number): number {
    let filteredValue = b.filter(r => getMeasurementFunc(r).Successful && r.BenchmarkInfo.Name == feature.Name)
    let rank = filteredValue.length == 0 ? 0 :
      filteredValue.map<number>(r => getMeasurementFunc(r).Time)
        .reduce((prev, curr) => {
          return (curr < valueToRank) ? prev + 1 : prev;
        }, 1);
    return rank;
  }

}
