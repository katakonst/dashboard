// @flow
import { SET_DETAIL } from '../actions/reqdetail';
import type { Action } from './types';

export default function reqdetails(state, action: Action) {
  console.log(action)

  if(!state) {
    return {}
  }
  switch (action.type) {
    case SET_DETAIL:
      state.reqDetail = action.payload;
      return state;
    default:
      return state;
  }
}
