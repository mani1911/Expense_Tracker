import { useState } from 'react';
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [ setNewTitle , addSetTitle ] = useState('');
  const [ setNewAmount , addSetAmount ] = useState('');
  const [ setNewDate , addSetDate ] = useState('');
  const setTitle = (e)=>{
    addSetTitle(e.target.value);
  }
  const setAmount = (e)=>{
    addSetAmount(e.target.value);
  }
  const setDate =(e)=>{
    addSetDate(e.target.value);
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    const userInput = {
      expenseTitle : setNewTitle,
      expenseAmount : setNewAmount,
      expenseDate : new Date(setNewDate)
    };
    props.onSaveNewExpense(userInput);
    addSetTitle('');
    addSetAmount('');
    addSetDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={setTitle} value = {setNewTitle} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange = {setAmount} value = {setNewAmount} type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input onChange = {setDate} value = {setNewDate} type="date" min="2019-01-01" max="2022-04-30" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
