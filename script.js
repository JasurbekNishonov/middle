let num1 =+prompt("Enter first number")
let num2 =+prompt("Enter second number")
let num3 =+prompt("Enter third number")
if(num1>num2 && num1<num3){
    alert("Average value is "+num1)
}else if(num1>num2 && num1<num3){
    alert("Average value is "+num1)
}else if(num2>num1 && num2<num3){
    alert("Average value is "+num2)
}else if(num1>num2 && num2>num3){
    alert("Average value is "+num2)
}else if(num3>num1 && num3<num2){
    alert("Average value is "+num3)
}else if(num3>num2 && num1>num3){
    alert("Average value is "+num3)
}else{
    alert("Something gone wrong!!!")
}