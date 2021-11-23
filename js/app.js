// ====== Entrega de Proyecto final 3° =========









// Arrays

const profesores = ['Victoria Amoroso', 'Geronimo Martin' , 'Luna Gancedo', 'Jonatan Demichelis']





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
<h1 class="display-2 text-center" id="tituloApp">Conocé tu masa corporal</h1>
<p class="text-muted fs-2 text-center">El índice de masa corporal (IMC) es una razón matemática que asocia la masa y la talla de un individuo, ideada por el estadístico belga Adolphe Quetelet, por lo que también se conoce como índice de Quetelet. </p>
<div class="input-group mb-5">
<label for="inputNombre"></label>
<input type="text"  placeholder="Ingrese su nombre" id="inputNombre" value= "" class="form-control p-2 fs-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
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
divResultado.style.display = 'none'
divResultado.setAttribute("id" , "divResultado")
formulario.append(divResultado)

// Fade in para mostrar el resultado



$('#boton').click(() => {
    $('#divResultado').fadeIn('slow')
})





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
        <b>Estás con ${global[0].condicion}</b> <b>Nuestra recomendación de actividad : ${global[0].actividadRecom} , que tiene intensidad: ${global[0].intensidad} <br> Profesor: ${profesores[0]}</b> <br> <div class="progress">
        <div class="progress-bar bg-secondary.bg-gradient" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class ="fs-5">Bajo Peso</span></div>
            </div> `;
    } else if ((resultado > 18) && (resultado <= 25)){
        divResultado.innerHTML = `<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás en un peso ${global[1].condicion}</b> <b>Nuestra recomendación de actividad : ${global[1].actividadRecom} , que tiene intensidad: ${global[1].intensidad} <br> Profesores: ${profesores[0]} & ${profesores[1]} </b> <br> <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><span class ="fs-5">Normal/ideal</span></div>
            </div>`
    } else if ((resultado > 25) && (resultado <= 29)) {
        divResultado.innerHTML =`<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás con ${global[2].condicion}</b> .<b>Nuestra recomendación de actividad : ${global[2].actividadRecom} , que tiene intensidad: ${global[2].intensidad} <br> Profesores: ${profesores[0]}, ${profesores[1]} & ${profesores[3]} </b> <br> <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span class ="fs-5">Sobre-Peso</span></div>
            </div>`
    } else if (resultado >= 30) {
        divResultado.innerHTML = `<b>Hola ${valorNombre}  su IMC es de  ${resultado}.
        <b>Estás con  ${global[3].condicion}</b>. <b>Nuestra recomendación de actividad : ${global[3].actividadRecom} , que tiene intensidad: ${global[3].intensidad} <br> Profesor: ${profesores[2]}  </b> <br> <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span class ="fs-5">Obesidad</span></div>
            </div>`
    } else {
        divResultado.innerHTML = `Por favor ingrese peso y altura`;
    }
}


// Reseteo de inputs
let inputsTodos = document.querySelectorAll('input')



botonDeReset.addEventListener('click', () => {
    inputsTodos.forEach(input => input.value = '')
    $('#divResultado').css('display', 'none')
})

// Check de nombre

$('#inputNombre').change( () => {
    const valor = $('#inputNombre').val()

    if ( valor == ' ' || valor == null ) {
        $('#inputNombre').addClass('invalido')
        $('#inputNombre').removeClass('valido')
    } else if (valor.length <= 3 ) {
        $('#inputNombre').addClass('invalido')
        $('#inputNombre').removeClass('valido')
    } else {
        $('#inputNombre').addClass('valido')
    }
} )




// Range del peso
$( function() {
    $( "#slider-range-min" ).slider({
    range: "min",
        value: 40,
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
        value: 140,
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



// ======== Animación del titulo============ 


$('#tituloApp').animate({
    fontSize: '7rem'
}, 2000, () => {
    $('#tituloApp').animate({
        fontSize: '5rem'

    }, 2000)
} )


// anidación de JSON

let global = {}

fetch('../js/resultado.json')
    .then ((resp) => resp.json())
    
    .then ((data) => {
    console.log(data)

        global = data
    
    })





