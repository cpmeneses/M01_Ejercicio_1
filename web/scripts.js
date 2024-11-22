console.log("El script JavaScript ha sido cargado correctamente.");


// Solicitar datos al usuario
const nombre = prompt("Por favor, ingresa tu nombre:");
const email = prompt("Ingresa tu correo electrónico:");
const telefono = prompt("Ingresa tu número de teléfono:");

try {
    if (isNaN(telefono)) throw new Error("El número ingresado no es válido.");
    console.log(`Número de teléfono válido: ${telefono}`);
} catch (error) {
    alert(`Error: ${error.message}`);
    console.error(error);
}

// Validación básica de datos
if (!email.includes("@")) {
    alert("El correo electrónico no es válido.");
    console.log("Error: El correo electrónico ingresado no es válido.");
} else {
    // Mostrar datos en consola y alerta
    console.log(`Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`);
    alert(`Gracias por registrarte, ${nombre}. Tus datos se han guardado.`);
}


// Lista de servicios médicos
const servicios = [
    { nombre: "Pediatría", disponible: true },
    { nombre: "Cardiología", disponible: false },
    { nombre: "Dermatología", disponible: true },
  ];
  
  // Crear lista dinámica en el DOM
  const listaServicios = document.getElementById("servicios");
  servicios.forEach((servicio) => {
    if (servicio.disponible) {
      const li = document.createElement("li");
      li.textContent = servicio.nombre;
      listaServicios.appendChild(li);
    }
  });
  
debugger;
console.log("Depurando el programa...");