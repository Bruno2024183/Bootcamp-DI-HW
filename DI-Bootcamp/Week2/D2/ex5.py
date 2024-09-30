class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations to the {self.last_name} family on the birth of {kwargs['name']}!")
   
    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False
            
    def family_presentation(self):
        print(f"The {self.last_name} family:")
        for member in self.members:
            print(f"Name: {member['name'], Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")


class Incredibles(Family):
    def incredible_presentation(self):
        print(f"The {self.last_name} family of superheroes:")
        for member in self.members:
            print(f"Name: {member['name'], Age:{member['age']}, Gender: {member['gender']}}"
                f"Is Child:{member['is_child']}, Power: {member['power']},"
                f"Incredible Name: {member['incredible_name']}")
            
    incredibles_members = [        
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'Mikefly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ]


    incredibles_family = Incredibles(last_name= 'Incredibles', members=incredibles_members)

    incredibles_family.incredible_presentation()

    incredibles_family.born(name= 'Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')

    incredibles_family.incredible_presentation()