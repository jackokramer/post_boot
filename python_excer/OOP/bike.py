class Bike:
    def __init__(self, price, max_speed, miles):
        self.price = 0
        self.max_speed = 0
        self.miles = 0
    def displayInfo(self):
        print(f'New bike to purchase at ${self.price} and it can reach a max speed at {self.max_speed} mph and it has {self.miles} on it.')
        return self
    def riding(self):
        self.miles +=10
        print(f"You test rode at {self.miles}. How was it?")
    def reverse(self):
        if self.miles >= 10:
            self.miles -=5
    
bike1 = Bike(400, 25, 10)
bike2 = Bike(600, 30, 0)