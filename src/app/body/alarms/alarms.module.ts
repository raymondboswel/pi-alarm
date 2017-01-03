import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlarmsComponent } from './alarms.component';
import { AlarmsService } from './alarms.service';
import { AlarmsDetailComponent } from './alarms-detail/alarms-detail.component';
import { AlarmsListComponent } from './alarms-list/alarms-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AlarmsComponent, AlarmsDetailComponent, AlarmsListComponent],
  providers: [AlarmsService]
})
export class AlarmsModule { 

  
}
