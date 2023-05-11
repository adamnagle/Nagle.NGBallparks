import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StadiumsComponent } from './stadiums/stadiums.component';
import { BallparkComponent } from './ballpark/ballpark.component';

@NgModule({
  declarations: [
    AppComponent,
    StadiumsComponent,
    BallparkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
