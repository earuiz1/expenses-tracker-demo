import React, {useState} from 'react'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

import './Expenses.css';

const Expenses = (props) => {


    //Create the state 
    const [enteredYear, setEnteredYear] = useState('2020');
    
    //Create a function to pass down data from a child component to a parent
    const ExpenseFilterHandler = (selectedYear) => {

        console.log('In Expenses.js');
        console.log(selectedYear);

        //Assign the value to the actual state
        setEnteredYear(selectedYear);
     
    }
    
    //Create a new const with all expensesList and filter values based on some condition
    const filteredExpenses = props.expensesList.filter(x => {
        return x.date.getFullYear().toString() === enteredYear;
    });

    return (
        <div>
            <Card className="expenses">

            {/* Create a pointer that points to the ExpenseFilterHandler function */}
            {/* One thing to take into consideration is that the default year never changes once you filter a year, what you can do is pass another props and use two way binding  */}
            <ExpensesFilter defaultYear={enteredYear} onAddChangeFilter = {ExpenseFilterHandler}/>

            {/* To remove the hardcode code below and do things dynamically, create an array full of jsx items using the .map() method in javascript */}
            {/* Add a special property called "key" to help react identify individual items using unique ids to remove warning and avoid future bugs*/}
            {/* Implement logic operation to show a message if a filter year does not have any item available  */}

            {/* {filteredExpenses.length  === 0 && <p> No expenses found. </p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((x) => (
                    <ExpenseItem 
                        key={x.id} 
                        title={x.title} 
                        amount={x.amount} 
                        date={x.date}
                     />
                ))} */}
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;
