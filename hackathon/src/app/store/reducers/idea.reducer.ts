import { ActionReducer, Action } from '@ngrx/store';
import { Ideas } from '../models/ideas.model';
import { IdeaAction } from '../actions/ideas.action';

export const LOAD_IDEA_DATA = 'LOAD_IDEA_DATA';

export const LOAD_INVITATION_FROM_TEAM = 'LOAD_INVITATION_FROM_TEAM';

export const LOAD_HACKER_DETAILS = 'LOAD_HACKER_DETAILS';

export const LOAD_INVITATION_FROM_HACKER = 'LOAD_INVITATION_FROM_HACKER';

export const LOAD_HACKER_IDEA_DATA = 'LOAD_HACKER_IDEA_DATA';

export const LOAD_HACKER_REQUEST_DATA = 'LOAD_HACKER_REQUEST_DATA';


/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function ideaReducer(state: Ideas = {ideas: undefined, ideasForHacker: undefined}, action: IdeaAction): Ideas {
    switch (action.type) {
        case LOAD_IDEA_DATA:
            return Object.assign({}, state, action.payload);
        case LOAD_INVITATION_FROM_TEAM:
            return Object.assign({}, state, action.payload);
        case LOAD_HACKER_DETAILS:
            return Object.assign({}, state, action.payload);
        case LOAD_INVITATION_FROM_HACKER:
            return Object.assign({}, state, action.payload);
        case LOAD_HACKER_IDEA_DATA:
            return Object.assign({}, state, action.payload);
         case LOAD_HACKER_REQUEST_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
