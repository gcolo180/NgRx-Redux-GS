import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import { User } from "../user";

export { User } from "../user";

export interface State extends AppState.State {
  users: User;
}
export interface UserState {
  currentUser: User;
  maskUserName: boolean;
}
const initialState: UserState = {
  currentUser: null,
  maskUserName: false,
}

const getUserFeatureState = createFeatureSelector<UserState>('users')

export const getMaskUserName = createSelector(getUserFeatureState, state => state.maskUserName)
export const getCurrentUser = createSelector(getUserFeatureState, state => state.currentUser)

export const userReducer = createReducer(
  initialState,
  on(createAction('[USER] toggle username'), state => {
    console.log('original state: ' + JSON.stringify(state));

    return {
      ...state,
      maskUserName: !state.maskUserName
    }
  })
)