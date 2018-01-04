import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  redirectUrl: string;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      const redirect = this.redirectUrl ? this.redirectUrl : '/admin';
      this.router.navigate([redirect]);
      this.getCurrentUserToken();
    }).catch(err => {
      console.log(err.message);
    });
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/login']);
    sessionStorage.removeItem('isLoggedIn');
  }

  getCurrentUserToken() {
    this.firebaseAuth.auth.currentUser.getToken()
    .then((token: string) => {
      sessionStorage.setItem('isLoggedIn', token);
    });

    sessionStorage.getItem('isLoggedIn');
  }

  isAuthenticated() {
    return (sessionStorage.getItem('isLoggedIn')) ? true : false;
  }
}
