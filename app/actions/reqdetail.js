// @flow
import type { GetState, Dispatch } from '../reducers/types';

export const SET_DETAIL = 'SET_DETAIL';

export function setDetail(detail) {
  return (dispatch: Dispatch, getState: GetState) => {
    dispatch({type: SET_DETAIL, payload: detail});
  };
}
