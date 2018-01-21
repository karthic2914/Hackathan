import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchListComponent } from './app-search-list.component';

describe('AppSearchListComponent', () => {
  let component: AppSearchListComponent;
  let fixture: ComponentFixture<AppSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
