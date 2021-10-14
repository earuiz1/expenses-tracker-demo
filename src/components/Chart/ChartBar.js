import React from 'react'

import './ChartBar.css'

const ChartBar = (props) => {

    //This variable will be assigned as a css style
    let barFillHeight = "0%";

    //If max value is grater than 0
    if(props.maxValue > 0){
        //If so, obtain the percentage between 0 and 100 by which this bar will be filled and convert it to a string
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* Set the style height css dynamically */}
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            {/* Output label  */}
            <div className="chart-bar__label">{props.label}</div>      
        </div>
    )
}

export default ChartBar
