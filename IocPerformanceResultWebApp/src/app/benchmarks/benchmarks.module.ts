import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenchmarksComponent } from "./benchmarks.component";
import { BenchmarkService } from './benchmark.service';
import { PrimeNgModule } from "../prime-ng/prime-ng.module";
import { IocComponent } from './ioc/ioc.component';
import { MeasurementComponent } from './measurement/measurement.component';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    BenchmarksComponent,
  ],
  declarations: [
    BenchmarksComponent,
    IocComponent,
    MeasurementComponent,
  ],
  providers: [
    BenchmarkService]
})
export class BenchmarksModule { }
