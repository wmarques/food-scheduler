import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditMealsDialog } from './edit-meals-dialog/edit-meals-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  viewDate = new Date();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addMeal(e) {
    console.log(e);
    const dialogRef = this.dialog.open(EditMealsDialog, {
      // width: '250px'
    });
  }
}
