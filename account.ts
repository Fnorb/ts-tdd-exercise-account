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
}
