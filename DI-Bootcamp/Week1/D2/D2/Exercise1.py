# Crear un conjunto con tus numeros favoritos
my_fav_numbers = (4, 11, 26, 69)

# Agregar dos numeros nuevos al conjunto
my_fav_numbers.add (17)
my_fav_numbers.add (19)

# Eliminar el ultimo numero
# Supongamos que queremos eliminar el numero 19 , que fue el ultimo agregado
my_fav_numbers.remove(19)

# Crear un conjunto con los numeros favoritos de tus amigos
friend_fav_numbers = {6, 9, 14, 23}

# Concatenar los dos conjuntos en una nueva variable
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Imprimir los conjuntos para verificar
print("Mis numeros favoritos:", my_fav_numbers)
print("Numeros favoritos de mis amigos:", friend_fav_numbers)
print("Nuestros numeros favoritos:", our_fav_numbers)

















