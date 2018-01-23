import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingIdeasListComponent } from './awaiting-ideas-list.component';

describe('AwaitingIdeasListComponent', () => {
  let component: AwaitingIdeasListComponent;
  let fixture: ComponentFixture<AwaitingIdeasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingIdeasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingIdeasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
