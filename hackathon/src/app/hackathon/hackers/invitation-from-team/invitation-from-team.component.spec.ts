import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationFromTeamComponent } from './invitation-from-team.component';

describe('InvitationFromTeamComponent', () => {
  let component: InvitationFromTeamComponent;
  let fixture: ComponentFixture<InvitationFromTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationFromTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationFromTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
