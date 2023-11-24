import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItineraryListComponent } from './itinerary-list/itinerary-list.component';
import { RegisterItineraryComponent } from './register-itinerary/register-itinerary.component';
import { ItineraryViewComponent } from './itinerary-view/itinerary-view.component';

//Rutas de para el itinerary module
const routes: Routes = [
  {path: '',component:ItineraryListComponent},
  {path: 'register-itinerary', component:RegisterItineraryComponent},
  {path: 'itinerary-view', component:ItineraryViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItineraryRoutingModule { }
