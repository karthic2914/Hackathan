import { User, UserData } from '../models/user.model';
import { CmsAction } from '../actions/cms.action';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

/**
 * sessionReducer: Reducer for the session data
 * @param state Session
 * @param action Action
 */

export function userReducer(state: User = {}, action: CmsAction): User {
  switch (action.type) {
    case USER_LOGGED_IN:
      return Object.assign({}, state, action.payload.user);
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}
