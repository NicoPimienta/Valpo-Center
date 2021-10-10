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

// blablaalbal


// const precioCosto = () => {
//     let precio = parseInt(prompt('Ingrese el precio'))
//     return precio 
// }

// const sumarIva = () => {
//     let resultado = precioCosto() * 1.21
//     return  alert("el precio total con IVA es de" + " " + resultado)
// }

// sumarIva()

// 

const recibir = (numeroDec) => {
    let traerdecimal = parseFloat(prompt('Ingrese numero decimal'))
    return alert(Math.round(traerdecimal))

}

