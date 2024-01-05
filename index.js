let w = document.getElementById("weight").valueAsNumber
let h = document.getElementById("height").valueAsNumber
let bmi1 = bmi(w,h);
const button = document.getElementById("bt1")
button.addEventListener('click', () => {
    
    document.write(`Your BMI is ${bmi1}`,);

});
bmi1 = Math.round(bmi1*10) / 10;
console.log(bmi1)
output();
function bmi(weight , height){
    var bmi = weight/height**2;
    return bmi;

}

