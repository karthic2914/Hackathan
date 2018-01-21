import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPublishFormComponent } from './app-publish-form.component';

describe('AppPublishFormComponent', () => {
  let component: AppPublishFormComponent;
  let fixture: ComponentFixture<AppPublishFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPublishFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPublishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
