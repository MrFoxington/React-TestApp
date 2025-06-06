import React from "react";
import { Typography, Stack, TextField, Button } from "@mui/material";

export default function ExpenseTrackerPage() {
  //Dummy income data
  const tmpIncomeData = [
    { id: 1, amount: 500, description: "Salary" },
    { id: 2, amount: 300, description: "Bonus" },
    { id: 3, amount: 700, description: "Investment Income" },
  ];

  //Dummy expense data
  const tmpExpenseData = [
    { id: 4, amount: 150, description: "Groceries" },
    { id: 5, amount: 300, description: "Transportation" },
    { id: 6, amount: 200, description: "Entertainment" },
    { id: 7, amount: 200, description: "Entertainment" },
    { id: 8, amount: 200, description: "Entertainment" },
  ];

  const [incomeData, setIncomeData] = React.useState(tmpIncomeData);
  const [expenseData, setExpenseData] = React.useState(tmpExpenseData);

  function handleAddExpense(amount, description) {
    // Add the new expense to the expenseData array
    const newExpense = {
      id: expenseData.length + 1,
      amount: amount,
      description: description,
    };
    setExpenseData([...expenseData, newExpense]);
  }

  return (
    <>
      <h1>Expense Tracker Page</h1>
      <p>This is the Expense Tracker page where you can manage and track your expenses.</p>
      <h2>Income List</h2>
      <p>Add income transactions to see how much you have earned.</p>
      <TransactionList transactions={incomeData}></TransactionList>
      <h2>Expenses List</h2>
      <p>Add expenses transactions to see how much you have spent.</p>
      <TransactionList transactions={expenseData}></TransactionList>
      <AddTransactionForm onAdd={handleAddExpense} />
      <h2>Balance Tracker</h2>
      <h2>Transaction Totals</h2>
      <p>Total Amounts spent vs. earned</p>
      <TransactionTotals incomeData={incomeData} expenseData={expenseData}></TransactionTotals>

      <h2>Budget Overview</h2>
      <h2>Reports</h2>
      <h2>Settings</h2>
      {/* Add your expense tracking components here */}
    </>
  );
}

// Adds Transaction to the income or expense list.
function AddTransactionForm({ onAdd }) {
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const handleAddTransaction = () => {
    debugger;
    if (description && amount) {
      onAdd(amount, description);
      setDescription("");
      setAmount("");
    }
  };

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  return (
    <>
      <Stack>
        <TextField onChange={handleDescriptionChange} value={description} id="outlined-basic-description" label="Description" variant="outlined" />
        <TextField onChange={handleAmountChange} value={amount} id="outlined-basic-amount" label="Amount" variant="outlined" />
        <Button onClick={handleAddTransaction}>Add Transaction</Button>
      </Stack>
    </>
  );
}

// List component for displaying transactions.
function TransactionList({ transactions }) {
  // Individual Item for displaying each transaction.
  const TransactionItem = ({ transaction }) => {
    return (
      <>
        <div className="transaction-item">
          {/* Add more transaction details as needed */}
          {/* <Stack direction="row" spacing={2} alignItems="center" display="flex" flexWrap="wrap" justifyContent="space-between"> */}

          <Stack direction="row" spacing={10} alignItems="center">
            <Typography>id: {transaction.id}</Typography>
            <Typography>Desctiption: {transaction.description}</Typography>
            <Typography>Amount: {transaction.amount}</Typography>
          </Stack>
        </div>
      </>
    );
  };

  return (
    <>
      <Stack>
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} transaction={transaction} />
        ))}
      </Stack>
    </>
  );
}

//Summary of all income and expense.
function TransactionTotals({ incomeData, expenseData }) {
  const income = calculateTotal(incomeData);
  const expense = calculateTotal(expenseData);
  return (
    <>
      <Stack>
        <Typography>Total Income: {income}</Typography>
        <Typography>Total Expense: {expense}</Typography>
      </Stack>
    </>
  );
}

function calculateTotal(transactions) {
  return transactions.reduce((total, transaction) => total + transaction.amount, 0);
}
