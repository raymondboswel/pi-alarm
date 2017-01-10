import { Track } from '../tracks/shared/track';

export class Alarm {
  description: string = '';
  time: number = 0;
  id: string= '';
  date: string = '';
  track: Track = new Track();
}