import initialStore from "../initialStore";
import {CHANGE_X_DATA, CHANGE_Y_DATA} from "./types";

export function chartDataReducer (data = initialStore.chartData, action) {
    switch (action.type) {
        case CHANGE_X_DATA:
            return {xAxis: action.payload, yAxis: data.yAxis}
        case CHANGE_Y_DATA:
            return {yAxis: action.payload, xAxis: data.xAxis}
        default:
            return data;
    }
}