def make_shirt(size="large", message="I love python"):
    print(f"The size of the shirt is {size} and the text is'{message}'")

# Calling the function to make a large shirt with the default message
make_shirt()

# Calling the function to make a medium shirt with the default message
make_shirt(size="medium")

# Calling the function to make a shirt of any size with a differente message
make_shirt(size="small", message="Code is life")

# Bonus: Calling the function using keyword arguments
make_shirt(message="Keep Calm and Code On", size="extra large")

