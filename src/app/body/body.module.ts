import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlarmsModule } from './alarms/alarms.module';
import { TracksComponent } from './tracks/tracks.component';
import { JournalComponent } from './journal/journal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { VoiceNotesComponent } from './voice-notes/voice-notes.component';
import { DreamJournalComponent } from './dream-journal/dream-journal.component';

@NgModule({
  imports: [
    CommonModule,
    AlarmsModule,
    RouterModule
  ],
    declarations: [
                  TracksComponent, 
                  JournalComponent,
                  CalendarComponent, 
                  VoiceNotesComponent, 
                  DreamJournalComponent]
})
export class BodyModule { }
