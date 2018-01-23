import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationFromHackerComponent } from './invitation-from-hacker.component';

describe('InvitationFromHackerComponent', () => {
  let component: InvitationFromHackerComponent;
  let fixture: ComponentFixture<InvitationFromHackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationFromHackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationFromHackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
