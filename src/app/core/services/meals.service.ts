import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class MealsService {
  constructor(private afs: AngularFirestore, public af: AngularFireAuth) {}

  getMeals(from: Date, to: Date) {
    const user = this.af.auth.currentUser;
    this.afs
      .collection('meals', ref => ref.where('userId', '==', user.uid))
      .snapshotChanges()
      .subscribe(data => {
        console.log(data);
      });
  }
}
