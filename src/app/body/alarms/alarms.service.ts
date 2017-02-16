import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Alarm} from './alarm';
import { Track } from '../tracks/shared/track';
import { Observable } from 'rxjs';

@Injectable()
export class AlarmsService {

  url: string = 'http://192.168.1.19:4000/';
  alarms: Array<Alarm> = [];

  constructor(private http: Http) {
      let alarm1 = new Alarm() ;
      let track1 = new Track();
      
      track1.album = 'asdf';
      track1.artist = 'fdsa';
      track1.track_name = 'Wake the fuck up';
      track1.year = '2000';
      
      alarm1.date = "2011-04-20";
      alarm1.description = "Morning alarm";
      alarm1.id = '2';
      alarm1.time = 18000;
      alarm1.track = track1;

      this.alarms.push(alarm1);

   }

  public getAlarms(): Observable<Array<Alarm>> {
    return this.http.get(this.url + 'api/alarms')
        .map(res => {
            let json = res.json() 
            console.log(json);
            return res.json().data;
    });
  }

  public getStaticAlarms(): Observable<Array<Alarm>> {
    return new Observable<Array<Alarm>>(observer => {             
                observer.next(this.alarms);                                        
                observer.complete(this.alarms);            
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
