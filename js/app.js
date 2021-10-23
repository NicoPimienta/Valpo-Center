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
    alert(`hola ${pesoActi[0].preguntarNombre()} `)
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







// ============ DOM ===============
// ABAAJO ENTREGABLE (poner en comentario despues de los "=")

const cuerpoApp = document.getElementById ('cuerpo')
const contenedor = document.getElementsByClassName('contenedor')

cuerpoApp.innerHTML = `<h1><strong>Indice de masa corporal</strong></h1>`
cuerpoApp.classList.add("fondo")


document.body.appendChild(cuerpoApp);



let printNombre = prompt('Ingrese su nombre')

const pedirInfo1 = document.createElement('p')

pedirInfo1.innerHTML = (`<i>Hola ${printNombre}!! , nuestro staff se conforma por

${profesores.join(" , ")} , ${Kinesiologos.join(" , ")} </i> `)


pedirInfo1.classList.add("fondo")

document.body.append(pedirInfo1)



// ========================================


// PASARLO A BOOTSTRAP


// 1.Crear el contenedor- x
// 2.Crear los textos - x
// 3. Crear los inputs (usar los ranges de BS) -------- Agregar formu común, agregar Range cuando se vea jQuery
// 4. Agregar un botón de enviar (Via BS) - x
// 5. Darle color
// PD: Ver ''progress'' de BS y ver como implementarlo. (https://getbootstrap.com/docs/5.0/components/progress/)

// const contenedor = document.querySelector('.container .row')

// REEMPLAZAR INPUTS DE TEXTOS POR RANGE'S


// const formulario = document.createElement('article')
//     formulario.classList.add('card', 'col-12', 'bg-warning')
//     formulario.innerHTML= `
//     <h1 class="display-4 text-center">Conocé tu masa corporal</h1>
//     <p class="text-muted fs-2 text-center">El índice de masa corporal (IMC) es una razón matemática que asocia la masa y la talla de un individuo, ideada por el estadístico belga Adolphe Quetelet, por lo que también se conoce como índice de Quetelet. </p>
//     <div class="input-group mb-5">
//     <span class="input-group-text" id="inputGroup-sizing-default">Nombre</span>
//     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//     </div>
    
//     <div class="input-group mb-5 ">
//     <span class="input-group-text" id="inputGroup-sizing-default">Peso</span>
//     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//     </div>

//     <div class="input-group mb-5">
//     <span class="input-group-text" id="inputGroup-sizing-default">Altura</span>
//     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//     </div>

//     <button type="button" class="btn btn-secondary mb-5"><b>Ver Resultado</b></button>

//     `


// contenedor.append(formulario)







// console.log(formulario);