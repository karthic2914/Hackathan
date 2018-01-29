import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { AppStore } from './models/hackathon-store.model';
import { cmsReducer  } from './reducers/cms.reducer';
import { userReducer } from './reducers/user.reducer';
import { logsReducer } from './reducers/logs.reducer';
import { ideaReducer } from './reducers/idea.reducer';
import { adminReducer } from './reducers/admin.reducer';

export const rootReducer = {
  cms : cmsReducer,
  user : userReducer,
  logs : logsReducer,
  ideas: ideaReducer,
  news : adminReducer
};


const productionReducer: ActionReducer<AppStore> = combineReducers(rootReducer);

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducer)
  ]
})
export class HackathonStoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HackathonStoreModule,
      providers: []
    };
  }
}
