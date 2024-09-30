import string
import random

def generate_random_strin(length=5):
    # Combine uppercase and lowercase letters
    letters = string.ascii_letters # This includes both uppercase and lowercase letter
    # Generate a random string of the specified lenght
    random_string = ''.join(random.choice(letters) for i in range(lenght))

# Example usage
print(generate_random_strin())