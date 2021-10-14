import React from 'react'

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    //Create a function to pass the filter value from a child component to a parent
    const FilterChangeHandler = (event) => {

      //console.log(event.target.value);
      props.onAddChangeFilter(event.target.value);
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* Use the onChange property to listen to changes in the filter */}
        {/* Use two way binding to reset the filter year once you reload the page */}
        <select value={props.defaultYear} onChange ={FilterChangeHandler}>
          <option value='2022' >2022</option>
          <option value='2021' >2021</option>
          <option value='2020' >2020</option>
          <option value='2019' >2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;