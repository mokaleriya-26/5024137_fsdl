import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    if (saved) setTransactions(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount),
    };

    setTransactions([newTransaction, ...transactions]);
    setText("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const total = income + expense;

  return (
    <div className="app">
      <div className="container">
        <h1>💰 Expense Tracker</h1>

        <div className="balance-card">
          <h3>Total Balance</h3>
          <h2>₹ {total}</h2>
        </div>

        <div className="summary">
          <div className="income">
            <h4>Income</h4>
            <p>₹ {income}</p>
          </div>
          <div className="expense">
            <h4>Expense</h4>
            <p>₹ {Math.abs(expense)}</p>
          </div>
        </div>

        <form onSubmit={addTransaction} className="form">
          <input
            type="text"
            placeholder="Description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount (+income, -expense)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Add Transaction</button>
        </form>

        <ul className="transaction-list">
          {transactions.map((item) => (
            <li
              key={item.id}
              className={item.amount > 0 ? "plus" : "minus"}
            >
              <span>{item.text}</span>
              <span>
                ₹ {item.amount}
                <button onClick={() => deleteTransaction(item.id)}>❌</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;