import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SummaryComponent],
  imports: [
    FormsModule,
    CommonModule,
    SummaryRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class SummaryModule {}
