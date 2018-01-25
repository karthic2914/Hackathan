import { ActionReducer, Action } from '@ngrx/store';
import { LOGS } from '../models/logs.model';
import { AdminLogAction } from '../actions/adminlogs.action';

export const LOAD_LOGS_DATA = 'LOAD_LOGS_DATA';
/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function logsReducer(state: LOGS = {logs: undefined}, action: AdminLogAction): LOGS {
    switch (action.type) {
        case LOAD_LOGS_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
