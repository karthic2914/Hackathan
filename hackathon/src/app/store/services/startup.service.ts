import { CmsStateService } from './cms-state.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';


export function startupServiceFactory(cmsStateService: CmsStateService): Function {
  return () => {
   Observable.fromPromise(cmsStateService.loadCMS().then(() => {
    // Home page service call here;
  }));
  };
}
