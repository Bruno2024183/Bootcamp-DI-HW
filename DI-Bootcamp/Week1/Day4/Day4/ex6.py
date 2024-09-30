# List of magician's names
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Function to print each magician's name
def show_magicians(magicians):
    for magicians in magicians:
        print(magician)

# Function to add "the Great" to each magician's name
def make_great(magicians):
    for i in range(len(magicians)):
        magicians[i] = magicians[i] + " the Great"

# Call the function to modify the list
make_great(magiciann_names)

# Call the function to print the modified list
show_magicians(magician_names)

