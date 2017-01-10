import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlarmsService } from '../alarms.service';
import { Alarm } from '../alarm';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-alarms-detail',
  templateUrl: './alarms-detail.component.html',
  styleUrls: ['./alarms-detail.component.css']
})
export class AlarmsDetailComponent implements OnInit {
  alarm: Alarm = new Alarm();
  constructor(private route: ActivatedRoute, private alarmsService: AlarmsService, private router: Router) { }

  ngOnInit() {
    // this.route.params
    //   .switchMap((params: Params) => this.alarmsService.getAlarm(+params['id']))
    //   .subscribe((alarm: Alarm) => {
    //     this.alarm = alarm;
    //     console.log(alarm);
    //   });
  }

}
