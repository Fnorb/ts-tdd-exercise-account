import { Account } from "./account";

describe("Account", () => {
  it("returns a number when account balance is requested", () => {
    const account = new Account();
    const balance = account.getBalance();
    expect(balance).toBeTypeOf("number");
  });
});
