import React, {useState} from 'react'
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {

    //Create a new state to add and save new expense 
    const [isEditing, setEditing] = useState(false);

     //Create a function to pass down data from a child component to a parent
    const saveExpenseDataHandler = (enteredExpenseData) => {
     
        //Create an object
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        //Now, actually call the function you declared in App.js and pass the values of the form (expenseData)
        props.onAddExpense(expenseData);

        //Show the "Add new Expense" button after the new expense has been added.
        setEditing(false);
    };

    //Create a function to know If button was click set const to true and show the actual form
    const startEditingHandler = () => {
        console.log("Button was clicked");
        setEditing(true);
     
    }

    //Create a function to know If button was click set const to false and show only the button 
    const stopEditingHandler = () => {
        setEditing(false);
     
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
             {/* Create a pointer that points to the saveExpenseDataHandler function */}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense
