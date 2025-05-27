import { Account } from "./account";

describe("Account", () => {
  it("returns a number when account balance is requested", () => {
    const account = new Account();
    const balance = account.getBalance();
    expect(balance).toBeTypeOf("number");
  });

  it("deposits correctly to an empty account", () => {
    const account = new Account();
    expect(account.deposit(50)).toBe(50);
  });

  it("deposits correctly to existing balance", () => {
    const account = new Account();
    account.deposit(40);
    expect(account.deposit(30.5)).toBe(70.5);
  });

  it("rejects deposits of values equal or lower than zero", () => {
    const account = new Account();
    expect(() => account.deposit(0)).toThrow(
      "Deposit must be greater than zero"
    );
  });

  it("rejects withdrawals that would lead to a negative balance", () => {
    const account = new Account();
    account.deposit(10);
    expect(() => account.withdraw(20.2)).toThrow(
      "Negative balance not allowed"
    );
  });

  it("withdraws correctly from existing balance", () => {
    const account = new Account();
    account.deposit(100);
    expect(account.withdraw(30.2)).toBe(69.8);
  });

  it("rejects withdrawals of values equal or lower than zero", () => {
    const account = new Account();
    expect(() => account.withdraw(0)).toThrow(
      "Withdrawal must be greater than zero"
    );
  });
});
