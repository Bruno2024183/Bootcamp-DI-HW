def __init__(self, name, age, weight):
    self.name = name
    self.age = age
    self.weight = weight

def bark(self):
    return f"{self.name} is barking"

def run_speed(self):
    return self.weight / self.age * 10

def fight(self, other_dog):

    my_power = self.run_speed() * other_dog.weight

    if my_power > other_power:
        return f"{self.name} wins the fight against {other_dog.name}"
    elif my_power < other_power:
        return f"{other_dog.name} wins the fight against {self.name}"
    else:
        return "It's a tie!"
    
    dog1 = Dog(name="Rex", age=5, weight=30)
    dog2 = Dog(name="Buddy", age=3, weight=20)
    dog3 - Dog(name="Max", age=4, weight=25)

print(f"{dog1.name}'s running speed: {dog1.run_speed()}")
print(f"{dog2.name}'s running speed: {dog2.run_speed()}")
print(f"{dog3.name}'s running speed: {dog3.run_speed()}")

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))
