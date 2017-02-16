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
  date: any;
  private showDatePicker: boolean;
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

  toggleDatePicker(status: boolean): void  {
    this.showDatePicker = status;
  }
    
  setDate(date: any): void {
    this.date = date;
  }

  private time: any;
  private showTimePicker: boolean;
    
  toggleTimePicker(status: boolean): void  {
    this.showTimePicker = status;
  }
    
  setTime(time: any): void {
    this.time = time;
  }
}
