import { NgModule } from '@angular/core';
import { DataTableModule, SharedModule, MultiSelectModule } from 'primeng/primeng';

@NgModule({
  exports: [
    DataTableModule,
    SharedModule,
    MultiSelectModule
  ]
})
export class PrimeNgModule { }
