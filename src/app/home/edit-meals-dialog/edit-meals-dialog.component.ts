import { Component, Inject, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-meals-dialog',
  templateUrl: './edit-meals-dialog.component.html',
  styleUrls: ['./edit-meals-dialog.component.scss']
})
export class EditMealsDialog implements OnInit {
  date: Date;
  meals: any;

  constructor(
    private afs: AngularFirestore,
    public af: AngularFireAuth,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditMealsDialog>
  ) {}

  ngOnInit() {
    console.log('in');
    this.date = this.data.date;
    this.meals = { ...this.data.meals };
  }

  async save() {
    const user = this.af.auth.currentUser;
    if (this.data.meals) {
      await this.afs
        .collection('meals')
        .doc(this.meals.id)
        .update({
          breakfast: this.meals.breakfast,
          lunch: this.meals.lunch,
          dinner: this.meals.dinner
        });
    } else {
      await this.afs
        .collection('meals')
        .add({ ...this.meals, date: this.date, userId: user.uid });
    }

    this.dialogRef.close();
  }
}
