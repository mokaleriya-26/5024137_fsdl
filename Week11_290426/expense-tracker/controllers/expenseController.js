const Expense = require("../models/Expense");

// Create Expense
exports.addExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    const saved = await expense.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Expenses
exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};