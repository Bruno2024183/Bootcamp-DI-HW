from faker import faker

# Initialize the Faker generator
fake = Faker()

# Create an empty list to store user dictionaries
users = []

def add_fake_user(users_list):
    # Create a dictionary for a new user with fake data
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    # Add the dictionary to the users list
    users_list.append(user)

 # Example usage: Add 5 fake users
 for _ in range(5):
    add_fake_user(users)

 # Print the users list to see the fake users
 for user in users:
    print(user)

    

    
