/**
 * Created by DucThuong95 on 11/05/2017.
 */
var arrElement = "";
var number = "";
function clear_value(){
    var valueRessult = document.getElementById('display').value;
    if(valueRessult == 0){
        document.getElementById('display').value = "";
    }
}
function setDefaultValue(){
    var valueText = document.getElementById('display').value;
    if(valueText == ""){
        document.getElementById('display').value = "0";
    }
}
function reset() {
    document.getElementById('display').value = "0";
    arrElement = "";
}
function erro(){
    document.getElementById('display').value = "erro !";
}
function enterNumber(obj){
    number += obj.value;
    document.getElementById('display').value = number;
    arrElement += obj.value;
}
function enterOperator(obj){
    number = "";
    document.getElementById('display').value = obj.value;
    arrElement += obj.value;
}
function caculator(obj){
    try{
        var result = eval(arrElement);
        document.getElementById('display').value = result;
    }catch (ex){
        document.getElementById('display').value = "erro !";
    }
}