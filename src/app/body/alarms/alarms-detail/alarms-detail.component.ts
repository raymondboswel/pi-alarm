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
  id: string='';
  constructor(private route: ActivatedRoute, private alarmsService: AlarmsService, private router: Router) { }

  ngOnInit() {
     this.route.params.forEach((params: Params) => {
      this.id = params['id']; 
    });

    if(this.id != undefined) {
      this.alarmsService.getAlarm(this.id).subscribe( res => {
        this.alarm = res;
      });
    }
   
  }

}
