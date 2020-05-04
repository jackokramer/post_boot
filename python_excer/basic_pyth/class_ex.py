import random

class Weapon:
    def __init__(self, name, hit_power, durability, weight):
        self.name = name
        self.hit_power = hit_power
        self.durability = durability # 0 and 100
        self.weight = weight

    def dur_loss(self):
        self.durability -= 10

    def damage(self):
        hit = (random.random()*self.hit_power)//1
        return hit

class player:
    def __init__(self, name, gender, power, weapon): ## any time you pass a parameter besides gender you have define it seperately 
    ## setting up a default argument
        self.name = name
        self.level = 1
        self.gender = gender
        self.power = power
        self.hp = 50
        self.weapon = weapon ## instance of the weapon class
    def attack(self, other_player): ## functions in a class are called methods
        if self.weapon.durability >0:
            other_player.hp -= self.weapon.damage()
            self.weapon.dur_loss()
            print(f"{self.name} attacked {other_player.name}")
        else:
            print(f"{self.name} cannot attack with broken {self.weapon.name}")
        return self

    def status(self):
        print(f'Name: {self.name}, HP:{self.hp}')
        if self.hp <= 0:
            print(f"{self.name} has fallen")
        return self

sword = Weapon('sowrd', 10, 100, 8)
battle_axe =  Weapon('battle axe', 20, 200, 27)
gatalin = Weapon('gatalin', 14, 300, 9)
clam = Weapon('clam', 12, 400, 22)
print(sword.damage)


andy = player('Andy','male', 'sneaky', sword)
#print(andy.name)
#print(andy.gender)
#print(andy.level)

jeff = player('Jeff', 'male', 'speed', gatalin)
#print(jeff.name)
#print(jeff.power)
#print(jeff.gender)

karen = player('Karen','female', 'singer', clam)
#print(karen.name)
#print(karen.power)
#print(karen.gender)

Zoe = player('Zoe','female', 'bassist', battle_axe)
#print(karen.name)
#print(karen.power)
#print(karen.gender)

print(karen.weapon.name)
print(Zoe.weapon.durability)
print(jeff.weapon.hit_power)
print(andy.weapon.damage())


#karen.status()
#jeff.status()

karen.attack(jeff).attack(jeff).attack(jeff).attack(jeff)
jeff.status()