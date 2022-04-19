import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const newExpenseData = (expense)=>{
    console.log(expense);
    const n = {
      ...expense,
      id : Math.random().toString()
    };
    props.onSaveNewInput(n);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense = {newExpenseData} />
    </div>
  );
};

export default NewExpense;
