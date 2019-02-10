import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { SplashPageComponent } from './main/splash-page/splash-page.component'
import { WorkshopsListComponent } from './main/workshops-list/workshops-list.component'
import { EmailSignupComponent } from './main/email-signup/email-signup.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { MatButtonModule, MatDialogModule } from '@angular/material'
import { WorkshopDetailsComponent } from './main/workshops-list/workshop-details/workshop-details.component'


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SplashPageComponent,
    WorkshopsListComponent,
    EmailSignupComponent,
    WorkshopDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    WorkshopDetailsComponent
  ]
})
export class AppModule { }
