print("Welcome to Python Pizza Deliveries!")
size = input("What size pizza want? S, M, or L: ")
pepperoni = input("Do you want pepperoni on your pizza? Y or N: ")
extra_cheese = input("Do you want extra cheese? Y or N: ")

# todo: work out how much they need to pay based on their size choise.
bill = 0
if size == "S":
    bill += 19
elif size == "M":
    bill += 23
elif size == "L"
    bill += 28
else:
    print("You typed the wrong inputs.")

# todo: work out how much to add to their bill based on their pepperoni choise.
if pepperoni == "Y":
    if size == "S":
        bill += 2

# todo: work out their final amount based on whether if they want extra cheese.
if extra_cheese == "Y":
    bill += 1

print(f"YOur final bill is: ${bill}.")

