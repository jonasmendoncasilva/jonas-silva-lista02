function verificar(){

    var checkboxes = document.getElementById('checkbox')
    var presentesHtml = document.getElementById('presentes')
    var ausentesHtml = document.getElementById('ausentes')
    var boxes = checkboxes.getElementsByTagName('input')
    var ausentes = []
    var presentes = []

    for(var i = 0; i < boxes.length; i++){
        if(boxes[i].checked){
            presentes.push(marcar(i)) 
        } else{
            ausentes.push(marcar(i))        
        }
    }

    presentesHtml.innerHTML = presentes
    ausentesHtml.innerHTML = ausentes
}

function marcar(i){
    switch (i){
        case 0:
            return " João"
        break
        case 1:
            return " Márcio"
        break
        case 2:
            return " Fabiana"
        break
        case 3:
            return " Jorge"
        break
        case 4:
            return " Silvana"
        break
        case 5:
            return " Luiz"
        break
        case 6:
            return " Carlos" 
        break
        case 7:
            return " Pablo"
        break
    }    
}