import {CHANGE_Y_DATA, CHANGE_X_DATA} from "./types";

export const changeYDataAction = yValues => ({type: CHANGE_Y_DATA, payload: yValues});
export const changeXDataAction = xValues => ({type: CHANGE_X_DATA, payload: xValues});