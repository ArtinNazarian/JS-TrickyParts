function createAccount(pin, amount = 0) {
  return {
    checkBalance(userPin) {
      if (userPin !== pin) return "Invalid PIN.";
      return `$${amount}`;
    },

    deposit(userPin, depositAmt) {
      if (userPin !== pin) return "Invalid PIN.";
      amount += depositAmt;
      return `Succesfully deposited $${depositAmt}. Current balance: $${amount}.`;
    },
    withdraw(userPin, withdrawAmt) {
      if (userPin !== pin) return "Invalid PIN.";
      if (withdrawAmt > amount) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      } else {
        amount -= withdrawAmt;
        return `Succesfully withdrew $${withdrawAmt}. Current balance: $${amount}.`;
      }
    },
    changePin(oldPin, newPin) {
      if (oldPin !== pin) return "Invalid PIN.";
      pin = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
