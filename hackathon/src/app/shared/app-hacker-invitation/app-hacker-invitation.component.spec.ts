import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHackerInvitationComponent } from './app-hacker-invitation.component';

describe('AppHackerInvitationComponent', () => {
  let component: AppHackerInvitationComponent;
  let fixture: ComponentFixture<AppHackerInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHackerInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHackerInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
