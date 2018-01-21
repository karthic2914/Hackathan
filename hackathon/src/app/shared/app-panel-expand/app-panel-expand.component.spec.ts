import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPanelExpandComponent } from './app-panel-expand.component';

describe('AppPanelExpandComponent', () => {
  let component: AppPanelExpandComponent;
  let fixture: ComponentFixture<AppPanelExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPanelExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPanelExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
