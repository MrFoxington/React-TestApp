import React from "react";
import { Typography, Stack } from "@mui/material";

export default function ExpenseTrackerPage() {
  //Dummy income data
  const incomeData = [
    { id: 1, amount: 500, description: "Salary" },
    { id: 2, amount: 300, description: "Bonus" },
    { id: 3, amount: 700, description: "Investment Income" },
  ];

  //Dummy expense data
  const expenseData = [
    { id: 4, amount: 150, description: "Groceries" },
    { id: 5, amount: 300, description: "Transportation" },
    { id: 6, amount: 200, description: "Entertainment" },
    { id: 7, amount: 200, description: "Entertainment" },
    { id: 8, amount: 200, description: "Entertainment" },
    
  ];

  return (
    <>
      <h1>Expense Tracker Page</h1>
      <p>This is the Expense Tracker page where you can manage and track your expenses.</p>
      <h2>Income List</h2>
      <p>Add income transactions to see how much you have earned.</p>
      <TransactionList transactions={incomeData}></TransactionList>
      <h2>Expenses List</h2>
      <p>Add expenses transactions to see how much you have spent.</p>
      <TransactionList transactions={expenseData}></TransactionList> <h2>Balance Tracker</h2>
      <p>Total Amounts spent vs. earned</p>
       <TransactionTotals incomeData={incomeData} expenseData={expenseData}></TransactionTotals>
 
      <h2>Budget Overview</h2>
      <h2>Reports</h2>
      <h2>Settings</h2>
      {/* Add your expense tracking components here */}
    </>
  );
}

// List component for displaying transactions.
function TransactionList({ transactions }) {
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

// Component to display the transaction item.
function TransactionItem({ transaction }) {
  return (
    <>
      <div className="transaction-item">
        {/* Add more transaction details as needed */}
        <Stack direction="row" spacing={2}>
          <Typography>id: {transaction.id}</Typography>
          <Typography>Desctiption: {transaction.description}</Typography>
          <Typography>Amount: {transaction.amount}</Typography>
        </Stack>
      </div>
    </>
  );
}

function TransactionTotals({incomeData, expenseData}) {
  const income = calculateTotal(incomeData)
  const expense = calculateTotal(expenseData)
  return (
    <>
    <Stack>
      <Typography>Total Income: {income}</Typography>
      <Typography>Total Expense: {expense}</Typography>
    </Stack>
    </>
  )
}

function calculateTotal(transactions) {
  return transactions.reduce((total, transaction) => total + transaction.amount, 0);
}
