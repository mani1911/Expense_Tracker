import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import React, {useState} from "react";
const tempExpenses = [

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
