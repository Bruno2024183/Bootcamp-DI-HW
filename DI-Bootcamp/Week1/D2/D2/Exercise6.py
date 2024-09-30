# Definir tu nombre
mi_nombre = "Bruno"

# Inicializar una variable para la entrada del usuario
nombre_usuario = ""

# Usar un bucle para seguir pidiendo el nombre hasta que coincida con tu nombre
while nombre_usuario.lower() != mi_nombre.lower():
     nombre_usuario = input("Cual es tu nombre?")

# Imprimir un mensaje de saludo cuando coincida
print(f"Hola, {mi_nombre} Has ingresado el nombre correcto!")