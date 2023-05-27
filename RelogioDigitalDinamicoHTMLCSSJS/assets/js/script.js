const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

const dias1 = document.getElementById('dias');
const diaSemana = setInterval(function day() {
    let diaTotal = new Date();
    let dias = diaTotal.getDay();

    switch (dias) {
        case 0:
            dias1.textContent =  ("Domingo")
        break;
        case 1:
            dias1.textContent =  ("Segunda-feira")
        break;
        case 2:
            dias1.textContent =  ("Terça-feira")
        break;
        case 3:
            dias1.textContent =  ("Quarta-feira")
        break;
        case 4:
            dias1.textContent =  ("Quinta-feira")
        break;
        case 5:
            dias1.textContent =  ("Sexta-feira")
        break;
        case 6:
            dias1.textContent =  ("Sabado")
        break;

    default:
        dias1.textContent =  ("Codigo Quebrado")
    }
})

/*const mostreDigitado = document.getElementById('mostreDigitado') 
let diasDigitado = document.getElementById('diasDigitado')
const diaSemanas = setInterval(function days() {
    //let diaTotal = new Date();
    //let dias = diaTotal.getDay();

    switch (diasDigitado) {
        case 0:
            mostreDigitado.textContent =  ("Domingo")
        break;
        case 1:
            mostreDigitado.textContent =  ("Segunda-feira")
        break;
        case 2:
            mostreDigitado.textContent =  ("Terça-feira")
        break;
        case 3:
            mostreDigitado.textContent =  ("Quarta-feira")
        break;
        case 4:
            mostreDigitado.textContent =  ("Quinta-feira")
        break;
        case 5:
            mostreDigitado.textContent =  ("Sexta-feira")
        break;
        case 6:
            mostreDigitado.textContent =  ("Sabado")
        break;

    default:
        mostreDigitado.textContent =  ("Codigo Quebrado")
    }
})*/