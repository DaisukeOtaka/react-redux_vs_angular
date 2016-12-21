import { createAction } from "redux-actions";
import * as types from '../constants/actionTypes'

export const calcFizzBuzz = createAction(types.CALC_FIZZ_BUZZ);
export const updateValues = createAction(types.UPDATE_VALUES);
