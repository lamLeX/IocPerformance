import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BenchmarksModule } from "./benchmarks/benchmarks.module";
import { MaterialDesignModule } from "./material-design/material-design.module";
import { SyncFusionModule } from "./sync-fusion/sync-fusion.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BenchmarksModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialDesignModule,
    SyncFusionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
