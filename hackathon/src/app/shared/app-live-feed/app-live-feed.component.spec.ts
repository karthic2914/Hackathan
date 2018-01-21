import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLiveFeedComponent } from './app-live-feed.component';

describe('AppLiveFeedComponent', () => {
  let component: AppLiveFeedComponent;
  let fixture: ComponentFixture<AppLiveFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLiveFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLiveFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
