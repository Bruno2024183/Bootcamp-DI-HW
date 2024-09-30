

familia = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

#Funcion para calcular el costo de la entrada segun la edad
def calcular_costo_entrada(edad):
    if edad < 3:
        return 0
    elif 3 <= edad <= 12:
        return 10
    else:
        return 15
    
    # Calcular el costo para cada miembro de la familia
    costo_total = 0
    for nombre, edad in familia.items():
        costo = calcular_costo_entrada(edad)
        costo_total += costo 
        print(f"{nombre.capitalize()} tiene que pagar: ${costo}")
    
    # Imprimir el costo total
    print(f"\nE1 costo total de las entradas para la familia es: ${costo_total}")

    
    # Funcion para calcular el costo de la entrada segun la edad
    def calcular_costo_entrada(edad):
        if edad < 3:
            return 0
        elif 3 <= edad <= 12:
            return 10
        else:
            return 15
        
    # Inicializar el diccionaro de la familia vacio
    familia = {}

    # Pedir al usuario que ingrese los nombres y las edades
    while True:
        nombre = input("Ingrese el nombre del miembro de la familia (o 'salir' para terminar):")
        if nombre.lower() == 'salir':
            break

        try:
            edad = inst(input(f"Ingrese la edad de {nombre}:"))
            familia[nombre] = edad
        except ValueError:
            print("Por favor, ingrese una edad valida.")
        
# Calcular el costo para cada miembro de la familia 
costo_total = 0
for nombre, edad in familia.items():
    costo = calcular_costo_entrada(edad)
    costo_total +=costo
    print(f"{nombre.capitalize()} tiene que pagar: ${costo} ")

# Imprimir el costo total
print(f"\nE1 costo total de las entradas para la familia es: ${costo_total}")

