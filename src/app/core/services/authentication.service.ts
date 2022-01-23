import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import  firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userDetails: firebase.User = null;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });
  }

  doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this.afAuth.signInWithPopup(provider);
  }

  isLoggedIn() {
    return this.userDetails != null;
  }
}
