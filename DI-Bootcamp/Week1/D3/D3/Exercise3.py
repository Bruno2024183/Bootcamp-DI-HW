brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    
    }
}

# Step 3
brand["number_stores"] = 2


# Step 4
print(f"Zara's clientes are men, women, children, and home shoppers")


# Step 5
brand["country_creation"] = "Spain"


# Step 6
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")


# Step 7
del brand["creation_date"]


# Step 8
print(brand["international_competitors"][-1])


# Step 9
print(brand["major_color"]["US"])

# Step 10
print(len(brand))


# Step 11
print(brand.keys())


# Step 12
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}


# Step 13
brand.update(more_on_zara)


# Step 14
print(brand["number_stores"])


brand = {}