import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelExpandComponent } from './panel-expand.component';

describe('PanelExpandComponent', () => {
  let component: PanelExpandComponent;
  let fixture: ComponentFixture<PanelExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
