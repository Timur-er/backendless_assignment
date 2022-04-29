import {combineReducers} from "redux";
import {chartStyleReducer} from "./ChartStyle/chartStyleReducer";
import {chartDataReducer} from "./ChartData/chartDataReducer";

const rootReducer = combineReducers({
    chartData: chartDataReducer,
    chartType: chartStyleReducer
})

export default rootReducer;