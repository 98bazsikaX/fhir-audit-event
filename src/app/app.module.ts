import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material.module';
import { MyHeaderComponent } from './my-header/my-header.component';

let config = {
  apiKey: 'AIzaSyDdF4hel8giydp7Bx9d1LtNkbP8N_si8FI',
  authDomain: 'fhir-auditeventangular.firebaseapp.com',
  projectId: 'fhir-auditeventangular',
  storageBucket: 'fhir-auditeventangular.appspot.com',
  messagingSenderId: '1086384370858',
  appId: '1:1086384370858:web:d81ca1a5eb5342b3cf0cd3'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    MaterialModule,
  ],
  providers: [],
  exports: [
    MyHeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
