# Ejercicio 1: Juego de Adivinar un Número

Enunciado: Crea una aplicación web donde el usuario debe adivinar un número generado aleatoriamente entre 1 y 100. La aplicación debe informar al usuario si su intento es demasiado alto, demasiado bajo o correcto.
Requerimientos:

1. Mostrar un input para que el usuario introduzca su intento.
2. Añadir un botón para enviar el intento.
3. Mostrar mensajes que indiquen si el intento es correcto, demasiado alto o demasiado bajo.
4. Permitir al usuario jugar de nuevo una vez que adivine el número.
Pistas / pasos a seguir para implementar el ejercicio
Paso 1: Preparar el Entorno HTML
● Crea un archivo HTML con los elementos básicos (input, botón, área de mensajes).
● Piensa en cómo organizar estos elementos para que la interfaz sea intuitiva.
Paso 2: Generar un Número Aleatorio
● Considera cómo puedes hacer que este número sea un entero entre 1 y 100.
Paso 3: Capturar la Entrada del Usuario
● Añade un evento al botón que permita leer el valor ingresado en el input cuando el usuario haga clic.
● Piensa en cómo puedes convertir esta entrada en un número para poder compararlo con el número generado.
Paso 4: Comparar la Entrada con el Número Aleatorio
● Implementa una lógica que compare el número del usuario con el número aleatorio.
● Decide qué hacer si el número es demasiado alto, demasiado bajo, o correcto.
Paso 5: Mostrar Retroalimentación al Usuario
● Usa el área de mensajes para informar al usuario si su intento fue exitoso, o si necesita intentar nuevamente con un número más alto o más bajo.
● Considera cómo actualizar este mensaje cada vez que el usuario haga un nuevo intento.
Paso 6: Permitir Intentos Múltiples
● Asegúrate de que el usuario pueda seguir intentando adivinar sin tener que recargar la página.
● Piensa en cómo puedes resetear el input después de cada intento.
Paso 7: Agregar un Botón de Reinicio
● Proporciona un medio para que el usuario pueda reiniciar el juego con un nuevo número aleatorio después de adivinar correctamente.
● Considera qué elementos del DOM necesitas resetear cuando el juego se reinicia.