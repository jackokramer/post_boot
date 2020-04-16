class Cars:
    def __init__(self, price, speed, fuel, mileage, tax):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = tax
    def description(self):
        return '${} and has {}mph and is {} as well as about {}mpgs with a tax of {}'.format(self.price, self.speed, self.fuel, self.mileage, self.tax)

car1 = Cars(2000, 35, 'full', 15, .12)
car2 = Cars(2000, 5, 'Not Full', 105, .12)
car3 = Cars(2000, 15, 'Kind of Full', 95, .12)
car4 = Cars(2000, 25, 'Kind of Full', 95, .12)
car5 = Cars(2000, 45, 'Empty', 25, .12)
car6 = Cars(2000000, 35, 'Empty', 15, .15)