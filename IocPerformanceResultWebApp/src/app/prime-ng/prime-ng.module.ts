import { NgModule } from '@angular/core';
import { DataTableModule, SharedModule, MultiSelectModule, TooltipModule } from 'primeng/primeng';

@NgModule({
  exports: [
    DataTableModule,
    SharedModule,
    MultiSelectModule,
    TooltipModule
  ]
})
export class PrimeNgModule { }
