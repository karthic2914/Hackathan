import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMasterListComponent } from './app-master-list.component';

describe('AppMasterListComponent', () => {
  let component: AppMasterListComponent;
  let fixture: ComponentFixture<AppMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
