import React from 'react'
import ChartBar from './ChartBar';

import './Chart.css'

const Chart = (props) => {

    //Transform an array of objects to an array of numbers so we can work around the max fucntion built in Js
    const dataPointsValues = props.dataPoints.map(x => x.value);

    //Find the maximum value of each month and use the spread operator "..." since we whave an array of numbers 
    const totalMax = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {/* Output the chartbars dynamically by going thorugh an array of data points and mapping every data point to a chart bar */}
            {props.dataPoints.map(x => <ChartBar key={x.label} value = {x.value} maxValue ={totalMax} label={x.label}/>)}  
        </div>
    )
}

export default Chart
