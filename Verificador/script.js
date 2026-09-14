function verificar(){
    var anoEntrada = document.getElementById('entrada').value
    var radio = document.getElementById('radio')
    var sexo = radio.getElementsByTagName('input')
    var figura = window.document.getElementById('foto')
    var ano = new Date();
    var resultado = document.getElementById('resultado')

    idade = (ano.getFullYear() - anoEntrada)

    if(sexo[0].checked){
        figura.src = 'homem.jpg'
    }else{
        figura.src = 'mulher.png'
    }
    resultado.innerHTML = (idade+" anos")

}