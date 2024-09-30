# Lista inicial
cesta = ["Banana", "Manzanas", "Naranjas", "Arandanos"]

# Eliminar "Banana" de la lista
cesta.remove("Banana")

# Eliminar "Arandanos" de la lista
cesta.remove("Arandanos")

# Agregar "Kiwi" al final de la lista
cesta.append("Kiwi")

# Agregar "Manzanas" al principio de la lista
cesta.insert(0, "Manzanas")

# Contar cuantas manzanas hay en la cesta
cantidad_manzanas = cesta.count("Manzanas")

# Vaciar la cesta
cesta.clear()

# Imprimir la lista y la cantidad de manzanas
print("Cesta vacia:", cesta)
print("Cantidad de manzanas:", cantidad_manzanas)
