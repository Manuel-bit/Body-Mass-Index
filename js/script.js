var weight = parseInt(prompt("enter your weight in kilograms"));
var height =parseInt(prompt("enter your height in meters"));
var bMI = function(bodyWeight, height){
return bodyWeight/(height*height);
}
alert("your BMI is" + bMI(weight, height));
