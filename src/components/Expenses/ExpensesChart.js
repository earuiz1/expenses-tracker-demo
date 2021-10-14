import React from 'react'
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {

    //Create an object with label and value key 
    const chartDataPoints =[
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},

    ];

    //Create a for loop tha loop trhorugh all expenses that we get via props
    for (const expense of props.expenses) {
        //Get the month, starting from 0 where Januanry is 0
        const expenseMonth = expense.date.getMonth();
        //Update the value of the selected datapoint by adding the expense amount
        chartDataPoints[expenseMonth].value += expense.amount;      
    }
    return (
        <div>
            <Chart dataPoints = {chartDataPoints} />      
        </div>
    )
}

export default ExpensesChart
