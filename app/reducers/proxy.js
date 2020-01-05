import {ActionTypes} from  "react-websockets-middleware"
import type { Action } from './types';

export default function receiveProxyData(state, action: Action) {
  if(!state) {
    return {}
  }
  switch (action.type) {
    case ActionTypes.WEBSOCKET_RECEIVE_DATA:
      if(state) {
        if(!state.payload)
        {
          state.payload=[]
        }
        state.payload.push(action.payload.data)
        return {
          ...state,
          payload: state.payload,
        };

      } else {
        return {};
      }
      default:
      return state;
  }

}
