import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { AppStore } from './models/hackathon-store.model';
import { cmsReducer  } from './reducers/cms.reducer';

export const rootReducer = {
    cms: cmsReducer
};


const productionReducer: ActionReducer<AppStore> = combineReducers(rootReducer);

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducer)
  ],
  declarations: []
})
export class HackathonStoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HackathonStoreModule,
      providers: []
    };
  }
}
