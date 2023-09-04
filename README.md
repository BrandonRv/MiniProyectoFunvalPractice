
Bienvenido al MiniProyecto del nivel 1. En este proyecto estaremos aplicando los conocimientos adquiridos durante esta primera y segunda semana. Sigue las instrucciones de este archivo para completar el proyecto y ten en cuenta que estas mismas instrucciones se tomarán en cuenta para la evaluación del proyecto.

# Instrucciones

En este repositorio encontrarás Los archivos necesarios para construir una aplicación para calcular las propinas de un mozo/mesero. Sin embargo el proyecto que haz recibido aún no es funcional, tu tarea será completar el proyecto para que funcione correctamente.

Para saber como se calcula el "Tip Amount / person"(propina a pagar por persona) o el "Total / person" (total por persona) puedes basarte en las imagenes que se encuentran en la carpeta "design" y asi obtener una fórmula.

## Requerimientos

Para completar este proyecto necesitarás:
- Descargar los archivos de deste repositorio, para esto puedes ir al boton superior que dice "code" y seleccionar la opcion "Download ZIP".
- Lee detalladamente los archivos JavaScript que existen dentro de este programa, para esto puedes abrirlos con un editor de texto como Visual Studio Code.
- Completa el código faltante en los archivos JavaScript para que el programa funcione correctamente.

## Criterios de Evaluación al 70%

- La función `runProgram()` debe ser llamada al final del archivo `main.js` para que el programa funcione correctamente. Tiene el objetivo de ejecutar las acciones cada vez que se va modificando los datos.
- la función `reset()` debe ser llamada al final del archivo `main.js` para que el programa funcione correctamente. Tiene el objetivo de reiniciar los valores de las entradas del usuario.
- la función `calcularTip()` tiene como objetivo calcular el monto de propina a pagar por cada persona.
- la función `calcularTotal()` tiene como objetivo calcular el monto total a pagar por cada persona incluyendola propina.


- El campo "tip amount" indica el monto de propina que equivale para una persona.
- El campo "Total" indica el monto total a pagar por una persona incluyendo la propina.

## Milla Extra para el 100%

Quizás seas entusiasta y logres los requisitos anteriores antes del plazo indicado, por lo que te dejo algunas funcionalidades extras que puedes agregarle a tu proyecto:

- Cuando se selecciona algun monto de tip fijado, el campo de "Custom" debe reiniciarse a 0.
- Cuando se elecciona algun monto de tip fijado, este se resalta en color verde claro.
- Cuando se ingresa un numero de personas 0 o negativo, el borde del campo se resalta en color rojo y aparece un texto en la parte superior indicanto "Can't be zero".
- El boton de "reset" debe estar deshabilitado mientras no se haya ingresado ningun valor, te puedes basar en el "Tip Amount" o "Total".