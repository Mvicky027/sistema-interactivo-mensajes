console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");

//Declaración de variables
let persona = {
    nombre: "",
    edad: "",
    email: "",
    genero: "",
    dia: ""
}
//Validación de nombre
 function validarNombre(){
    nombre = prompt("Por favor, ingresa tu nombre: ");
    persona.nombre = nombre;
    if (!nombre || /\d/.test(nombre)) {
        console.error("❌ Nombre invalido. No puede estar vacío ni contener números.");
    } else {
        
        alert(`¡Hola, ${persona.nombre} 😊`);
    }
}

//Conversión y validación de edad
function validarEdad(){
    edad = (prompt("Por favor, ingresa tu edad: "));
    edad_1 = parseInt(edad)
    persona.edad = edad_1; 
    if (isNaN(edad) || edad.trim() === ""){
        console.error("❌ Error: Por favor, ingresa una edad válida en números.");
    } else if (edad_1<18){
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!🤯😎`);
    }else {
        alert(`Hola ${nombre}, eres mayor de edad, ¡Prepárate para grandes oportunidades en el mundo de la programación!🦾`);
    }
}

// Validación de email
function validarEmail(){
    email = prompt("Ingresa tu email: ");
    persona.email = email
    if (!email || !email.includes("@") || !email.includes(".")) {
        console.error("❌ Email no válido. Asegurate de que este escrito correctamente por favor.");
    } else {
        alert(`✅ Genial ${nombre}, el email ingresado se registró correctamente: ${email} `);
    }
}

// Validación de genero
function validarGenero(){
    genero = prompt("Ingresa tu género (M/F): ").toUpperCase();
    persona.genero = genero
    if (genero ==="M") {
        alert("Seleccionaste Masculino.🧑‍🦰");
    } else if (genero === "F") {
        alert("Seleccionaste Femenino.👩‍🦰");
    }else {
        alert("❌ Opción inválida.");
    }
}

// Validación del día de la semana
function validarDia(){
    dia = prompt("¿Qué día de la semana es hoy?").toLowerCase();
    persona.dia = dia
    switch(dia) {
    case "lunes":
        alert("¡Ánimo! Es inicio de semana. 💪");
        break;
    case "viernes":
        alert("¡Ya casi es fin de semana!🎉");
        break;
    case "domingo":
        alert ("Domingo de descanso.😴");
        break;
    case (dia != "lunes" || dia != "viernes" || dia != "domingo"):
        alert (`Hoy es ${dia}, ¡a dar lo mejor🚀`);
    default:
        alert ("Ingresa un día válido.😒")
    }
}

 

function ejecutarPrograma(){
    validarNombre()
    validarEdad()
    validarEmail()
    validarGenero()
    validarDia()
    console.log(persona)
    alert(`¡Gracias por utilizar el programa ${nombre} 😊`)
}

ejecutarPrograma()
