import { Component, OnInit } from '@angular/core';
import { MealsService } from '../core/services/meals.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  from: string;
  to: string;
  meals$: any;

  constructor(private mealsService: MealsService) {}

  ngOnInit() {}

  search() {
    this.meals$ = this.mealsService.getMeals(
      new Date(this.from),
      new Date(this.to)
    );
  }
}
