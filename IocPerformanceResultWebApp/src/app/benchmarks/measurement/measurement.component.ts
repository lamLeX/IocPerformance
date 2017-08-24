import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from "../shared/measurement.model";

@Component({
  selector: 'benchmark-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {
  @Input() measurement: Measurement
  @Input() maxTime: number
  @Input() rank: number
  percent: number

  constructor() { }

  ngOnInit() {
    this.percent = (this.measurement.Time / this.maxTime) * 100;
  }

  private translateToString(value: number): string {
    switch (value % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }
}
