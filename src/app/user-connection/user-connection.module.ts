import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {MaterialModule} from '../material.module';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../app.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialModule,
    FormsModule
  ]
})
export class UserConnectionModule { }
