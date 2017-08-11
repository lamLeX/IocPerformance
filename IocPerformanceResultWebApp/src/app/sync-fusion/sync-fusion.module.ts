import { NgModule } from '@angular/core';
import { GridModule, GridComponent, PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-ng-grids/src/grid/index';

@NgModule({
  imports: [],
  exports: [GridModule],
  declarations: [],
  providers: [PageService, SortService, FilterService, GroupService]
})
export class SyncFusionModule { }
