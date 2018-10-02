import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FirebaseDatabase } from '@angular/fire';

@Injectable()
export class AuthGuard implements CanActivate {

constructor(protected router: Router) { }

  canActivate() {

    const loggedIn = false;

    if (loggedIn) {
      return true;
    }

    this.router.navigate(['/users']);
    return false;
  }
}

