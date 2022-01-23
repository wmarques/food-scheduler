import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import {EditMealsDialog} from './edit-meals-dialog/edit-meals-dialog.component';
import {CalendarEvent} from 'calendar-utils';
import {lastDayOfMonth, startOfMonth} from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  viewDate = new Date();
  events: CalendarEvent[] = [];

  constructor(
    public dialog: MatDialog,
    private afs: AngularFirestore,
    public af: AngularFireAuth
  ) {}

  async ngOnInit() {
    const user = await this.af.currentUser;
    const today = new Date();
    const from = startOfMonth(today);
    const to = lastDayOfMonth(today);

    this.afs
      .collection('meals', (ref) =>
        ref
          .where('userId', '==', user.uid)
          .where('date', '>=', from)
          .where('date', '<=', to)
      )
      .snapshotChanges()
      .subscribe((data) => {
        this.events = data.map((change: any) => {
          const meal = change.payload.doc.data();
          return {
            start: meal.date.toDate(),
            title: '',
            meal,
            id: change.payload.doc.id,
          };
        });
      });
  }

  addMeal(e) {
    this.dialog.open(EditMealsDialog, {
      disableClose: true,
      data: {
        date: e.day.date,
        meals: e.day.events.length
          ? { ...e.day.events[0].meal, id: e.day.events[0].id }
          : null,
      },
    });
  }
}
