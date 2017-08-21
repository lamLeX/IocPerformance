import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from "../shared/measurement.model";

@Component({
  selector: 'benchmark-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {
  @Input() measurement: Measurement

  constructor() { }

  ngOnInit() {
  }

}
