class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age


cat1 = Cat("Whiskers", 3)
cat2 = Cat("Mittens", 5)
cat3 = Cat("Shadow", 7)


def find_oldest_cat(cat1, cat2, cat3):
    oldest_cat = cat1
    if cat2.age > oldest_cat.age:
        oldest_cat = cat2
    if cat3.age > oldest_cat.age:
        oldest_cat = cat3
    return oldest_cat


oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")