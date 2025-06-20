#  Sistema Interactivo de Mensajes

Este proyecto es una aplicación **JavaScript** que interactúa con el usuario mediante ventanas emergentes (`prompt`, `alert`) y la consola del navegador. Permite ingresar datos personales, validarlos y mostrar mensajes personalizados según la información ingresada.

---

## Índice

- [Descripción](#-descripción)
- [Ejecución](#-ejecución)
- [Uso](#-uso)
- [Estructura del Objeto](#-estructura-del-objeto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Créditos](#-créditos)

---

## Descripción

El programa solicita los siguientes datos al usuario:

- Nombre  
- Edad  
- Correo electrónico  
- Género (M/F)  
- Día de la semana  

Cada dato es **validado** con reglas simples, y se generan **mensajes personalizados** según la información ingresada y el día.

---

## Ejecución
Hay 2 opciones para ejecutar el programa, por medio de la consola del navegador y por html:

### Opción 1: A través de la consola del navegador

1. Copia el código JavaScript completo.  
2. Abre tu navegador web (Chrome, Firefox, etc.).  
3. Presiona `F12` o haz clic derecho -> **Inspeccionar** -> pestaña **Consola**.  
4. Pega el código y presiona `Enter`.

> ⚠️ Si el navegador muestra un aviso de seguridad, escribe: `permitir pegar`.

---

### Opción 2: Usando un archivo HTML

1. Crea un archivo `.html` y pega este contenido básico:

    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <title>Sistema Interactivo</title>
    </head>
    <body>
    <script>
        // Aquí va todo el código JavaScript
    </script>
    </body>
    </html>

    Guarda el archivo y ábrelo en tu navegador.

## Uso
Al ejecutar el programa, se abrirán ventanas emergentes donde el usuario debe ingresar su información. Al finalizar, se imprimirá el siguiente objeto en la consola:

    console.log(persona);

    ⚠️ Este programa requiere interacción directa del usuario. No es compatible con entornos sin prompt como Node.js puro.


## Estructura del Objeto

    let persona = {
    nombre: "Ejemplo",
    edad: 25,
    email: "ejemplo@email.com",
    genero: "F",
    dia: "viernes"
    }


## Tecnologías Utilizadas

    Lenguaje: JavaScript
    Funciones:
    prompt()
    alert()
    console.log()
    Métodos y expresiones:
    .includes()
    .toLowerCase()
    .toUpperCase()
    isNaN()
    Expresiones regulares (/\d/)


## Créditos
Proyecto creado por Maria V. Viloria, como práctica de programación y validación de datos en JavaScript.

