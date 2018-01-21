import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHackathonBannerComponent } from './app-hackathon-banner.component';

describe('AppHackathonBannerComponent', () => {
  let component: AppHackathonBannerComponent;
  let fixture: ComponentFixture<AppHackathonBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHackathonBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHackathonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
