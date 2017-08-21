import { Component, OnInit, Input } from '@angular/core';

import { ContainerAdapterInfo } from "../shared/container-adapter-info.model";

@Component({
  selector: 'benchmark-ioc',
  templateUrl: './ioc.component.html',
  styleUrls: ['./ioc.component.css']
})
export class IocComponent implements OnInit {
  @Input() container: ContainerAdapterInfo

  constructor() { }

  ngOnInit() {
  }

}
