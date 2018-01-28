import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDisplayRequestToHackerComponent } from './search-display-request-to-hacker.component';

describe('SearchDisplayRequestToHackerComponent', () => {
  let component: SearchDisplayRequestToHackerComponent;
  let fixture: ComponentFixture<SearchDisplayRequestToHackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDisplayRequestToHackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDisplayRequestToHackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
