import React from "react";

export default function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="expense-item">
      <div>
        <h3>{expense.title}</h3>
        <p>₹ {expense.amount}</p>
      </div>
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </div>
  );
}