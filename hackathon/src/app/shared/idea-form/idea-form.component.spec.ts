import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { IdeaFormComponent } from './idea-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';
import { BsModalService } from 'ngx-bootstrap';
import { XHRBackend, ResponseOptions, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../store/services/api.service';

class HackerStateMockService {
  postAnIdea(){
    return new Promise(()=>{});
  }
}

class BsModalMockService {
  hide(idx: number){
    console.log('modal close method called');
  }
}

describe('IdeaFormComponent', () => {
  let component: IdeaFormComponent;
  let fixture: ComponentFixture<IdeaFormComponent>;
  let hackerStateService: HackerStateService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaFormComponent ],
      providers: [
       // HackerStateService,HttpClient,ApiService,
        {provide: BsModalService, useClass: BsModalMockService},
        {provide: HackerStateService, useClass: HackerStateMockService },
      ],
      imports: [],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hackerStateService = TestBed.get(HackerStateService);
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });

  it('should create progile form on nginit', () => {
    component.ngOnInit();
    expect(component['hackerProfileForm']).toBeTruthy();
  });


  it('should be created', inject([BsModalService], (service: BsModalService) => {
    let spy = spyOn(service, 'hide').and.returnValue(undefined); 
    component['modalClose']('');
    expect(service.hide).toHaveBeenCalled(); 

  }));
  it('should clear the form values on clear', () => {
    component['clear']();
    expect(component['hackerProfileForm'].get('title').value).toEqual(null);
  });
  it('should open the modal', () => {
    component['openModal']();
    expect(component['display']).toEqual('block');
  });
  it('should close the modal', () => {
    component['onCloseModal']();
    expect(component['display']).toEqual('none');
  });

  /* it('should close the modal', (done) => {
    let spy = spyOn(hackerStateService, 'postAnIdea')
        .and.returnValue(Promise.resolve({status: 'success'}));
    
     spy.calls.mostRecent().returnValue.then((res) => {
      console.log('res',res);
      expect(res).toBeTruthy();
      done();
    }); 
  });

  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    let spy = spyOn(hackerStateService, 'postAnIdea')
        .and.returnValue(Promise.resolve({status: 'success'}));

    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    //expect(el.textContent).toBe(testQuote);
    console.log('eeeeeeeeee',component['successMessage']);
  })); */


  /* it('should call the post request to post an idea', inject([HackerStateService], (service) => {
    let spy = spyOn(service, 'postAnIdea')
        .and.returnValue(Promise.resolve({status: 'success'}));

    component['onSubmit']('');
    expect(service.postAnIdea).toHaveBeenCalled(); 

  })); */

  

});

//console.log('aaaaaaaaaaaaaaa');
