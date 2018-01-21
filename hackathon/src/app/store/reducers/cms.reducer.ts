import { ActionReducer, Action } from '@ngrx/store';
import { CMS } from '../models/cms.model';
import { CmsAction } from '../actions/cms.action';

export const LOAD_CMS_DATA = 'LOAD_CMS_DATA';
/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function cmsReducer(state: CMS = {cms: undefined}, action: CmsAction): CMS {
    switch (action.type) {
        case LOAD_CMS_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
