import { Component, OnInit } from '@angular/core';

import { BenchmarkResult } from "./shared/benchmark-result.model";
import { BenchmarkService } from "./benchmark.service";

import { data } from "./shared/datasource";

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {
  benchmarks: BenchmarkResult[];
  public groupOptions: Object
  public data: Object[];

  constructor(private benchmarkSerice: BenchmarkService) { }

  ngOnInit() {
    //debugger;
    this.data = data;
    this.benchmarkSerice.getBenchmarkResults().subscribe((data) => {
      this.benchmarks = data;
    });
    this.groupOptions = { showGroupedColumn: false };
  }

  public get benchmarkString(): string {
    return JSON.stringify(this.benchmarks);
  }

}
