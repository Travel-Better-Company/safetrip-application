import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityViewComponent } from './activity-view/activity-view.component';
import { RegisterActivityComponent } from './register-activity/register-activity.component';

//Las rutas de los Activity module
const routes: Routes = [
  {path: '', component:ActivityListComponent},
  {path: 'register-activity', component:RegisterActivityComponent},
  {path: 'activity-view', component:ActivityViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
