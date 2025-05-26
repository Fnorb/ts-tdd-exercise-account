# TDD Account System

A small practice project to apply Test-Driven Development (TDD) using TypeScript, Node.js, and Vitest.

## 📌 Purpose

This project demonstrates how to build a simple account system using the principles of Test-Driven Development. Each feature is developed using the TDD cycle: writing a failing test (Red), implementing the minimal code to pass it (Green), and then improving the code (Refactor).

## 🧩 Features (planned / partially implemented)

- ✅ Create an account
- ✅ View current balance
- ✅ Deposit money
- ✅ Withdraw money (with sufficient balance check)
- 🔄 Daily withdrawal limit (e.g., max 1000€)
- 🔄 Track transaction history
- 🧪 100% test coverage with Vitest
- 🚧 Designed for easy extensibility (e.g. transfers, interest, etc.)

## 🧪 Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Vitest](https://vitest.dev/) for unit testing

## 🚀 Running the Tests

```bash
npm install
npm test
```
