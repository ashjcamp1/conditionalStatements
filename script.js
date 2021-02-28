var containerEle = document.body.querySelector(".container");

// number 1

var num1=Number(prompt("What is the first number?"));

var checkNumber = /^[0-9]+$/;
    
if(checkNumber.test(num1)){
     Number(num1);
}else{
  containerEle.innerHTML="Calculation Failed; Make sure Input 1 is a number and not text. Ex: 1 and not one";
  throw new Error;
}

// operator

var operator=(prompt("What is the operator?"));
    
if(operator=="*"){
  String(operator)
}else if(operator=="/"){
  String(operator)
}else if(operator=="-"){
  String(operator)
}else if(operator=="+"){
  String(operator)
}else{
      containerEle.innerHTML="Calculation Failed; Make sure Operator is a symbol and not text. Ex: + and not plus";
  throw new Error;
}

// number 2

var num2=Number(prompt("What is the second number?"));

var checkNumber = /^[0-9]+$/;
    
if(checkNumber.test(num2)){
     Number(num2);
}else{
    containerEle.innerHTML="Calculation Failed; Make sure Input 2 is a number and not text. Ex: 2 and not two";
  throw new Error;
}

// calculator output 

if(operator=="*"){
  var answer = num1 * num2
}else if(operator=="/"){
  var answer = num1 / num2 
}else if(operator=="-"){
  var answer = num1 - num2
}else if(operator=="+"){
  var answer = num1 + num2
};

containerEle.innerHTML="The answer is: " + answer;