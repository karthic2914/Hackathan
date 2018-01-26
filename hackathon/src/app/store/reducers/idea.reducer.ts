import { ActionReducer, Action } from '@ngrx/store';
import { Ideas } from '../models/ideas.model';
import { IdeaAction } from '../actions/ideas.action';

export const LOAD_IDEA_DATA = 'LOAD_IDEA_DATA';
/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function ideaReducer(state: Ideas = {idea: undefined}, action: IdeaAction): Ideas {
    switch (action.type) {
        case LOAD_IDEA_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
