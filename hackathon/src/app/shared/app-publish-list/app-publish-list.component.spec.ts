import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublishListComponent } from './app-publish-list.component';

describe('AppPublishListComponent', () => {
  let component: AppPublishListComponent;
  let fixture: ComponentFixture<AppPublishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPublishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPublishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
