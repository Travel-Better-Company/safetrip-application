import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ItinerarioComponent} from "./components/itinerario/itinerario.component";
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'itinerario', component: ItinerarioComponent},
  {
    path: 'itineraries',
    loadChildren: () => import('./components/itinerary/itinerary.module').then(
      m => m.ItineraryModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./components/activity/activity.module').then(
      m => m.ActivityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
