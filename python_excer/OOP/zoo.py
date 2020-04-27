class Dog:
    def __init__(self, name):
        self.name = name

class Dragon:
    def __init__(self, name):
        self.name = name

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    def addDog(self, name):
        self.animals.append(Dog(name))
    def addDragon(self,name):
        self.animals.append(Dragon(name))
    def printAllHealth(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.displayHealth()
zoo1 = Zoo("jack's Zoo")
zoo1 = addDragon('Geoff')
zoo1 = addDog('Mugsy')
zoo1 = addDog("messi")
zoo2 = Zoo('Max`s zoo')
zoo2 = addDog('merible')
zoo2 = addDragon('Albee')