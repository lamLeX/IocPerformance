import { Component, OnInit } from '@angular/core';
import { GroupSettingsModel } from "@syncfusion/ej2-ng-grids/src";
import { SelectItem, DataTable } from "primeng/primeng";

import { BenchmarkResult } from "./shared/benchmark-result.model";
import { BenchmarkService } from "./benchmark.service";
import { BenchmarkInformation } from "./shared/benchmark-information.model";
import { ContainerAdapterInfo } from "./shared/container-adapter-info.model";
import { BenchmarkDisplay } from "./shared/benchmark-display.model";

// import { data } from "./shared/datasource";

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
  maxSingleThread: number;
  maxMultiThread: number;

  // public groupOptions: GroupSettingsModel;
  // public data: Object[];

  constructor(private benchmarkSerice: BenchmarkService) { }

  ngOnInit() {
    this.benchmarkSerice.getBenchmarkResults().subscribe((data) => {
      this.benchmarks = data;
      this.benchmarkFeatures = this.getFeatures(this.benchmarks);
      this.benchmarkFilters = this.benchmarkFeatures.map<SelectItem>((feature) => { return { label: feature.Name, value: feature.Name }; });

      this.iocAdapters = this.getIocAdapters(this.benchmarks);
      this.benchmarkGroups = this.createBenchmarkDisplayFromListOfContainers(this.iocAdapters);
      let result = this.getMaxTime(this.benchmarks);
      this.maxSingleThread = result.single;
      this.maxMultiThread = result.multi;
      //debugger;
    });
    // this.groupOptions = { showGroupedColumn: false, /*columns: ['ContainerInfo.Name'] */ };
  }

  public get benchmarkString(): string {
    return JSON.stringify(this.benchmarks);
  }

  private reset(dt: DataTable) {
    dt.reset();
  }

  private dtOnSort(event) {
    debugger;
  }
  private dtOnPage(event) {
    debugger;
  }
  private dtOnFilter(event) {
    debugger;
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
      result.push(new BenchmarkDisplay({ ContainerInfo: container }));
    });
    return result;
  }

  private getMaxTime(b: BenchmarkResult[]): { single: number, multi: number } {
    let single = b.filter(r => r.SingleThreadedResult.Successful)
      .map<number>(r => r.SingleThreadedResult.Time)
      .reduce((prev, curr) => {
        return (curr > prev) ? curr : prev;
      });
    let multi = b.filter(r => r.MultiThreadedResult.Successful)
      .map<number>(r => r.MultiThreadedResult.Time)
      .reduce((prev, curr) => {
        return (curr > prev) ? curr : prev;
      });
    return { single: single, multi: multi };
  }

}
