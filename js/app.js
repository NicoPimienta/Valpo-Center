// ====== Entrega de Proyecto final 1° =========




// Constructor & Arrays


class PesoRef {
    constructor (condicion,actividadRecom,intensidad) {
            this.condicion = condicion
            this.actividadRecom = actividadRecom
            this.intensidad = intensidad
}
    // Metodo
    preguntarNombre() {
        let nombre = prompt('Ingrese su nombre')
        return nombre
    }

    }

// Los valores de intensidad son aproximados y varian dependiendo la persona (Pienso aclararlo en algun lugar de la aplicación)

const pesoActi = [
new PesoRef ("Bajo de peso", "Entrenamiento Personalizado", "Media"),
new PesoRef ("Normal/Ideal", "Entrenamiento Funcional","Media-Alta"),
new PesoRef ("Sobre peso", "actividades aerobicas y de fuerza","Alta"),
new PesoRef ("Obesidad","Spinning o Entrenamiento Personalizado","Media-Alta"),
]

const profesores = ['Victoria Amoroso', 'Geronimo Martin' , 'Luna Gancedo', 'Jonatan Demichelis']


const Kinesiologos = []

Kinesiologos.push('David Garcia', 'Luca Pontelli')


const staff = profesores.concat(Kinesiologos)

// console.log(staff);


// Los arrays de profesores y Kinesiologos estaban para el ejercicio de Arrays, aun así los deje por que probablemente los use más adelante (o no).










// ======== Función principal ========


const indiceCorporal = () => {
    let peso =  parseInt(prompt('Ingrese su peso'))
    let altura = parseInt(prompt('Ingrese su altura'))
    let resultado = Math.round( peso / (altura * altura)*10000)
    alert('hola' + ' ' + pesoActi[0].preguntarNombre() + ' su IMC es de' + " " + resultado)
    nivelPeso(resultado)
}




const nivelPeso = (resultado) => {
    if (resultado <= 18){
    console.log('Estás ' + pesoActi[0].condicion);
    console.log(`Nuestra recomendación de actividad : ${pesoActi[0].actividadRecom} , que tiene intensidad: ${pesoActi[0].intensidad} `);
    } else if ((resultado > 18) && (resultado <= 25)){
        console.log('Estás en un peso ' + pesoActi[1].condicion);
        console.log(`Nuestra recomendación de actividad : ${pesoActi[1].actividadRecom} , que tiene intensidad: ${pesoActi[1].intensidad} `);
    } else if ((resultado > 25) && (resultado <= 29)) {
        console.log('Estás con ' + pesoActi[2].condicion);
        console.log(`Nuestra recomendación de actividad : ${pesoActi[2].actividadRecom} , que tiene intensidad: ${pesoActi[2].intensidad} `);
    } else if (resultado >= 30) {
        console.log('Estás con ' + pesoActi[3].condicion);
        console.log(`Nuestra recomendación de actividad : ${pesoActi[3].actividadRecom} , que tiene intensidad: ${pesoActi[3].intensidad} `);
    } else {
        console.log('error');
    }
}

// indiceCorporal()

// ^^ descomentar para  probar


// agregar a futuro un switch para elección de profesores x horario.