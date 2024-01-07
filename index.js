const button = document.getElementById("bt1")
button.addEventListener('click', () => {
    let w = document.getElementById("weight").valueAsNumber;
    let h = document.getElementById("height").valueAsNumber;
    let bmi1 = bmi(w,h);
    bmi1 = Math.round(bmi1*10) / 10;
    document.getElementById("output").innerHTML = "Your BMI is " + bmi1 ;

});


output();
function bmi(weight,height){
    var bmi1 = weight/height**2;
    return bmi1;

}

