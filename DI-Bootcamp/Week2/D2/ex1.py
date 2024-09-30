class Pets():
    def __init__(self, animals):
        self.animals = animals
    
    def walk(def):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

  
bengal_cat = Bengal(name="Tiger", age=3)
chartreux_cat = chartreux(name="Blue", age=2)
siamese_cat = Siamese(name="Sassy", age=4)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all)

sara_pets.walk()

