import random

def compare_numbers(user_number):
    if not(1 <= user_number <= 100):
        print("El numero debe estar entre 1 y 100.")
        return
    
    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Exito! Los numeros coinciden.")
    else:
        print(f"Fallo. El numero ingresado fue {user_number} y el numero generado fue {random_number}.")
    

# Llamando a la funcion con un ejemplo
compare_numbers(42)