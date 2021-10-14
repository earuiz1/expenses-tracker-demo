import React from 'react'
import ExpenseItem from './ExpenseItem';

import './ExpensesList.css'


//This component basically is in charge of the condition logic

const ExpensesList = (props) => {

    //If there are no items with the year selected, create an h2 element with a specific message
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return (
        <ul className="expenses-list">
        {
            props.items.map((x) => (
            <ExpenseItem 
                key={x.id} 
                title={x.title} 
                amount={x.amount} 
                date={x.date}
             />
            ))
        }
        </ul>
    )
}

export default ExpensesList
