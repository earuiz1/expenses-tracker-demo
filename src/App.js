
import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

 //Array with dummy data
 const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  //Create the state
  const [expenses,setExpenses] = useState(DUMMY_DATA);
  
  //Create a function to pass down data from a child component to a parent
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);

    //Call setExpenses to set expenses array to a new array which include the new expense
    //A clean way to update a state when is based on an older snapshot of that state
    setExpenses(prevExpenses => {
      return[expense, ...prevExpenses]
    });
   
  };


  return (
    <div>
       {/* Follow the same parent to communicate to a parent */}
       {/* Create a pointer that points to the addExpenseHandler function */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expensesList = {expenses}/>
    </div>
  );
}

export default App;
