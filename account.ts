export class Account {
  private balance: number = 0;
  private transactionHistory: { date: Date; amount: number }[] = [];
  private dailyWithdrawalLimit: number = 1000;
  private date: Date = new Date();

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): number {
    if (amount <= 0) {
      throw new Error("Deposit must be greater than zero");
    }
    this.balance += amount;
    this.transactionHistory.push({ date: this.date, amount: amount });
    return this.balance;
  }

  withdraw(amount: number): number {
    if (amount <= 0) {
      throw new Error("Withdrawal must be greater than zero");
    }
    if (this.balance - amount < 0) {
      throw new Error("Negative balance not allowed");
    }
    if (
      this.getWithdrawalSumFor(this.date) + amount >
      this.dailyWithdrawalLimit
    ) {
      throw new Error("Daily limit reached");
    }
    this.balance -= amount;
    this.transactionHistory.push({ date: this.date, amount: amount * -1 });
    return this.balance;
  }

  getWithdrawalSumFor(date: Date): number {
    return this.transactionHistory
      .filter(
        (t) => t.amount < 0 && t.date.toDateString() === date.toDateString()
      )
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  }

  setDateForTest(date: Date): void {
    this.date = date;
  }
}
