function verificar(){
    var velocidade = document.getElementById('entrada')
    var vel = Number(velocidade.value)

    var res = document.getElementById('velocidade')
    res.innerHTML  = vel
}