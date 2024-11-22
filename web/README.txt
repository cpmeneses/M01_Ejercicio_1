MODULO 3 - TALLER 2

- Explica en el archivo README cómo funciona el event loop (stack, heap, queue) en JavaScript.

El Event Loop (stack, heap, queue)
El event loop es el corazón del modelo asincrónico de JavaScript. Es responsable de manejar la ejecución de código, la recolección de eventos y la delegación de tareas asincrónicas (como temporizadores y peticiones HTTP).

Stack (Pila): Maneja las operaciones sincrónicas.
Heap: Almacena objetos y referencias en memoria.
Queue (Cola): Cola de tareas pendientes de ejecución, como callbacks.

El Event Loop llama al Call Stack, el Call Stack llama al Heap y al Task Queue, y el Task Queue llama al Event Loop.


- Utiliza el debugger para rastrear posibles errores dentro del código y explica su uso en el README

El debugger permite revisar la ejecución del código de la página web línea por línea y llamada por llamada, para revisar donde hay errores.

- Instrucciones sobre cómo usar el debugger y el manejo de errores con try/catch.

El debugger se activa cuando la ejecución del código llega a la línea donde se lo llama. Al llamarse pausa la ejecución de la página web. En esta pausa se puede seguir avanzando en el código línea por línea, o se puede entrar dentro de las funciones que se llaman para revisar las líneas que tienen dentro.
Cuando se usa try/catch, primero el programa intenta ejecutar el código dentro del try, y si no funciona, se ejecuta el código en el catch usando el error como variable.