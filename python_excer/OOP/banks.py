

class BankAccount:
    def __init__(self, intrate, balance=0):
        self.intrate = intrate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdrawl(self, amount):
        if(self.balance - amount)>0:
            self.balance - amount
        else: 
            print("Insufficient Funds")
        return self
    def write_check(self, amount):
        self.balance -= amount 

    def display_account_info(self):
        self.balance
        return self

class RetirementAccount(BankAccount):
    def __init__(self, int_rate, is_roth, balance=0):
        super().__init__(int_rate, balance)
        self.is_roth = is_roth
    def depsosit(self, amount):
        super()deposit(amount)## NOT working
    def withdrawl(self, amount, is_early):
        if is_early:
            amount = amount *1.1
        super().withdrawl(amount)
        return self
    def display_account_info(self):
        self.balance
        return self