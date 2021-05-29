import { MaterialModule } from './material.module';
import { UserInfoComponent } from './user-connection/user-info/user-info.component';
import { UserConnectionModule } from './user-connection/user-connection.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user-connection/login/login.component';
import { RegisterComponent } from './user-connection/register/register.component';

const routes: Routes = [

  {
    path:'login',component:LoginComponent
  },
  {
    path: 'register',component:RegisterComponent
  },
  {
    path: 'user',component:UserInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MaterialModule,
    UserConnectionModule
  ],
  exports: [RouterModule,
    UserConnectionModule,
    MaterialModule
  ]
})
export class AppRoutingModule { }
