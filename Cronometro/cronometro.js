//define qual função cada botao realiza
function verificaBotao() {
    var btn = event.target.value
    if(btn == 'iniciar'){
        inicia()
    } else if(btn == 'pausar'){
        pausa()
    } else if(btn == 'resetar'){
        reseta()
    }
}

//Faz a contagem do tempo
function timer(){
    s += 1

        if(s == 59){
            m += 1
            s = 0
        } if(m == 59){
            h += 1
            m = 0
        }
      
    var formato = (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s)

    document.getElementById('display').innerHTML = formato
}

//Inicia o cronometro
function inicia() {
     cronometro = setInterval(timer, tempo)
}

//Pausa o cronometro
function pausa(){
    clearInterval(cronometro)
}

//Reseta o cronometro
function reseta() {
    clearInterval(cronometro)
    h = 0
    m = 0
    s = 0
    document.getElementById('display').innerHTML = '00:00:00'
}

var tempo = 1000, //Equivalente a 1 segundo
    h = 0, //Horas
    m = 0, //Minutos
    s = 0 //Segundos
var cronometro

//Seleciono os botoes
const btn = document.querySelectorAll('button')

//Percorro todos os botoes e, adiciono o envento onclick
btn.forEach(botao => {
    botao.addEventListener('click', verificaBotao)
});



