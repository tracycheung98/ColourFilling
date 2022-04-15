
function CanvasSize(){
    //console.log(document.getElementById("size").value);

    var size = document.getElementById("size").value;
    var table = document.getElementById("table");
    table.innerHTML = "";
    for(var i = 1; i <= size; i++){
        var row = table.insertRow(0);
        for(var j = 1; j <= size; j++){
            var cell = row.insertCell(0);
            var id = i.toString() + j.toString()
            // cell.innerHTML= id;
            cell.setAttribute("id",id);
            cell.setAttribute('onclick', "ChangeColour("+id+")")
        }
    }
}

var index = 0;
const colours = ['black','red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white'];

function ChangeColour(id){
    //console.log(colours.length);

    var cell = document.getElementById(id);
    cell.innerText = "";
    cell.style.backgroundColor = colours[index];
    index ++;
    if (index == colours.length){
        index = 0;
    }

    // var size = document.getElementById("size").value;
    // var table = document.getElementById("table");
    // for(var i = 1; i <= size; i++){
    //     for(var j = 1; j <= size; j++){
    //         var cell = document.getElementById(i.toString() + j.toString());
    //         cell.onclick = document.body.style.color = "red";
    //     }
    // }
    
}
