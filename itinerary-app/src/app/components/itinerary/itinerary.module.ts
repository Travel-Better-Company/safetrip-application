import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItineraryRoutingModule } from './itinerary-routing.module';
import { RegisterItineraryComponent } from './register-itinerary/register-itinerary.component';
import { ItineraryListComponent } from './itinerary-list/itinerary-list.component';
import { ItineraryViewComponent } from './itinerary-view/itinerary-view.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  //Declaro todos los componentes de itinerary
  declarations: [
    ItineraryListComponent,
    ItineraryViewComponent,
    RegisterItineraryComponent
  ],
  //importo las rutas
  imports: [
    CommonModule,
    ItineraryRoutingModule,
    MatCardModule,
    FlexLayoutModule
    //MatButtonModule
  ]
})
export class ItineraryModule { }
