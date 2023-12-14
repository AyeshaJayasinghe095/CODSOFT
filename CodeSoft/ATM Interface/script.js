class BankAccount {
    constructor(balance) {
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        return true;
      }
      return false;
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        return true;
      }
      return false;
    }
  
    checkBalance() {
      return this.balance;
    }
  }
  
  const account = new BankAccount(1000);
  
  function updateBalanceDisplay() {
    document.getElementById('balance').textContent = `$${account.checkBalance()}`;
  }
  
  function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (account.withdraw(amount)) {
      updateBalanceDisplay();
      document.getElementById('message').textContent = `Withdrawn $${amount} successfully.`;
    } else {
      document.getElementById('message').textContent = `Withdrawal failed. Insufficient balance or invalid amount.`;
    }
  }
  
  function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (account.deposit(amount)) {
      updateBalanceDisplay();
      document.getElementById('message').textContent = `Deposited $${amount} successfully.`;
    } else {
      document.getElementById('message').textContent = `Deposit failed. Please enter a valid amount.`;
    }
  }
  
  function checkBalance() {
    const balance = account.checkBalance();
    document.getElementById('message').textContent = `Your current balance is $${balance}.`;
  }
  