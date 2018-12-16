
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate() {
    if ( this.authService.isLoggedIn() ) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
