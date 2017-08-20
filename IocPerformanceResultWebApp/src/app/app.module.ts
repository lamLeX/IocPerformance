import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BenchmarksModule } from "./benchmarks/benchmarks.module";
import { MaterialDesignModule } from "./material-design/material-design.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialDesignModule,
    BenchmarksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
