var weight = document.getElementById("weight").valueAsNumber
var height = document.getElementById("height").valueAsNumber
var bmi1 = bmi(weight,height);
console.log(bmi1)
output();
function bmi(weight , height){
    var bmi = weight/height**2;
    return bmi

}

function output(){
    document.write("your BMI is " + bmi1)

}