import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmsComponent } from './body/alarms/alarms.component';
import { AlarmsListComponent } from './body/alarms/alarms-list/alarms-list.component';
import { AlarmsDetailComponent } from './body/alarms/alarms-detail/alarms-detail.component';
import { TracksComponent } from './body/tracks/tracks.component';
import { JournalComponent } from './body/journal/journal.component';
import { CalendarComponent } from './body/calendar/calendar.component';
import { VoiceNotesComponent } from './body/voice-notes/voice-notes.component';
import { DreamJournalComponent } from './body/dream-journal/dream-journal.component';
import { BodyComponent } from './body/body.component';

const appRoutes: Routes = [
  { path: '', component: BodyComponent, children: [
    {path: '', component: AlarmsComponent},
    {path: 'Alarms', component: AlarmsComponent,
      children: [
        {path: '', component: AlarmsListComponent},
        {path: 'list', component: AlarmsListComponent},
        {path: 'detail', component: AlarmsDetailComponent},
      ]},
    {path: 'Tracks', component: TracksComponent},
    {path: 'Journal', component: JournalComponent},
    {path: 'Calendar', component: CalendarComponent},
    {path: 'Voice_Notes', component: VoiceNotesComponent},
    {path: 'Dream_journal', component: DreamJournalComponent}
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

  