# Imprimir todos los numeros del 1 al 20, ambos inclusive:
# Usar un bucle for para imprimir todos los numeros del 1 al 20
for numero in range (1, 21):
     print(numero)

# Imprimir todos los elementos con indice par del 1 al 20:
# Crear una lista de numeros del 1 al 20
numeros = list(range(1, 21))

# Usar un bucle for para imprimir los elementos con indice par
for indice in range(len(numeros)):
     if indice % 2 ==0:
          print(numeros[indice])
