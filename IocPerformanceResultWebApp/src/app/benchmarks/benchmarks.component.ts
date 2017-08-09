import { Component, OnInit } from '@angular/core';

import { BenchmarkResult } from "./shared/benchmark-result.model";
import { BenchmarkService } from "./benchmark.service";

@Component({
  selector: 'app-benchmarks',
  templateUrl: './benchmarks.component.html',
  styleUrls: ['./benchmarks.component.css']
})
export class BenchmarksComponent implements OnInit {
  benchmarks: BenchmarkResult[];

  constructor(private benchmarkSerice: BenchmarkService) { }

  ngOnInit() {
    //debugger;
    this.benchmarkSerice.getBenchmarkResults().subscribe((data) => {
      this.benchmarks = data;
    });
  }

  public get benchmarkString(): string {
    return JSON.stringify(this.benchmarks);
  }

}
