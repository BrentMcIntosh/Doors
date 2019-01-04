
var pass = 1;
var door = 1;

function handleClick(){
    
    var id = "door" + door;

    var element = document.getElementById(id);

    var state = element.className;

    var timeout = 10;

    if(door % pass === 0){
        if(state === 'closed'){
            element.className = 'opened';
        }
        else{
            element.className = 'closed';
        }
    }
    else{
        timeout = 1;
    }

    if(door === 100){
        pass++;
        door = 1;
    }
    else{
        door++;
    }

    if(pass < 101){
        setTimeout(handleClick, timeout);
    }
    else{
        printOpen();
    }
}

function printOpen(){
    for(var i = 1; i < 101; i++){
        var id = "door" + i;
    
        var element = document.getElementById(id);
    
        if(element.className === 'opened'){
            document.getElementById("doors").innerHTML += " " + i;
        }
    }                
}


function setDoors(){
    for(var i = 1; i < 101; i++){
        var id = "door" + i;
    
        var element = document.getElementById(id);
    
        element.className = 'closed';
    }                
}
