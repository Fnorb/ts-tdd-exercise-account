export class Account {
  private balance: number = 0;

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): number {
    if (amount <= 0) {
      throw new Error("Deposit must be greater than zero");
    }
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number {
    if (amount <= 0) {
      throw new Error("Withdrawal must be greater than zero");
    }
    if (this.balance - amount < 0) {
      throw new Error("Negative balance not allowed");
    }
    this.balance -= amount;
    return this.balance;
  }
}
