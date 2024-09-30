# Funcion para calcular el costo de la entrada segun la edad
def calcular_costo_entrada(edad):
    if edad < 3:
        return 0
    elif 3 <= edad <= 12:
        return 10
    else:
        return 15
    
# Lista para almacenar las edades de la familia
edades_familia = []

# Bucle para pedir las edades de la familia
while True:
    entrada = input("Ingrese la edad de un miembro de la familia (o 'salir' para terminar): ")
    if entrada.lower() == 'salir':
        break
    try:
        edad = int(entrada)
        edades_familia.append(edad)
    except ValueError:
        print("Por favor, ingrese un numero valido.")

# Calcular el costo total de las entradas
costo_total = sum(calcular_costo_entrada(edad) for edad in edades_familia)

# Imprimir el costo total
print(f"El costo total de las entradas para la familia es: ${costo_total:.2f} ")


# Lista inicial de nombres de los adolescentes
adolescentes = ["Juan", "Maria", "Pedro", "Laura", "Ana"]

# Diccionario para almacenar las edades de los adolescentes
edades_adolescentes = {}

# Bucle para pedir la edad de cada adolescente
for nombre in adolescentes:
    while True:
        try:
            edad = int(input(f"Ingrese la edad de{nombre}:"))
            edades_adolescentes[nombre] = edad
            break
        except ValueError:
            print("Por favor, ingrese un numero valido.")

#Filtrar la lista de adolescentes permitidos
adolescentes_permitidos = [nombre for nombre, edad in edades_adolescentes.items() if 16<= edad <=21]

# Imprimir la lista final de adolescentes permitidos
print("Lista final de adolescentes que pueden ver la pelicula:")
for nombre in adolescentes_permitidos:
    print(nombre)