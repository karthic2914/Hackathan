import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLiveFeedDetailsComponent } from './app-live-feed-details.component';

describe('AppLiveFeedDetailsComponent', () => {
  let component: AppLiveFeedDetailsComponent;
  let fixture: ComponentFixture<AppLiveFeedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLiveFeedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLiveFeedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
