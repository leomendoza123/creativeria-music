import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyBNVA500Q6HZkP-p3dw_YcZ1iww3X5LblY',
  authDomain: 'creativeriamusic-d6a20.firebaseapp.com',
  databaseURL: 'https://creativeriamusic-d6a20.firebaseio.com',
  storageBucket: 'creativeriamusic-d6a20.appspot.com'
};

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
