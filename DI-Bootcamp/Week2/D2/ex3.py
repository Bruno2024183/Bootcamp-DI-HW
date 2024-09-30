from your_previous_file_name import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = ', '.join([dog.name for dog in args])
        print(f"{self.name}, {dog_names} all play together")
    
    def do_a_trick(self):
        it self.trained:
            tricks = [
             f"{self.name} does a barrel roll",
             f"{self.name} stands on his back legs",
             f"{self.name} shakes your hand",
             f"{self.name} plays dead"      
            ]
            print(randow.choice(tricks))
        else:
            print(f"{self.name} is not trained yet, so no tricks!")
        
import random

dog1 = Petdog(name="Rex", age=5, weight=30)
dog2 = Petdog(name="Buddy", age=3, weight=20)
dog3 = Petdog(name="Max", age=4, weight=25)

dog1.train()

dog1.play(dog2, dog3)

dog1.do_a_trick()
dog2.do_a_trick()

