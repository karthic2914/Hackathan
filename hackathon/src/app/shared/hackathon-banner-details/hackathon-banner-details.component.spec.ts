import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonBannerDetailsComponent } from './hackathon-banner-details.component';

describe('HackathonBannerDetailsComponent', () => {
  let component: HackathonBannerDetailsComponent;
  let fixture: ComponentFixture<HackathonBannerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonBannerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonBannerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
