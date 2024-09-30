

# Pedir al usuario que ingrese sus frutas favoritas separadas por espacios
frutas_favoritas = input("Ingresa tus frutas favoritas separadas por espacios por ejemplo, manzana, mango cereza: ")
                                                   
# Convertir la cadena de frutas favoritas en una lista
lista_frutas_favoritas = frutas_favoritas.split()

# Pedir al usuario que ingrese el nombre de cualquier fruta
fruta_usuario = input("Ingrese el nombre de una fruta: ")

# Verificar si la fruta ingresada esta en la lista de frutas favoritas 
if fruta_usuario in lista_frutas_favoritas:
    print("ELegiste una de tus frutas favoritas. Disfrutala!")
else:
    print("Elegiste una nueva fruta. Espero que la disfrutes.")




