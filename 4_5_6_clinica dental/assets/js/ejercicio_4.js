//TRAUMATOLOGÍA//
let traumatologia = [

    //ARRAY 1: pacientes traumatología

    //objeto [0]
    {
        hora: '08:00', 
        especialista: 'MARIA PAZ ALTUZARRA', 
        paciente: 'PAULA SANCHEZ', 
        rut: '15554774-5', 
        prevision: 'FONASA'
    },

    //objeto [1]
    {
        hora: '10:00', 
        especialista: 'RAUL ARAYA', 
        paciente: 'ANGÉLICA NAVAS', 
        rut: '15444147-9', 
        prevision: 'ISAPRE'
    },

    //objeto [2]
    {
        hora: '10:30', 
        especialista: 'MARIA ARRIAGADA', 
        paciente: 'ANA KLAPP', 
        rut: '17879423-9', 
        prevision: 'ISAPRE'
    },

    //objeto [3]
    {
        hora: '11:00', 
        especialista: 'ALEJANDRO BADILLA', 
        paciente: 'FELIPE MARDONES', 
        rut: '1547423-6', 
        prevision: 'ISAPRE'
    },

    //objeto [4]
    {
        hora: '11:30', 
        especialista: 'CECILIA BUDNIK', 
        paciente: 'DIEGO MARRE', 
        rut: '16554741-K', 
        prevision: 'FONASA'
    },

    //objeto [5]
    {
        hora: '12:00', 
        especialista: 'ARTURO CAVAGNARO', 
        paciente: 'CECILIA MENDEZ', 
        rut: '9747535-8', 
        prevision: 'ISAPRE'
    },

    //objeto [6]
    {
        hora: '12:30', 
        especialista: 'ANDRES KANACRI', 
        paciente: 'MARCIAL SUAZO', 
        rut: '11254785-5', 
        prevision: 'ISAPRE'
    }
];


/************DESAFÍO EVALUADO - PARTE 1 */

let horasExtrasTraumatologia = [
    //objeto [7]
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'},
    //objeto [8]
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'ISAPRE'},
    //objeto [9]
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'FONASA'},
    //objeto [10]
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '10112348-3', prevision: 'ISAPRE'},
    //objeto [11]
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'ISAPRE'}
];


/************************************************************************* */
//ejercicio 1 unir traumatología a un segundo grupo de pacientes

// metodo Concat para unir dos array
traumatologia = traumatologia.concat(horasExtrasTraumatologia);
console.log(traumatologia);


// metodo sort para ordenar por hora
//función con (localeCompare) para determinar su orden
let ordenCitas = traumatologia.sort((a,b) => {
    //compara y devuelve el n° relativo
    return a.hora.localeCompare(b.hora)
})

/************************************************************************* */

//RADIOLOGÍA//
let radiologia = [

    //objeto 11:00 [0]
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS', 
        rut: '9878782-1', 
        prevision: 'FONASA'
    },

    //objeto 11:30 [1]
    {
        hora: '11:30', 
        especialista: 'FEDERICO SUBERCASEAUX', 
        paciente: 'PAMELA ESTRADA', 
        rut: '15345241-3', 
        prevision: 'ISAPRE'
    },

    //objeto 15:00 [2]
    {
        hora: '15:00', 
        especialista: 'FERNANDO WURTHZ', 
        paciente: 'ARMANDO LUNA', 
        rut: '16445345-9', 
        prevision: 'ISAPRE'
    },

    //objeto 15:30 [3]
    {
        hora: '15:30', 
        especialista: 'ANA MARIA GODOY', 
        paciente: 'MANUEL GODOY', 
        rut: '17666419-0', 
        prevision: 'FONASA'
    },

    //objeto 16:00 [4]
    {
        hora: '16:00', 
        especialista: 'PATRICIA SUAZO', 
        paciente: 'RAMON ULLOA', 
        rut: '14989389-K', 
        prevision: 'FONASA'}
        
];


/****************************************************************** */

//DENTAL//
let dental = [

    //ARRAY 1: pacientes dental

    //objeto [0]
    {
        hora: '08:30', 
        especialista: 'ANDREA ZUÑIGA', 
        paciente: 'MARCELA RETAMAL', 
        rut: '11123425-6', 
        prevision: 'ISAPRE'},

    //objeto [1]
    {
        hora: '11:00', 
        especialista: 'MARIA PIA ZAÑARTU', 
        paciente: 'ANGEL MUÑOZ', 
        rut: '9878789-2', 
        prevision: 'ISAPRE'},

    //objeto [2]
    {
        hora: '11:30', 
        especialista: 'SCARLETT WITTING', 
        paciente: 'MARIO KAST', 
        rut: '7998789-5', 
        prevision: 'FONASA'
    },

    //objeto [3]
    {
        hora: '13:00', 
        especialista: 'FRANCISCO VON TEUBER', 
        paciente: 'KARIN FERNANDEZ', 
        rut: '18887662-K', 
        prevision: 'FONASA'
    },

    //objeto [4]
    {
        hora: '13:30', 
        especialista: 'EDUARDO VIÑUELA', 
        paciente: 'HUGO SANCHEZ', 
        rut: '17665461-4', 
        prevision: 'FONASA'
    },

    //objeto [5]
    {
        hora: '14:00', 
        especialista: 'RAQUEL VILLASECA', 
        paciente: 'ANA SEPULVEDA', 
        rut: '14441281-0', 
        prevision: 'ISAPRE'
    }
];

/************************************************************************* */

//ejercicio 4 imprimir todos los pacientes (23) incluyendo las hr extras de traumatología

//unir pacientes
let todosLosPacientes = radiologia.concat(traumatologia, dental)

//nombres pacientes
let nombresDePacientes = todosLosPacientes.map(paciente => paciente.paciente)
console.log(nombresDePacientes)

// Actualizar el contenido del elemento con id "pacientes"
let pacientesElement = document.getElementById('pacientes');
nombresDePacientes.forEach((nombre, i) => {
    pacientesElement.innerHTML += `<p>${i+1}. ${nombre}</p>`;
});

