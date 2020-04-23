class Vehicles:
    def __init__(self, wheels, capacity, make, model):
        self.wheels = wheels
        self.capacity = capacity
        self.make = make
        self.model = model
        self.mileage = 0
    def drive(self, miles):
        self.mileage += miles
        return self
    def reverse(self, miles):
        self.mileage -= miles
        return self
class Bike(Vehicles):
    def vehicle_type(self):
        return "Bike"
class Car(Vehicles):
    def set_wheels(self):
        self.wheels = 4
        return self
class Airplane(Vehicles):
    def fly(self, miles):
        self.mileage +=miles
        return self
vehic = Vehicles(4,8, 'dodge', 'durango')
print(vehic.make)
bicicleta = Bike(2,1, 'biancci', 'ryder')
print(bicicleta.vehicle_type())
coche =Car(6, 5, 'Toyota', 'Prius')
coche.set_wheels()
print(coche.wheels)
airbus = Airplane(22,900, 'Aitbus', '747')
airbus.fly(1900)
print(airbus.mileage)
