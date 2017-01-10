import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Alarm} from './Alarm';
// import {ALARMS} from './alarms'
import { Observable } from 'rxjs';

@Injectable()
export class AlarmsService {

  url: string = 'http://192.168.1.19:4000/';

  constructor(private http: Http) {
   
   }

  public getAlarms(): Observable<Array<Alarm>> {
    return this.http.get(this.url + 'api/alarms')
        .map(res => {
            let json = res.json() 
            console.log(json);
            return res.json().data;
    });
  }

  public getAlarm(id: string): Observable<Alarm> {
    return this.http.get(this.url + `api/alarms/${id}`)
        .map(res => {
            let json = res.json() 
            console.log(json);
            return res.json().data;
    });
  }


  //static service
//   public getAlarm(id: number): Observable<Alarm> {
//     return new Observable<Alarm>(observer => {
//           setTimeout(() => {
//               observer.next(ALARMS.find(alarm => alarm.id == id));
//           }, 500);
        
//           setTimeout(() => {
//               observer.complete();
//           }, 1000);
//       });
     

//   }

  

}
