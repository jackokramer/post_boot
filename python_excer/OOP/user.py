class User: ## class is a blueprint to create something 
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.logged = True
    def login(self):
        self.logged = True
        print(self.name + 'is logged in.')
        return self
    def logut(self):
        self.logged = False
        print(self.name + 'is logged out')
        return self
    def show(self):
        print(f"My name is {self.name}. You can email me at {self.email}.")
        return self

Jack = User('jack', 'jackokramer@gmail.com')
Andy = User('andy', 'andreaskramer19@gmail.com')

print(Andy.email)
print(Jack.name)

Jack.name().email()