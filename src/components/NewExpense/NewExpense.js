import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const toggleIsEditing = () => {
    if (isEditing === false) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };
  let content = <button onClick={ toggleIsEditing }>Add Expense</button>;
  if (isEditing) {
    content = (
      <ExpenseForm
      toggleEditingState={toggleIsEditing}
      onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }
  return <div className="new-expense">{content}</div>;
};
export default NewExpense;
