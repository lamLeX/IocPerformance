import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BenchmarksModule } from "./benchmarks/benchmarks.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BenchmarksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
