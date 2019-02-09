import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SplashPageComponent } from './main/splash-page/splash-page.component';
import { WorkshopsListComponent } from './main/workshops-list/workshops-list.component';
import { EmailSignupComponent } from './main/email-signup/email-signup.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SplashPageComponent,
    WorkshopsListComponent,
    EmailSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
