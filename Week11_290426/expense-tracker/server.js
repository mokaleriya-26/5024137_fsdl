require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();
const path = require("path");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use("/api/expenses", require("./routes/expenseRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});