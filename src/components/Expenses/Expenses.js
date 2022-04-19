import "./Expenses.css";
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
function Expenses(props) {
  const [filterYear , updateFilterYear] = useState('all');
  let filteredExpenses = [];
  if(filterYear === 'all'){
    filteredExpenses = props.expenseData;
  }
  else{
    filteredExpenses = props.expenseData.filter((expense)=>  expense.expenseDate.getFullYear().toString() === filterYear);
  }
  
  const filterSubmitHandler= (year)=>{
    updateFilterYear(year);
    console.log(year)

  }
  return (
    <div>    
      <div className="expenses">
        <ExpenseFilter selected = {filterYear} filterSubmitHandler = {filterSubmitHandler}/>

        {filteredExpenses.map((expense) => (<ExpenseItem key = {expense.id} title = {expense.expenseTitle} amount = {expense.expenseAmount} date = {expense.expenseDate} />))}

      </div>
    </div>
  );
}
export default Expenses;
