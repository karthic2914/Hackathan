import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../models/hackathon-store.model';

@Injectable()
export class IdeaStateService {

  constructor(private http: HttpClient, private apiService: ApiService, public store: Store<AppStore>) { }

  public getIdeas() {
    return this.apiService.get('idea/approved').then((response: any) => {
      this.store.dispatch({type: 'LOAD_IDEA_DATA', payload: response});
    });
  }

}
