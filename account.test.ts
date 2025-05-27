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
});
