function show(abc){

var show = document.getElementById("mainInput");
show.value += abc

}

function reasult(){

    var reasult = document.getElementById("mainInput");
    reasult.value = eval(reasult.value)
    

}
function clearReasult(){

    var clearReasult = document.getElementById("mainInput");
    clearReasult.value = ""
     

}

function valueCopy() {
    var valueCopy = document.getElementById("mainInput");
    valueCopy.select();
    valueCopy.setSelectionRange(0, 99)
    document.execCommand("copy");
    alert("Copied: " + valueCopy.value);
  }



function backup() {
    var backup = document.getElementById("mainInput");
    backup.value = backup.value.slice(0,-1)
    
}

function duble() {
    var duble = document.getElementById("mainInput");
    duble.value = duble.value*2
    
}
function duble() {
    var duble = document.getElementById("mainInput");
    duble.value = duble.value*2
    
}

function parcantage(){

var parcantage = document.getElementById("mainInput");
parcantage.value = parcantage.value*100/500

}





