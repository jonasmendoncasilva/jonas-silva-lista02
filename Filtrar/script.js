function verificar(){
    var nome = document.getElementById('nome').value.toLowerCase()
    var nomes = ["Joao", "Márcio", "Fabiana", "Jorge", "Silvana", "Luiz", "Carlos", "Pablo"]
    var lista = document.getElementById('lista')
    
    lista.innerHTML = ''

    var ul = document.createElement('ul')
    lista.appendChild(ul)

    for(var k=0; k < nomes.length; k++){
        if(nomes[k].toLowerCase().startsWith(nome)){
            var li = document.createElement('li')
            li.innerHTML = nomes[k]
            ul.appendChild(li)
        }
    }
}