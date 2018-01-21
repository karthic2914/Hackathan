import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVideoDetailsComponent } from './app-video-details.component';

describe('AppVideoDetailsComponent', () => {
  let component: AppVideoDetailsComponent;
  let fixture: ComponentFixture<AppVideoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppVideoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
