# Lista para almacenar los ingredientes
ingredientes = []

# Bucle para pedir ingredientes al usuario
while True:
    ingrediente = input("Ingrese un ingrediente para la pizza (o 'salir' para terminar): ")

    if ingrediente.lower() == 'salir':
        break
    
    ingredientes.append(ingrediente)
    print(f"Agregando {ingrediente} a su pizza")

# Calcular el precio total
precio_base = 10
precio_por_ingrediente = 2.5
precio_total = precio_base + (precio_por_ingrediente * len(ingredientes))

# Imprimir los ingredientes y el precio total
print("\nIngredientes de la pizza:")
for ing in ingredientes:
    print(f"{ing}")

print(f"\nPrecio total de la pizza: ${precio_total:.2f}")