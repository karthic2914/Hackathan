import { CmsStateService } from './cms-state.service';
import { BlogService } from './blog.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';


export function startupServiceFactory(cmsStateService: CmsStateService, blogService: BlogService): Function {
  return () => {
   Observable.fromPromise(cmsStateService.loadCMS().then(() => {
     this.blogService.getBlogs;
    // Home page service call here;
  }));
  };
}
