import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlarmsComponent } from './alarms.component';
import { AlarmsService } from './alarms.service';
import { AlarmsDetailComponent } from './alarms-detail/alarms-detail.component';
import { AlarmsListComponent } from './alarms-list/alarms-list.component';
import { DateTimePickerModule } from 'ng2-date-time-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    DateTimePickerModule
  ],
  declarations: [AlarmsComponent, AlarmsDetailComponent, AlarmsListComponent],
  providers: [AlarmsService]
})
export class AlarmsModule { 

  
}
