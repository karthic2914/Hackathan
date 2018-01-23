import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerTeamInvitationComponent } from './hacker-team-invitation.component';

describe('HackerTeamInvitationComponent', () => {
  let component: HackerTeamInvitationComponent;
  let fixture: ComponentFixture<HackerTeamInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerTeamInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerTeamInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
