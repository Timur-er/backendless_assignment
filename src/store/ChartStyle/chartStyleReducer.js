import initialStore from "../initialStore";
import {CHANGE_CHART_TYPE} from "./types";

export function chartStyleReducer(style = initialStore.chartType, action) {
    switch (action.type) {
        case CHANGE_CHART_TYPE:
            return action.payload;
        default:
            return style;
    }
}