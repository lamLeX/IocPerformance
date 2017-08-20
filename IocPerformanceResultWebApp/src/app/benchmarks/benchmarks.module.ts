import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyncFusionModule } from "../sync-fusion/sync-fusion.module";
import { BenchmarksComponent } from "./benchmarks.component";
import { BenchmarkService } from './benchmark.service';

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
