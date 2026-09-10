function mudar(){
    var corTitulo = document.getElementById('titulo')
    var background = document.getElementById('background')

    if(corTitulo.style.color == "black" || corTitulo.style.color == "rgb(0, 0, 0)"){
        corTitulo.style.color = "white"
        background.style.background = "black"
    } else{
        corTitulo.style.color = "black"
        background.style.background = "white"
    }
}