import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHackathonBannerDetailsComponent } from './app-hackathon-banner-details.component';

describe('AppHackathonBannerDetailsComponent', () => {
  let component: AppHackathonBannerDetailsComponent;
  let fixture: ComponentFixture<AppHackathonBannerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHackathonBannerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHackathonBannerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
