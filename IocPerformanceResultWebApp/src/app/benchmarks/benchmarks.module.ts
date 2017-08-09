import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BenchmarksComponent } from "./benchmarks.component";
import { BenchmarkService } from './benchmark.service';
import { SyncFusionModule } from "../sync-fusion/sync-fusion.module";

@NgModule({
  imports: [
    CommonModule,
    SyncFusionModule
  ],
  exports: [
    BenchmarksComponent
  ],
  declarations: [
    BenchmarksComponent
  ],
  providers: [
    BenchmarkService]
})
export class BenchmarksModule { }
