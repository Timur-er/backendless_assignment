import {changeXDataAction, changeYDataAction} from "./actions";

export const changeChartDataOperation = (data, axis) => dispatch => {
    if (data !== '') {
        if (axis === 'x') {
            dispatch(changeXDataAction(data));
        } else if (axis === 'y') {
            dispatch(changeYDataAction(data))
        }
    }
}