import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationToTeamComponent } from './invitation-to-team.component';

describe('InvitationToTeamComponent', () => {
  let component: InvitationToTeamComponent;
  let fixture: ComponentFixture<InvitationToTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationToTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
