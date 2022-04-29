import Chart from "./Components/Chart/Chart";
import InputComponent from "./Components/InputComponent/InputComponent";
import RadioBtnBlock from "./Components/RadioBtnBlock/RadioBtnBlock";
import {useSelector} from "react-redux";
import {getChartData} from "./store/ChartData/selectors";
import styles from './App.module.scss';

function App() {
    const chartData = useSelector(getChartData);
    const xAxis = chartData.xAxis.toString();
    const yAxis = chartData.yAxis.toString();

    return (
        <div className={styles.appWrapper}>
            <div className={styles.chartContainer}>
                <Chart/>

                <div className={styles.chartSettingsContainer}>
                    <div className={styles.inputsWrapper}>
                        <InputComponent storeValue={xAxis} label={'X axis label'} axis={'x'}/>
                        <InputComponent storeValue={yAxis} label={'Y axis label'} axis={'y'}/>
                    </div>

                    <div className={styles.radioBtnsWrapper}>
                        <span>Choose the variant of a chart</span>
                        <RadioBtnBlock/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
