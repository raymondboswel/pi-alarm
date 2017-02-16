import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlarmsService } from '../alarms.service';
import {Alarm} from '../Alarm';

@Component({
  selector: 'app-alarms-list',
  templateUrl: './alarms-list.component.html',
  styleUrls: ['./alarms-list.component.css'],
  providers: [AlarmsService]
})
export class AlarmsListComponent implements OnInit {

  constructor(private AlarmsService: AlarmsService, private router: Router) { }

  public alarms = [];

  ngOnInit() {

    this.AlarmsService.getStaticAlarms().subscribe( res => {
      console.log(res);
      this.alarms = res;
    });

  }

  gotoAlarm(alarm: Alarm) {
    this.router.navigate(['/Alarms/detail', alarm.id]);
  }

  

}
