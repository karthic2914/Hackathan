import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPanelPaginationComponent } from './app-panel-pagination.component';

describe('AppPanelPaginationComponent', () => {
  let component: AppPanelPaginationComponent;
  let fixture: ComponentFixture<AppPanelPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPanelPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPanelPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
