import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../../material.module';
import {MyHeaderComponent} from '../../my-header/my-header.component';
import {AuthService} from '../../auth/auth.service';

// @ts-ignore
@Component({
  selector: 'app-register',
  templateUrl: "./register.component.html",
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  get logged_in(): boolean {
    return this._logged_in;
  }

  set logged_in(value: boolean) {
    this._logged_in = value;
  }
  email: any;
  password: any;
  passwordAgain: any;
  // tslint:disable-next-line:variable-name
  _logged_in : boolean;

  constructor(private aService: AuthService) { }

  ngOnInit(): void {
    this._logged_in = this.aService.isLoggedIn;
  }

  register(): void {
    if(this.password !== this.passwordAgain){
      alert("Non matching passwords!");
    }
      this.aService.registration(this.email,this.password);
  }
}
