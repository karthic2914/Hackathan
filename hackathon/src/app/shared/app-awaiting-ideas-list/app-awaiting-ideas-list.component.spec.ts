import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAwaitingIdeasListComponent } from './app-awaiting-ideas-list.component';

describe('AppAwaitingIdeasListComponent', () => {
  let component: AppAwaitingIdeasListComponent;
  let fixture: ComponentFixture<AppAwaitingIdeasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAwaitingIdeasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAwaitingIdeasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
