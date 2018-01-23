import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationToHackerComponent } from './invitation-to-hacker.component';

describe('InvitationToHackerComponent', () => {
  let component: InvitationToHackerComponent;
  let fixture: ComponentFixture<InvitationToHackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationToHackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationToHackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
