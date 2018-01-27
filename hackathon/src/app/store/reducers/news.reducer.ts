import { ActionReducer, Action } from '@ngrx/store';
import { NEWS } from '../models/news.model.publish';
import { newsAction } from '../actions/news.action';

export const LOAD_NEWS_DATA = 'LOAD_NEWS_DATA';
/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function newsReducer(state: NEWS = {news: undefined}, action: newsAction): NEWS {
    switch (action.type) {
        case LOAD_NEWS_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
