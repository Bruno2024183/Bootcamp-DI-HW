# Lista de pedidos de sandwiches
sandwich_orders = [
    "Sandwich de atun", "Sandwich de pastrami", "Sandwich de aguacate",
    "Sandwich de pastrami", "Sandwich de huevo", "Sandwich de pollo",
    "Sandwich de pastrami"
]

# La tienda se ha quedado sin patrami
print("La tienda se ha quedado sin pastrami.\n")

# Eliminar todas las apariciones de "Sandwich de pastrami"
while "Sandwich de pastrami" in sandwich_orders:
    sandwich_orders.remove("Sandwich de pastrami")

# Lista para los sandwiches terminados
finished_sandwiches = []

# Preparar los sandwiches
while sandwich_orders:
    sandwich = sandwich_orders.pop()
    print(f"Hice tu {sandwich}")
    finished_sandwiches.append(sandwich)

# Imprimir los sandwiches preparados
print("\nTodos los sandwiches que se han preparados:")
for sandwich in finished_sandwiches:
    print(f"Hice tu {sandwich}")