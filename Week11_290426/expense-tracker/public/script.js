const API = "/api/expenses";

const form = document.getElementById("expenseForm");
const list = document.getElementById("list");
const balance = document.getElementById("balance");

// Load expenses
async function load() {
  const res = await fetch(API);
  const data = await res.json();

  list.innerHTML = "";

  let total = 0;

  data.forEach(exp => {
    total += Number(exp.amount);

    const li = document.createElement("li");
    li.innerHTML = `
      ${exp.title} - ₹${exp.amount}
      <button class="delete" onclick="deleteExpense('${exp._id}')">X</button>
    `;
    list.appendChild(li);
  });

  balance.innerText = "₹" + total;
}

// Add expense
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const expense = {
    title: document.getElementById("title").value,
    amount: document.getElementById("amount").value,
    category: document.getElementById("category").value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense)
  });

  form.reset();
  load();
});

// Delete expense
async function deleteExpense(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  load();
}

load();