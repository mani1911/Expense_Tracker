import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
function Expenses(props) {
  const [filterYear , updateFilterYear] = useState('2019');
  let filteredExpenses = [];
  if(filterYear === 'all'){
    filteredExpenses = props.expenseData;
  }
  else{
    filteredExpenses = props.expenseData.filter((expense)=>  expense.expenseDate.getFullYear().toString() === filterYear);
  }

  let visibleData = <h2 className="expense-notfound">No Expenses Found.</h2>
  if(filteredExpenses.length > 0){
    visibleData = filteredExpenses.map((expense) => (<ExpenseItem key = {expense.id} title = {expense.expenseTitle} amount = {expense.expenseAmount} date = {expense.expenseDate} />))
  }
  
  const filterSubmitHandler= (year)=>{
    updateFilterYear(year);
    console.log(year)

  }
  return (
    <div>    
      <div className="expenses">
        <ExpenseFilter selected = {filterYear} filterSubmitHandler = {filterSubmitHandler}/>
      </div>
        <ExpensesChart expenses = {filteredExpenses}/>
        {visibleData}
    </div>
  );
}
export default Expenses;
