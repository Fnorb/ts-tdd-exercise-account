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

  it("allows withdrawals amounting to less than or equal to 1000 daily total", () => {
    const account = new Account();
    expect(account.withdraw(400)).toBeTypeOf("number");
    expect(account.withdraw(400)).toBeTypeOf("number");
    expect(account.withdraw(400)).toBeTypeOf("number");
  });

  it("rejects withdrawals amounting to more than 1000 daily total", () => {
    const account = new Account();
    expect(account.withdraw(400)).toBeTypeOf("number");
    expect(account.withdraw(400)).toBeTypeOf("number");
    expect(() => account.withdraw(400)).toThrow("Daily limit reached");
  });

  it("allows withdrawals amounting to more than 1000 if spread out amongst several days", () => {
    const account = new Account();
    account.setDateForTest(new Date("2025-01-01"));
    expect(account.withdraw(400)).toBeTypeOf("number");
    expect(account.withdraw(400)).toBeTypeOf("number");
    account.setDateForTest(new Date("2025-01-02"));
    expect(account.withdraw(400)).toBeTypeOf("number");
  });
});
