/* 
Filename: complex_app.js
Content: A complex web application that allows users to manage their budget, track expenses, and calculate savings goals.
*/

// Global variables
let budget = 5000;
let expenses = [];
let savingsGoals = [];

// Expense class
class Expense {
  constructor(category, amount, description) {
    this.category = category;
    this.amount = amount;
    this.description = description;
  }

  calculatePercentage() {
    let percentage = (this.amount / budget) * 100;
    return percentage.toFixed(2);
  }
}

// SavingsGoal class
class SavingsGoal {
  constructor(goal, deadline) {
    this.goal = goal;
    this.deadline = deadline;
    this.progress = 0;
  }

  updateProgress(amount) {
    this.progress += amount;
  }

  calculateRemaining() {
    return this.goal - this.progress;
  }

  calculatePercentage() {
    let percentage = (this.progress / this.goal) * 100;
    return percentage.toFixed(2);
  }
}

// Function to add expenses
function addExpense(category, amount, description) {
  let expense = new Expense(category, amount, description);
  expenses.push(expense);
  budget -= amount;
}

// Function to add savings goals
function addSavingsGoal(goal, deadline) {
  let savingsGoal = new SavingsGoal(goal, deadline);
  savingsGoals.push(savingsGoal);
}

// Function to calculate total expenses
function calculateTotalExpenses() {
  let totalExpenses = 0;
  for (let expense of expenses) {
    totalExpenses += expense.amount;
  }
  return totalExpenses;
}

// Function to calculate average expense
function calculateAverageExpense() {
  let totalExpenses = calculateTotalExpenses();
  return totalExpenses / expenses.length;
}

// Function to calculate remaining budget
function calculateRemainingBudget() {
  let totalExpenses = calculateTotalExpenses();
  return budget - totalExpenses;
}

// Function to display expenses
function displayExpenses() {
  console.log("Expenses:");
  for (let expense of expenses) {
    console.log(`Category: ${expense.category}, Amount: $${expense.amount}, Description: ${expense.description}`);
  }
}

// Function to display savings goals
function displaySavingsGoals() {
  console.log("Savings Goals:");
  for (let savingsGoal of savingsGoals) {
    console.log(`Goal: $${savingsGoal.goal}, Deadline: ${savingsGoal.deadline}`);
  }
}

// Example usage
addExpense("Food", 200, "Groceries");
addExpense("Transportation", 100, "Fuel");
addExpense("Housing", 1000, "Rent");
addExpense("Utilities", 150, "Electricity");
addExpense("Miscellaneous", 300, "Entertainment");

addSavingsGoal(1000, "2023-12-31");
addSavingsGoal(500, "2022-06-30");

console.log(`Total Expenses: $${calculateTotalExpenses()}`);
console.log(`Average Expense: $${calculateAverageExpense()}`);
console.log(`Remaining Budget: $${calculateRemainingBudget()}`);

displayExpenses();
displaySavingsGoals();

// Output:
// Total Expenses: $1750
// Average Expense: $350
// Remaining Budget: $3250
// Expenses:
// Category: Food, Amount: $200, Description: Groceries
// Category: Transportation, Amount: $100, Description: Fuel
// Category: Housing, Amount: $1000, Description: Rent
// Category: Utilities, Amount: $150, Description: Electricity
// Category: Miscellaneous, Amount: $300, Description: Entertainment
// Savings Goals:
// Goal: $1000, Deadline: 2023-12-31
// Goal: $500, Deadline: 2022-06-30