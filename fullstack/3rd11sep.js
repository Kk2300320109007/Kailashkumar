class BankAccount {
    // Constructor to initialize account properties
    constructor(accountNumber, accountHolderName, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit successful: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal successful: $${amount}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds for this withdrawal.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }

    // Method to display the account balance
    displayBalance() {
        console.log(`Account Balance: $${this.balance}`);
    }
}

// Example usage

// Create a new bank account
const myAccount = new BankAccount("123456", "Kailash Kumar", 500);

// Perform some transactions
myAccount.deposit(200);       // Deposit $200
myAccount.withdraw(100);      // Withdraw $100
myAccount.withdraw(700);      // Attempt to withdraw more than the balance
myAccount.deposit(-50);       // Attempt to deposit a negative amount

// Display the final balance
myAccount.displayBalance();    // Should display the remaining balance
