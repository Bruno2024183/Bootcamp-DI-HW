users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# 1. Using a for loop to recreate disney_users_A
disney_users_A = {}
for index, user in enumerate (users):
    disney_users_A[user] = index

print(disney_users_A)
# Output: {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# 2. Using a loop to recreate disney_users_B
disney_users_B = {}
for index, user in enumerate(users):
    disney_users_B[index] = user

print(disney_users_B)
# Output: {0: "Mickey", 1: "Minnie", 2: "Donald", 3: "Ariel, 4: "Pluto"}

# 3. Using a method to recreate disney_users_c (sorted alphabetically)
sorted_users = sorted(users)
disney_users_C = {}
for index, user in enumerate(sorted_users):
    disney_users_C[user] = index

print(disney_users_C)
# Output: {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}

# Additional Tasks:
# 1. Recreate disney_users_A for characters with names containing the letter "i"
disney_users_A_i = {}
for index, user in enumerate(users):
    if "i" in user:
        disney_users_A_i[user] = index
    
print(disney_users_A_i)
# Output: {"Mickey": 0, "Minnie": 1, "Pluto": 4}

# 2. Recreate disney_users_A for characters with names starting with "m" or "p"
disney_users_A_mp = {}
for index, user in enumerate(users):
    if user[0].lower() in ['m', 'p']:
        disney_users_A_mp[user] = index

print(disney_users_A_mp)
# Output: {"Mickey": 0, "Minnie": 1, "Pluto", 4}