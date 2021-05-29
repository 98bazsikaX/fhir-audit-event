import { Injectable } from '@angular/core';

import { Router } from  '@angular/router';
import auth from '../../../node_modules/firebase';
import { AngularFireAuth } from  '@angular/fire/auth';
import User from '../../../node_modules/firebase';
import firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get user(): firebase.User {
    return this._user;
  }

  set user(value: firebase.User) {
    this._user = value;
  }
  // tslint:disable-next-line:variable-name
  _user: User.User;

  constructor(public fAuth: AngularFireAuth, public router: Router) {
      this.fAuth.authState.subscribe(user => {
        if (user){
          this._user = user;
          localStorage.setItem('user', JSON.stringify(this._user));
        }else{
          localStorage.setItem('user', '');
        }
      });
   }

  // tslint:disable-next-line:typedef
   async login(email: string, password: string){
     let res = await this.fAuth.signInWithEmailAndPassword(email, password); // this.fAuth.auth.signInWithEmailAndPassword(email,password);
     await this.router.navigate(['user']); // TODO: takolni hova
   }

   async registration(email: string, password: string){
     let res = await this.fAuth.createUserWithEmailAndPassword(email, password);
     await this.router.navigate(['user']);
   }

   async logout(){
     await this.fAuth.signOut();
     localStorage.removeItem('user');
     await this.router.navigate(['login']);
   }

   async loginWithGoogle(){
    return;
   }

   get isLoggedIn(): boolean{
     // const user = (localStorage.getItem('user') === "") ? //JSON.parse(localStorage.getItem('user') || {});
     return (localStorage.getItem('user') === '');
   }
}
