import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense
    };
    setExpenses([newExpense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const total = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <div className="app">
      <div className="card">
        <h1>💰 Expense Tracker</h1>
        <h2>Total: ₹ {total}</h2>

        <ExpenseForm addExpense={addExpense} />

        {expenses.length === 0 ? (
          <p>No expenses added</p>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))
        )}
      </div>
    </div>
  );
}