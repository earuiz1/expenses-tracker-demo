import React, {useState} from 'react'

import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    //Setting the state for the title, amount and date
    const [enteredTitle , setEnteredTitle ] = useState('');
    const [enteredAmount , setEnteredAmount ] = useState('');
    const [enteredDate , setEnteredDate ] = useState('');

    //Creating event handler to set the title, amount and date
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        //Prevents the page from reloading 
        event.preventDefault();

        //Object to store all data 
        const expenseData={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),

        };

        //Log the data to see if it works
        //console.log(expenseData);

        //Now, actually call the function you declared in NewExpense.js and pass the of the form (expenseData)
        props.onSaveExpenseData(expenseData);

        //Reset the values after the data is submmited to clear the input (Two-way binding)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return (
        <div>
        {/* //Use the onSubmit property to listen to changes in the form  */}
        <form onSubmit ={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                </div>
                <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
      </form> 
      </div>     
    )
}

export default ExpenseForm
