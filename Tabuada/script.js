function calcular(){
    var valor = document.getElementById('num')
    var numero = Number(valor.value)
    document.getElementById('numero').innerHTML = numero

    var div = document.getElementById('resultado')
    div.innerHTML = ''

    for(var i=0; i <= 10;i++){
        var p = document.createElement('p')
        p.innerHTML = numero * i;
        div.appendChild(p)
    }
    
}