import * as types from '../constants/actionTypes';

import FizzBuzzLib from '../lib/fizz-buzz-lib'
const initialState = {
  max: 15,
  fizz: 3,
  buzz: 5,
  list: []
};

let reducer = function (state = initialState, action) {
  
  switch (action.type) {

    case types.CALC_FIZZ_BUZZ:
      return Object.assign({}, state, {
        max: action.payload.max,
        fizz: action.payload.fizz,
        buzz: action.payload.buzz,
        list: action.payload.list
      });
      break;

    case types.UPDATE_VALUES:
      return Object.assign({}, state, {
        max: action.payload.max,
        fizz: action.payload.fizz,
        buzz: action.payload.buzz
      });
      break;

    default:
      return state
  }

}

export default reducer;
