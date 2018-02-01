import { ActionReducer, Action } from '@ngrx/store';
import { NewsModel } from '../models/news.model.publish';
import { AdminAction } from '../actions/admin.action';


export const LOAD_NEWS_DATA = 'LOAD_NEWS_DATA';

/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function adminReducer(state: {news: NewsModel} , action: AdminAction): NewsModel {
    switch (action.type) {
        case LOAD_NEWS_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
