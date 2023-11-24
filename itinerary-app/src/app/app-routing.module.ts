import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
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
