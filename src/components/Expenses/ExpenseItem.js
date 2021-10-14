import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

import './ExpenseItem.css';


const ExpenseItem = (props) => {
    
    // //Syntax for "useSate() function"
    // const [title, setTitle ] = useState(props.title);

    // const clickHandler = () => {
    //     //Call setTitle with the new updated name
    //     setTitle('Updated!')
    //     console.log(title);
    // }

    return (
        <li>
            <Card className = "expense-item">
                    <ExpenseDate date = {props.date}/>
                    <div className = "expense-item__description">
                            <h2 className="expense-item h2 ">{props.title} </h2>
                            <div className = "expense-item__price">${props.amount}</div>
                            {/* Use the onClick property that points to a function that changes the title 
                            <button className="buttons" onClick={clickHandler}>Change title </button> */}
                    </div>        
            </Card>
        </li>
         
    )
}

export default ExpenseItem;