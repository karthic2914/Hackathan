import { ActionReducer, Action } from '@ngrx/store';
import { News } from '../models/news.model.publish';
import { NewsAction } from '../actions/news.action';

export const LOAD_NEWS_DATA = 'LOAD_NEWS_DATA';


/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function newsReducer(state: News = {news: undefined}, action: NewsAction): News {
    switch (action.type) {
        case LOAD_NEWS_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
