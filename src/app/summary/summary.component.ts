import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  from: Date;
  to: Date;

  constructor() {}

  ngOnInit() {}

  search() {
    console.log(new Date(this.from), new Date(this.to));
  }
}
