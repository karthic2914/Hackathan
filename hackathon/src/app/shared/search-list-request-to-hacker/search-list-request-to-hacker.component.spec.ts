import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListRequestToHackerComponent } from './search-list-request-to-hacker.component';

describe('SearchListRequestToHackerComponent', () => {
  let component: SearchListRequestToHackerComponent;
  let fixture: ComponentFixture<SearchListRequestToHackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListRequestToHackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListRequestToHackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
