const button = document.getElementById("bt1")
button.addEventListener('click', () => {
    let w = document.getElementById("weight").valueAsNumber;
    let h = document.getElementById("height").valueAsNumber;
    let bmi1 = bmi(w,h);
    let condition = result(bmi1);
    bmi1 = Math.round(bmi1*10) / 10;
    document.getElementById("output").innerHTML = "Your BMI is " + bmi1 ;
    document.getElementById("result").innerHTML = condition ;

});

//formula to find BMI 
function bmi(weight,height){
    var bmi1 = weight/height**2;
    return bmi1;

}
function result(bmi1) { // nested if statement 
    let condition;
    
    if (bmi1 < 18.5)
    {
        condition = "underweight"
    }
    else if (bmi1 >= 18.5 && bmi1 < 25){
        condition = "Normal"
    }
    else if (bmi1 >= 25 && bmi1 < 30 ){
        condition = "overweight"
    }
    else if (bmi1 >= 30 && bmi1 < 35){
        condition = "degree 1 obesity "
    }
    else if (bmi1 > 35){
        condition = "degree 2 obesity"
    }
    condition = condition.toUpperCase();
    return condition;
}
 