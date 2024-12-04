//PARTE 1

// JSON con listado de doctores
const doctores = [
    {
        nombre: "Dra. Ana López",
        especialidad: "Cardiología",
        experiencia: 10,
        disponibilidad: true,
        horarios: { lunes: "9:00-13:00", miércoles: "14:00-18:00" },
        contacto: { email: "ana.lopez@hospital.com", teléfono: "123-456-7890" }
    },
    {
        nombre: "Dr. José Martínez",
        especialidad: "Neurología",
        experiencia: 8,
        disponibilidad: false,
        horarios: { martes: "10:00-14:00", jueves: "15:00-19:00" },
        contacto: { email: "jose.martinez@hospital.com", teléfono: "098-765-4321" }
    }
];

// Acceso con destructuring
const [doctor1, doctor2] = doctores;
console.log(doctor1.nombre, doctor1.especialidad); // Muestra el nombre y la especialidad del primer doctor

// Mostrar información en la interfaz
document.getElementById('doctor-info').innerHTML = `
    <h3>Información del Doctor</h3>
    <p>Nombre: ${doctor1.nombre}</p>
    <p>Especialidad: ${doctor1.especialidad}</p>
    <p>Email: ${doctor1.contacto.email}</p>
`;


//PARTE 2

//Clonacion
const doctorClon = { ...doctor1 }; // Clonar objeto
doctorClon.nombre = "Dra. Ana Pérez"; // Modificar sin afectar el original
console.log(doctor1.nombre); // "Dra. Ana López"
console.log(doctorClon.nombre); // "Dra. Ana Pérez"

//Merge
const servicios = {
    servicios: ["Consulta general", "Ecocardiograma", "Electrocardiograma"]
};
const informacionDoctor = { ...doctor1, ...servicios };
console.log(informacionDoctor);

//Recorrido y Stringify
doctores.forEach((doc) => {
    console.log(`Doctor: ${doc.nombre}, Especialidad: ${doc.especialidad}`);
});
console.log(JSON.stringify(doctores));



//PARTE 3

// Arreglos
doctores.push({ nombre: "Dra. María Torres", especialidad: "Pediatría", experiencia: 5, disponibilidad: true });
const eliminado = doctores.pop(); // Eliminar último elemento
console.log(eliminado);

//Pilas
const citas = [];
citas.push("Cita con Dra. Ana López");
citas.push("Cita con Dr. José Martínez");
console.log(citas.pop()); // Última cita programada

//Colas
const pacientes = [];
pacientes.push("Paciente 1");
pacientes.push("Paciente 2");
console.log(pacientes.shift()); // Atiende al primer paciente

//PARTE 4

//Búsqueda
const buscarDoctor = (nombre) => doctores.find((doc) => doc.nombre === nombre);
console.log(buscarDoctor("Dra. Ana López"));

//Ordenamiento
const ordenado = doctores.sort((a, b) => b.experiencia - a.experiencia);
console.log(ordenado);

