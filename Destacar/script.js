function verificar(){
    var nome = document.getElementById('nome').value
    var nomes = ["Joao", "Márcio", "Fabiana", "Jorge", "Silvana", "Luiz", "Carlos", "Pablo"]

    for(var i=0; i < nomes.length; i++){
        var nomeLista = document.getElementById(String(i+1))
        nomeLista.style.color = ""
        
    }


    for(var k=0; k < nomes.length; k++){
        if(nomes[k] == nome){
            var nomeLista = document.getElementById(String(k+1))
            nomeLista.style.color = "red"
        }
    }
}