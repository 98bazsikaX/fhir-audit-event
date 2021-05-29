import { MaterialModule } from './../../material.module';
import { AuthService } from './../../auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {UserConnectionModule} from '../user-connection.module';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})


export class LoginComponent implements OnInit {
  showSpinner: any;
  password: any;
  username: any;

  constructor(private aService: AuthService) { }
  ngOnInit(): void {}

  login() {
      //const asd = new AuthService(new AngularFireAuth(), new Router());
      //asd.login(this.password, this.username).then(r => {
      //  console.log(r);
     // });
    this.aService.login(this.username,this.password);
  }

  loginWithGoogle() {
    this.aService
  }
}
