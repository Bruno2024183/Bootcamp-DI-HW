class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("The animals in the zoo are:")
        for animal in self.animals:
            print(animals)

    def get_animals(self):
        print("The animals int he zoo are:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        group_number = 1

        for animal in sorted_animals:
            first_letter = animal[0]
            if group_number not in grouped_animals:
                grouped_animals[group_number] = [animal]
            else:
                if grouped_animals[group_number][0][0] == first_leter:
                    grouped_animals[group_number].append(animal)
                else:
                    group_number += 1
                    grouped_animals[group_number] = [animal]

        return grouped_animals

    def get_groups(self):
        groups = self.sort_animals()
        for group_number, group in groups.items():
            print(f"Group {group_number}: {group}")

# Creating the Zoo object
ramat_gan_safari = Zoo("Ramat Gan Safari")

# Adding animals
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Elephant")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.add_animal("Eel")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Elephant")

ramat_gan_safari.get_animals()

ramat_gan_safari.get_groups()

