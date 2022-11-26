import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import {EditMealsDialog} from './edit-meals-dialog/edit-meals-dialog.component';
import {CalendarEvent} from 'calendar-utils';
import {addMonths, endOfMonth, format, lastDayOfMonth, startOfMonth, subMonths} from 'date-fns';
import firebase from 'firebase/compat';
import User = firebase.User;
import {fr} from 'date-fns/locale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events: CalendarEvent[] = [];
  currentMonth = startOfMonth(new Date());
  private user: firebase.User;

  constructor(
    public dialog: MatDialog,
    private afs: AngularFirestore,
    public af: AngularFireAuth
  ) {}

  async ngOnInit() {
    this.user = await this.af.currentUser;

    this.fetchData();
  }

  private fetchData() {
    this.afs
      .collection('meals', (ref) =>
        ref
          .where('userId', '==', this.user.uid)
          .where('date', '>=', this.currentMonth)
          .where('date', '<=', endOfMonth(this.currentMonth))
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

  formatMonth() {
    return format(this.currentMonth, 'MMM y', {locale:fr});
  }

  previousMonth() {
    this.currentMonth = subMonths(this.currentMonth, 1);
    this.fetchData();
  }

  nextMonth() {
    this.currentMonth = addMonths(this.currentMonth, 1);
    this.fetchData();

  }
}
