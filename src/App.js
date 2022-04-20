import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import React, {useState} from "react";
const tempExpenses = [
  {
    expenseTitle : 'Car',
    expenseAmount : 123,
    expenseDate : new Date(2021, 3, 21),
    id : 1
  }
];
function App() {
  const [expenseData , addNewExpenseHandler ] = useState(tempExpenses);

  const addExpenseHandler = (expense) =>{
    addNewExpenseHandler(prevExpenses =>{
      console.log(expense)
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onSaveNewInput={addExpenseHandler}/>
      <Expenses expenseData={expenseData} />
    </div>
  );
}

export default App;
