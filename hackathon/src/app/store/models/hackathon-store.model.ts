import { CMS } from './cms.model';
import { Ideas } from './ideas.model';
import { User } from './user.model';
import { LOGS } from './logs.model';

export interface AppStore {
    cms: CMS;
    user: User;
    logs: LOGS;
    ideas: Ideas;
}
