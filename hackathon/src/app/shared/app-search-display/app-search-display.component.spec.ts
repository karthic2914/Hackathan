import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchDisplayComponent } from './app-search-display.component';

describe('AppSearchDisplayComponent', () => {
  let component: AppSearchDisplayComponent;
  let fixture: ComponentFixture<AppSearchDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
