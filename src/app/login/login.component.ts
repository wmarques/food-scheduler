import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../core/services/authentication.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router, public af: AngularFireAuth) {
  }

  ngOnInit() {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/home');
      }
    });
  }

  login() {
    this.auth.doGoogleLogin().then(res => {
      this.router.navigate(['home']);
    });
  }
}
