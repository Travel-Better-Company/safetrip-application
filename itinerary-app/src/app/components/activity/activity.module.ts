import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { RegisterActivityComponent } from './register-activity/register-activity.component';
import { ActivityViewComponent } from './activity-view/activity-view.component';
import { ActivityListComponent } from './activity-list/activity-list.component';


@NgModule({
  //Declaro los componentes de Activity
  declarations: [
    ActivityListComponent,
    RegisterActivityComponent,
    ActivityViewComponent
  ],
  //Importo la ruta
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
