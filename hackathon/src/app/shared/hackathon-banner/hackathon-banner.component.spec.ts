import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonBannerComponent } from './hackathon-banner.component';

describe('HackathonBannerComponent', () => {
  let component: HackathonBannerComponent;
  let fixture: ComponentFixture<HackathonBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
