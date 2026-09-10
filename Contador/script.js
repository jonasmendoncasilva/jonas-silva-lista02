window.onload = function iniciar(){
    var valor = document.getElementById('cliques')
    valor.innerHTML = 0
}

function contar(){
    var somador = document.getElementById('cliques')
    var numAtual = Number(somador.innerHTML)
    numAtual++
    somador.innerHTML = numAtual 
}

function zerar(){
    var valor = document.getElementById('cliques')
    valor.innerHTML = 0
}