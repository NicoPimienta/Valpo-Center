//clase 01

// let nombre = prompt('Ingrese su nombre')
// let precioSugus = 5
// let cantidad = parseInt(prompt("Ingrese la cantidad de sugus que desea"))

// let resultado = "Hola" + " " +  nombre + " " + "el precio de" + " " + cantidad + " " + "sugus es de: " + (cantidad * precioSugus)  + " " + "pesos"


// alert(resultado)


//==================

// clase 02

//simulación de entrada a montaña rusa , las medidas están en cm, y peso en kg.

// const altura = parseInt(prompt('Indique su altura'))
// const peso = parseInt(prompt('Indique su peso'))
// 
// 
// if (altura <= 120 || peso > 140) {
    // alert('usted no cumple los requerimientos, no puede pasar')
// }
// else {
    // alert('usted cumple los requerimientos puede pasar')
// }
// 

// =================


// CLASE 3 - CICLOS/ITERACIONES


// Patovica simulator (?) 

// 
// for (let i = 1; i <=20 ; i++){
// 
    // alert(i + " " + 'personas entraron');
    // 
    // while (i === 10) {
// 
        // alert('Se llegó a la mitad de la capacidad , pueden seguir pasando');
        // break;
    // } while (i === 20) {
        // alert('se llenó, no pueden entrar más')
        // break
    // }
// }
// 
//

// ======= Clase 04 - funciones =======

// const indiceCorporal = () => {
    // let peso =  parseInt(prompt('Ingrese su peso'))
    // let altura = parseInt(prompt('Ingrese su altura'))
    // let resultado = Math.round( peso / (altura * altura)*10000)
    // alert('Su IMC es de' + " " + resultado)
    // nivelPeso(resultado)
// }
// 
// 
// 
// 
// const nivelPeso = (resultado) => {
    // if (resultado <= 18){
    // console.log('Estás bajo de peso');
    // } else if ((resultado > 18) && (resultado <= 25)){
        // console.log('Estás en un peso Normal/Ideal');
    // } else if ((resultado > 25) && (resultado <= 29)) {
        // console.log('Estás con sobrepeso');
    // } else if (resultado >= 30) {
        // console.log('Estás con obesidad');
    // } else {
        // console.log('error');
    // }
// }
// 
// indiceCorporal()





// ====== TP COMPLEMENTARIO CLASE 04 ======

// EJERCICIO 1

// const precioCosto = () => {
//     let precio = parseInt(prompt('Ingrese el precio'))
//     return precio 
// }

// const sumarIva = () => {
//     let resultado = precioCosto() * 1.21
//     return  alert("el precio total con IVA es de" + " " + resultado)
// }

// sumarIva()

// EJERCICIO 2

// let edad = prompt("Cual es tu edad?");



// const checkEdad = () => {
//     if (Number(edad) < 18) {
//         alert("lo lamento, sos muy joven para subirte sacar la licencia");
//     } else if (Number(edad) > 18) {
//         alert("ARRANCAMOS!!!, a ponerse el cinturón! ");
//     } else if (Number(edad) === 18) {
//         alert("Felicidades en tu primer año de conducción!, a ponerse el cinturón")
//     }

// }

// checkEdad()


// EJERCICIO 3

// let ivaImpuesto = 0.21
// let impuestoPais = 0.08
// let impuestoGanancias = 0.35
// let pedirNombreDeJuego = prompt('Ingrese el nombre del juego')
// let juegoSteam = parseFloat((prompt('Ingrese el valor del juego')))

// const sumaDeImpuestos = () => {
//     let suma = (ivaImpuesto + impuestoPais + impuestoGanancias) * 100
//     let porcentajeMasValor = juegoSteam + (suma / 100 * juegoSteam)
//     return porcentajeMasValor
// }

// const valorNeto = () => {
//     console.log('El valor total de ' + pedirNombreDeJuego + ' más impuestos  es de ' + sumaDeImpuestos());
// }


// valorNeto()


// ====== Clase 05 -  Objetos =========




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



const pesoRef1 = new PesoRef ("Bajo de peso", "Entrenamiento Personalizado", "Media")
const pesoRef2 = new PesoRef ("Normal/Ideal", "Entrenamiento Funcional","Media-Alta")
const pesoRef3 = new PesoRef ("Sobre peso", "actividades aerobicas y de fuerza","Alta")
const pesoRef4 = new PesoRef ("Obesidad","Spinning o Entrenamiento Personalizado","Media-Alta" )





const indiceCorporal = () => {
    let peso =  parseInt(prompt('Ingrese su peso'))
    let altura = parseInt(prompt('Ingrese su altura'))
    let resultado = Math.round( peso / (altura * altura)*10000)
    alert('hola' + ' ' + pesoRef1.preguntarNombre() + ' su IMC es de' + " " + resultado)
    nivelPeso(resultado)
}




const nivelPeso = (resultado) => {
    if (resultado <= 18){
    console.log('Estás ' + pesoRef1.condicion);
    console.log(`Nuestra recomendación de actividad : ${pesoRef1.actividadRecom} , que tiene intensidad: ${pesoRef1.intensidad} `);
    } else if ((resultado > 18) && (resultado <= 25)){
        console.log('Estás en un peso ' + pesoRef2.condicion);
        console.log(`Nuestra recomendación de actividad : ${pesoRef2.actividadRecom} , que tiene intensidad: ${pesoRef2.intensidad} `);
    } else if ((resultado > 25) && (resultado <= 29)) {
        console.log('Estás con ' + pesoRef3.condicion);
        console.log(`Nuestra recomendación de actividad : ${pesoRef3.actividadRecom} , que tiene intensidad: ${pesoRef3.intensidad} `);
    } else if (resultado >= 30) {
        console.log('Estás con ' + pesoRef4.condicion);
        console.log(`Nuestra recomendación de actividad : ${pesoRef4.actividadRecom} , que tiene intensidad: ${pesoRef4.intensidad} `);
    } else {
        console.log('error');
    }
}

indiceCorporal()




// agregar a futuro un switch para elección de profesores








