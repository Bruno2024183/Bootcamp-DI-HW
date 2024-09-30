# Con Numpy:
import numpy as np

# Crear una lista de numeros flotantes usando Numpy
secuencia = np. arange(1.6, 5.5, 0.5).tolist()

# Imprimir la lista
print(secuencia)

# Sin Numpy
# Crear una lista de numeros flotantes usando una lista por comprension
secuencia = [x * 0.5 for x in range (3, 11)]

# Imprimir la lista
print(secuencia)