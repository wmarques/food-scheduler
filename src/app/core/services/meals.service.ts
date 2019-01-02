import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class MealsService {
  constructor(private afs: AngularFirestore, private af: AngularFireAuth) {}

  getMeals(from: Date, to: Date) {
    const user = this.af.auth.currentUser;
    return this.afs
      .collection('meals', ref =>
        ref
          .where('userId', '==', user.uid)
          .where('date', '>=', from)
          .where('date', '<=', to)
      )
      .valueChanges();
  }
}
