import React, { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [form, setForm] = useState({ title: "", amount: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) return;
    addExpense(form);
    setForm({ title: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Expense title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
      />
      <button>Add Expense</button>
    </form>
  );
}