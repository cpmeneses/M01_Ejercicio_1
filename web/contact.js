//PARTE 1. Programación Funcional en JavaScript

//Currying para calcular el costo total:

const calcularCosto = (precioPorConsulta) => (numConsultas) => precioPorConsulta * numConsultas;
// Ejemplo de uso:
const costoConsulta = calcularCosto(50); // Precio por consulta: $50
console.log(costoConsulta(10)); // 10 consultas = $500

//Función flecha para calcular el tiempo promedio:

const calcularPromedioEspera = (tiempos) => tiempos.reduce((a, b) => a + b, 0) / tiempos.length;
// Ejemplo de uso:
console.log(calcularPromedioEspera([30, 45, 25, 60])); // Tiempo promedio: 40 minutos

//Recursión para total de horas de consulta:

const totalHorasConsulta = (horas, index = 0) => 
    index >= horas.length ? 0 : horas[index] + totalHorasConsulta(horas, index + 1);
// Ejemplo de uso:
console.log(totalHorasConsulta([8, 6, 5, 7, 9])); // Total: 35 horas

//Composición de funciones para aplicar descuentos:

const aplicarDescuento = (costo, descuento) => costo - (costo * descuento);
const calcularCostoFinal = (precio, consultas, descuento) => 
    aplicarDescuento(calcularCosto(precio)(consultas), descuento);
// Ejemplo de uso:
console.log(calcularCostoFinal(50, 10, 0.1)); // 10% de descuento

//PARTE 2. Programación Orientada a Eventos y Programación Asíncrona

// Capturar el envío del formulario
document.querySelector('#form-contacto').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Formulario enviado con éxito!');
});

// Evento personalizado
const nuevoPaciente = new Event('nuevoPaciente');
document.addEventListener('nuevoPaciente', () => {
    alert('¡Ha llegado un nuevo paciente!');
});
document.dispatchEvent(nuevoPaciente);

//Simular llamada a API REST con async/await:
const obtenerDoctores = async () => {
    try {
        const respuesta = await fetch('https://api.example.com/doctores');
        if (!respuesta.ok) throw new Error('Error en la API');
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Error:', error.message);
        manejarError(error);
    }
};

const manejarError = (error) => {
    console.log('Callback ejecutado: ', error.message);
};

// Llamada a la función
obtenerDoctores();

//PARTE 3. Programación Orientada a Objetos

class Doctor {
    constructor(nombre, especialidad, aniosExperiencia) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this._aniosExperiencia = aniosExperiencia;
    }

    get aniosExperiencia() {
        return this._aniosExperiencia;
    }

    set aniosExperiencia(value) {
        if (value < 0) throw new Error('Los años de experiencia no pueden ser negativos.');
        this._aniosExperiencia = value;
    }

    mostrarInformacion() {
        return `Dr. ${this.nombre}, Especialidad: ${this.especialidad}, Experiencia: ${this.aniosExperiencia} años`;
    }

    calcularPacientesAtendidos(consultasPorDia, dias) {
        return consultasPorDia * dias;
    }
}

// Subclase Cirujano
class Cirujano extends Doctor {
    calcularPacientesAtendidos(operacionesPorDia, dias) {
        return operacionesPorDia * dias;
    }
}

// Ejemplo de uso
const doctor1 = new Doctor('María', 'Pediatría', 10);
console.log(doctor1.mostrarInformacion());

const cirujano1 = new Cirujano('Carlos', 'Cirugía General', 15);
console.log(cirujano1.calcularPacientesAtendidos(3, 5));