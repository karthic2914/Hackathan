import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHackerTeamInvitationComponent } from './app-hacker-team-invitation.component';

describe('AppHackerTeamInvitationComponent', () => {
  let component: AppHackerTeamInvitationComponent;
  let fixture: ComponentFixture<AppHackerTeamInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHackerTeamInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHackerTeamInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
