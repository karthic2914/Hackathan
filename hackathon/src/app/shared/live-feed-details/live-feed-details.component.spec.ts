import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveFeedDetailsComponent } from './live-feed-details.component';

describe('LiveFeedDetailsComponent', () => {
  let component: LiveFeedDetailsComponent;
  let fixture: ComponentFixture<LiveFeedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveFeedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveFeedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
