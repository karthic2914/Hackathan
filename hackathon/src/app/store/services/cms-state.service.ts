import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppStore } from '../../store/models/hackathon-store.model';

import { cmsJSON } from '../../../assets/content/cms.json';
import { Observable } from 'rxjs/Observable';
import { promise } from 'selenium-webdriver';

@Injectable()
export class CmsStateService {

  constructor(public store: Store<AppStore>) {
  }

  /**
   * Fetches CMS data.
   */

  public loadCMS(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(cmsJSON);
    }).then((data: any) => {
      this.store.dispatch({type: 'LOAD_CMS_DATA', payload: data });
    })
    .catch((err: any) => Promise.resolve(err));
  }
}
