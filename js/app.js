// ====== Entrega de Proyecto final 2° =========




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
localStorage.setItem('pesoActi', JSON.stringify(pesoActi))




const profesores = ['Victoria Amoroso', 'Geronimo Martin' , 'Luna Gancedo', 'Jonatan Demichelis']


const Kinesiologos = []

Kinesiologos.push('David Garcia', 'Luca Pontelli')


const staff = profesores.concat(Kinesiologos)

// console.log(staff);


// Los arrays de profesores y Kinesiologos estaban para el ejercicio de Arrays, aun así los deje por que probablemente los use más adelante (o no).





// =============== Estructura principal de la app. ============

// ============ DOM ===============

const contenedor = document.getElementById('contenedor')
contenedor.classList.add('container')

const div = document.createElement('div')
div.classList.add('row')
contenedor.append(div)

const formulario = document.createElement('form')
formulario.classList.add('card', 'col-12', 'bg-warning' , 'p-5')
formulario.setAttribute("id", "formu");
formulario.innerHTML = `
<h1 class="display-2 text-center">Conocé tu masa corporal</h1>
<p class="text-muted fs-2 text-center">El índice de masa corporal (IMC) es una razón matemática que asocia la masa y la talla de un individuo, ideada por el estadístico belga Adolphe Quetelet, por lo que también se conoce como índice de Quetelet. </p>
<div class="input-group mb-5">
<span class="input-group-text" id="inputGroup-sizing-default">Nombre</span>
<input type="text" id="inputNombre" value= "" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group  mb-5 ">
<span class="input-group-text" id="inputGroup-sizing-default">Peso</span>
<input type="number" id="inputPeso" value= "" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

<div class="input-group mb-5">
<span class="input-group-text" id="inputGroup-sizing-default">Altura</span>
<input type="number" id="inputAltura" value= "" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>

`

contenedor.append(formulario)


// Botón de resultados

const boton = document.createElement('button')
boton.classList.add('btn', 'btn-secondary' , 'mb-5' , 'p-2')
boton.innerHTML = ` <button  type="button" id="boton"><b>Ver Resultado</b></button> `


formulario.append(boton)



// Display donde se muestra el resultado

const divResultado = document.createElement('div')
divResultado.classList.add('card', 'col-12', 'bg-dark' , 'p-5')
// divResultado.innerHTML = `<i class="bi bi-info" data-bs-toggle="tooltip" data-bs-html="true" title="Los valores de intensidad son aproximados y varian dependiendo la persona" style="font-size: xx-large"></i>`
formulario.append(divResultado)


const botonReset = document.createElement('button')
botonReset.classList.add('btn', 'btn-secondary' , 'p-2')
botonReset.setAttribute("id", "Resetear");
botonReset.innerText = `Reset`

formulario.append(botonReset)




//  ============EVENTO===========

const botonEvento =  document.getElementById('boton')
const botonDeReset = document.getElementById('Resetear')

    
    
    // ===== Función para evento =====
    
    
    
    const formuEvento = document.getElementById('formu')
    
    formuEvento.addEventListener('submit', (e) =>{
    e.preventDefault()
    const valorNombre = getNombre.value
    const valorPeso = parseInt(getPeso.value)
    const valorAltura = parseInt(getAltura.value)
    let resultado = Math.round( valorPeso / (valorAltura * valorAltura)*10000)
    
    localStorage.setItem('usuario', JSON.stringify(valorNombre))
    localStorage.setItem('valorPeso', JSON.stringify(valorPeso))
    localStorage.setItem('valorAltura', JSON.stringify(valorAltura))
    nivelPeso(resultado , valorNombre)
    
} )


// Función complementaria

const nivelPeso = (resultado , valorNombre) => {
    if (resultado <= 18){
        divResultado.innerHTML = `Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás con ${pesoActi[0].condicion}</b> <b>Nuestra recomendación de actividad : ${pesoActi[0].actividadRecom} , que tiene intensidad: ${pesoActi[0].intensidad}</b> `;
    } else if ((resultado > 18) && (resultado <= 25)){
        divResultado.innerHTML = `<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás en un peso ${pesoActi[1].condicion}</b> <b>Nuestra recomendación de actividad : ${pesoActi[1].actividadRecom} , que tiene intensidad: ${pesoActi[1].intensidad}</b>`
    } else if ((resultado > 25) && (resultado <= 29)) {
        divResultado.innerHTML =`<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás con ${pesoActi[2].condicion}</b> .<b>Nuestra recomendación de actividad : ${pesoActi[2].actividadRecom} , que tiene intensidad: ${pesoActi[2].intensidad}</b> `
    } else if (resultado >= 30) {
        divResultado.innerHTML = `<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás con  ${pesoActi[3].condicion}</b>. <b>Nuestra recomendación de actividad : ${pesoActi[3].actividadRecom} , que tiene intensidad: ${pesoActi[3].intensidad}</b>`
    } else {
        divResultado.innerHTML = ``;
    }
}


// Reset de los inpunts
let inputsTodos = document.querySelectorAll('input')

botonDeReset.addEventListener('click', () => {
    inputsTodos.forEach(input => input.value = '')

})




// ==================

botonEvento.addEventListener('click', formuEvento)


const getNombre = document.getElementById('inputNombre')
const getPeso = document.getElementById('inputPeso')
const getAltura = document.getElementById('inputAltura')



// PD: Ver ''progress'' de BS y ver como implementarlo. (https://getbootstrap.com/docs/5.0/components/progress/)
// REEMPLAZAR INPUTS DE TEXTOS POR RANGE'S

// agregar tipo modal de clase actividades en resultado


//  Crear los inputs (usar los ranges de BS) -------- Agregar formu común, agregar Range cuando se vea jQuery

//Crear un modal que pida e-mail.




// ====================DESAFIO COMPLEMENTARIO=======================



const listaArticulos = [

{
    Titulo: "Articulo 1" ,
    Subtitulo: "Un gran subtitulo 1",
    Parrafo: "Lorem ipsum dolor sit amet.",

},
{
    Titulo: "Articulo 2" ,
    Subtitulo : "Un gran subtitulo 2" ,
    Parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sed.",
},
{
    Titulo: "Articulo 3" ,
    Subtitulo : "Un gran subtitulo 3" ,
    Parrafo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, odit. Recusandae autem iste sunt harum.",

},
{
    Titulo: "Articulo 4 " ,
    Subtitulo : "Un gran subtitulo 4" ,
    Parrafo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quibusdam corrupti amet error explicabo, rerum dolore laudantium molestiae quia veritatis.",

},
{
    Titulo: "Articulo 5 " ,
    Subtitulo : "Un gran subtitulo 5" ,
    Parrafo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis sint corrupti cupiditate earum qui officiis, dolor suscipit excepturi, corporis beatae ipsa optio debitis sed natus ducimus libero consequuntur non atque.",
},
]


listaArticulos.forEach((articulo) => {
const colapsar = document.createElement('div')
    colapsar.classList.add ('card', 'col-5' , 'm-3' , 'p-3')
    colapsar.innerHTML = `
    <div class="card-header">
    ${articulo.Titulo}
    </div>
    <div class="card-body">
    <h5 class="card-title">${articulo.Subtitulo}</h5>
    <p class="card-text">${articulo.Parrafo}.</p>
    </div>
</div>
    
    `

    document.body.append(colapsar)

})







