// ====== Entrega de Proyecto final 2° =========




// Constructor & Arrays

const profesores = ['Victoria Amoroso', 'Geronimo Martin' , 'Luna Gancedo', 'Jonatan Demichelis']


class PesoRef {
    constructor (condicion,actividadRecom,intensidad) {
        this.condicion = condicion
        this.actividadRecom = actividadRecom
        this.intensidad = intensidad
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
<input type="text" id="inputNombre" value= "" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
</div>


<label for="amount">Ingrese su peso:</label>
<input type="text" id="inputPeso" class= "mb-2" readonly style="border:0; color:#f6931f; font-weight:bold;">
<div id="slider-range-min"></div>


<label for="amount">Ingrese su Altura:</label>
<input type="text" id="inputAltura" class= "mt-2 mb-2" readonly style="border:0; color:#f6931f; font-weight:bold;">
<div id="slider-range-min-2"></div>

`

contenedor.append(formulario)


// Botón de resultados

const boton = document.createElement('button')
boton.classList.add('btn', 'btn-secondary' , 'mb-5' , 'p-2', 'fw-bold' , 'mt-5')
boton.setAttribute("id", "boton")
boton.innerText = ` Ver Resultados `



formulario.append(boton)



// Display donde se muestra el resultado

const divResultado = document.createElement('div')
divResultado.classList.add('card', 'col-12', 'bg-dark' , 'p-5')
// Implementar a lo ultimo : divResultado.innerHTML = `<i class="bi bi-info" data-bs-toggle="tooltip" data-bs-html="true" title="Los valores de intensidad son aproximados y varian dependiendo la persona" style="font-size: xx-large"></i>`
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
        <b>Estás con ${pesoActi[0].condicion}</b> <b>Nuestra recomendación de actividad : ${pesoActi[0].actividadRecom} , que tiene intensidad: ${pesoActi[0].intensidad} <br> Profesor: ${profesores[0]}</b> `;
    } else if ((resultado > 18) && (resultado <= 25)){
        divResultado.innerHTML = `<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás en un peso ${pesoActi[1].condicion}</b> <b>Nuestra recomendación de actividad : ${pesoActi[1].actividadRecom} , que tiene intensidad: ${pesoActi[1].intensidad} <br> Profesores: ${profesores[0]} & ${profesores[1]} </b>`
    } else if ((resultado > 25) && (resultado <= 29)) {
        divResultado.innerHTML =`<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás con ${pesoActi[2].condicion}</b> .<b>Nuestra recomendación de actividad : ${pesoActi[2].actividadRecom} , que tiene intensidad: ${pesoActi[2].intensidad} <br> Profesores: ${profesores[0]}, ${profesores[1]} & ${profesores[3]} </b>`
    } else if (resultado >= 30) {
        divResultado.innerHTML = `<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás con  ${pesoActi[3].condicion}</b>. <b>Nuestra recomendación de actividad : ${pesoActi[3].actividadRecom} , que tiene intensidad: ${pesoActi[3].intensidad} <br> Profesor: ${profesores[2]}  </b>`
    } else {
        divResultado.innerHTML = ``;
    }
}


// Reset de los inpunts (CAMBIAR ESTE A jQuery )
let inputsTodos = document.querySelectorAll('input')

botonDeReset.addEventListener('click', () => {
    inputsTodos.forEach(input => input.value = '')

})



// Range del peso
$( function() {
    $( "#slider-range-min" ).slider({
    range: "min",
        value: 37,
        min: 1,
        max: 300,
        slide: function( event, ui ) {
        $( "#inputPeso" ).val(  ui.value + "KG");
    }
    });
    $( "#inputPeso" ).val(  $( "#slider-range-min" ).slider( "value" ) + "KG" );
} );

//Range de la altura

$( function() {
    $( "#slider-range-min-2" ).slider({
    range: "min",
        value: 37,
        min: 130,
        max: 220,
        slide: function( event, ui ) {
        $( "#inputAltura" ).val(  ui.value + "cm");
    }
    });
    $( "#inputAltura" ).val(  $( "#slider-range-min-2" ).slider( "value" ) + "cm" );
} );





// ==================

botonEvento.addEventListener('click', formuEvento)


const getNombre = document.getElementById('inputNombre')
const getPeso = document.getElementById('inputPeso')
const getAltura = document.getElementById('inputAltura')



// PD: Ver ''progress'' de BS y ver como implementarlo. (https://getbootstrap.com/docs/5.0/components/progress/)
// REEMPLAZAR INPUTS DE TEXTOS POR RANGE'S -x

// agregar imagen de actividad *


//  Crear los inputs -x (usar los ranges de BS) -------- Agregar formu común -x, agregar Range cuando se vea jQuery

//Crear un modal que pida e-mail (en el final)
