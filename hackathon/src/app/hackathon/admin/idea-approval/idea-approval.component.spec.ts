import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaApprovalComponent } from './idea-approval.component';

describe('IdeaApprovalComponent', () => {
  let component: IdeaApprovalComponent;
  let fixture: ComponentFixture<IdeaApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
