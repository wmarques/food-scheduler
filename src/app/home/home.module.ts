import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'angular-calendar';
import { EditMealsDialog } from './edit-meals-dialog/edit-meals-dialog.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, EditMealsDialog],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CalendarModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [EditMealsDialog]
})
export class HomeModule {}
