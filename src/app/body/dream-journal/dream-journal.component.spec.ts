/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DreamJournalComponent } from './dream-journal.component';

describe('DreamJournalComponent', () => {
  let component: DreamJournalComponent;
  let fixture: ComponentFixture<DreamJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
