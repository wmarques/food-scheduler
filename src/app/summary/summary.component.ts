import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MealsService } from '../core/services/meals.service';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  @ViewChild('meals') mealsEl: ElementRef;

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

  download() {
    html2canvas(this.mealsEl.nativeElement).then((canvas) => {
      const img = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'filename.png';
      link.href = img;
      link.click();
    });
  }
}
