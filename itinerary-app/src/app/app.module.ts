import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { ActivityModule } from './components/activity/activity.module';
import { ItineraryModule } from './components/itinerary/itinerary.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ActivityModule,
    ItineraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
