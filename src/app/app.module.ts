import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';;

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCQXGnToiiQr38DSRPeM3xQlbtKm_5aDDI",
  authDomain: "test-232425.firebaseapp.com",
  databaseURL: "https://test-232425.firebaseio.com",
  storageBucket: "test-232425.appspot.com",
}

@NgModule({
  declarations: [
  AppComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
