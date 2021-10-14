import React from 'react'
import './ExpenseDate.css';

const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: 'numeric'});
    const year = props.date.toLocaleString('en-US', {year: 'numeric'});

    return (
        <div className = "expense-date">
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
        </div>
    )
}

export default ExpenseDate;
