import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerInvitationComponent } from './hacker-invitation.component';

describe('HackerInvitationComponent', () => {
  let component: HackerInvitationComponent;
  let fixture: ComponentFixture<HackerInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackerInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
