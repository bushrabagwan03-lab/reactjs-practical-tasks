import {
  legacy_createStore as createStore,
  applyMiddleware
} from 'redux';

import { thunk } from 'redux-thunk';

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {

  switch(action.type) {

    case "INCREMENT":

      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state;
  }
}

const store = createStore(
  counterReducer,
  applyMiddleware(thunk)
);

export default store;