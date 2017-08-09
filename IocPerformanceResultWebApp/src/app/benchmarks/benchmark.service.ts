import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

import { BenchmarkResult } from "./shared/benchmark-result.model";

@Injectable()
export class BenchmarkService {
  private benchmarkResultUrl = "./assets/result/result.json";

  constructor(private http: HttpClient) { }

  getBenchmarkResults(): Observable<BenchmarkResult[]> {
    //debugger;
    return this.http.get<BenchmarkResult[]>(this.benchmarkResultUrl)
      .retry(3);
  }
}
