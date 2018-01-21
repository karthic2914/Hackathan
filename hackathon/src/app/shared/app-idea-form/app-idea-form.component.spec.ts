import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIdeaFormComponent } from './app-idea-form.component';

describe('AppIdeaFormComponent', () => {
  let component: AppIdeaFormComponent;
  let fixture: ComponentFixture<AppIdeaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppIdeaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppIdeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
