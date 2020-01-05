// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';
import type { counterStateType } from '../reducers/types';
import { createWebSocketMiddleware } from "react-websockets-middleware"


const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const socketMiddleware = createWebSocketMiddleware({
  endpoint: "ws://localhost:3030/ws"
})
const enhancer = applyMiddleware(thunk, router, socketMiddleware);

function configureStore(initialState?: counterStateType) {
  return createStore<*, counterStateType, *>(
    rootReducer,
    initialState,
    enhancer
  );
}

export default { configureStore, history };
