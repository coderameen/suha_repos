console.log("Helloo Suha, this is javascipt");
console.log("This is how we write and print in js")

document.write("This is how we print in js")
document.write("<h1>This is how we print in js</h1>")

alert("hello suha")
window.alert("This is alert print")


//to take input from user
var n = prompt("Enter the value")
document.write("The value you have enterede is", n);



//Statements
     /*
        1.conditional statement: if, if elese, nested if else, switch
        2.Unconditional statemtn: break, continue
        3.Iterative statements: for,while, do while
     */

     //WAP in JS to take input from user and check whether give number is ever or odd

     let n = prompt("Enter the number to check even or odd");
     if(n%2==0){
        console.log(n + " is even number");
     }
     else{
        console.log(n +" is odd number")
     }


      //nested if else
      let a = 10;
      let b = 30;
      let c = 20;
     //print the greatest number from given 3 number
     if(a > b && a > c){
         console.log(a+ " is greater");
     }
     else if(b > a && b > c){
         console.log(b +" is greater");
     }
     else{
         console.log(c+" is greater");
     }

     //Switch statement
    var day = parseInt(prompt("Enter number"));
    switch(day){
        case 1:
            console.log("Moday!!");
            break;
        case 2:
            console.log("Tuesday!!")
            break;
        default:
            console.log("Invalid Number");
            break;
    }

    // PRINT 1 to 10 except 5 and 8(continue)
    for(var i=1;i<=10;i++){
        if(i==5 || i==8){
            continue;
        }
        console.log(i);
    }
// PRINT 1 to 10 if it encounters 5 then terminate/stop(break)
for(var i=1;i<=10;i++){
    if(i == 5){
        break;
    }
    console.log(i);
}


//while loop: print from 1 to 5
let i=1;
while(i <= 5){
    console.log(i);
    i++;
}

//do while loop
let i=1;
do{
    console.log(i);
    i++;
}
while(i<=6);


//this is function without parameter
function suhafunction(){
    console.log("This is my function!!");
}
suhafunction()

//function with parameter
function func2(name){
    console.log("Hi "+ name);
}

func2("Suha")

//return function without parameter
function func3(){
    var a = 10;
    var b = 20;
    var res = a+ b;
    return res;
}
var output2 = func3()
console.log("The sum is "+output2);
//retrun function with parameter
function func33(num1,num2){
  
    var res = num1+ num2;
    return res;
}
var output = func33(20,30);
console.log("The sum is "+output);



//default parameter function
function func(a,b,c=100){
    return a+b+c;
}
var res = func(10,20,60);
console.log(res);


  //Scopes
  var i = "suha";//global variable
  function suhafunc(){
     var j = "zuha";//local variable
     console.log(i);
     console.log(j);
  }
//Function expression
var resultfunc = function suha_func(){
    console.log("Function Expresss!!! suha");
   }

   //(****)Anonymous function:A function which doesn't have function name is said to be anonymous function

   var res = function(){
    console.log("This is anonymous function!!");
   }
   res()


   resultfunc()
    
  suhafunc()


//OOPS
//objects in js
var fees = {
    Suha: 1000,
    Zoha: 2000,
    Ameen: 5000
}
console.log(fees.Suha)
console.log(fees['Zoha'])

// empty objects
var fees2 = {};

fees2['Alen'] = 10000;
console.log("The fee of Alen is ",fees2['Alen']);
fees2['suha'] = 20000;
fees2.bob = 30000;
console.log(fees2);
fees2.summ = function (){ return (10+20+30)};
console.log("The summ is : ", fees2.summ());

var mysunavariable = function (){
    return 100;
}
var output = mysunavariable()
console.log(output)


var fees = {
    suha: 1000,
    zoha: 2000,
    Ameen: 5000
}
// console.log(fees.suha)
fees.suha = 6000;
console.log(fees)

//delete the object
delete fees.Ameen;
console.log(fees)

   //OOPs
   //Factory Fuction: WE CAN CREATE A OBJECT INSTANCE WITHOUT "new" KEYWORD or class

   function mobile(){
    return {
        model:'iphone',
        price: function(){ return "60000"}
    }
  }
  var m1 = mobile()
  console.log(m1)

  console.log("The price of mobile is ",m1.price())

//constructor for factoryfunction
 //constructor are used to initialize the variables

 function Mobile(){
    this.model = "samsung";
    this.price = 50000;
 }

 //object instance
 var obj = new Mobile()
 console.log(obj.model)
console.log(obj.price)


//-------------------
function Mobile(mobile_name,mobile_price){
    this.model = mobile_name;
    this.price = mobile_price;
 }

 //object instance
 var M1 = new Mobile('vivo',30000)
 console.log(M1.model)
console.log(M1.price)

var m2 = new Mobile('OnePlus',66000)
console.log(m2.model)
console.log(m2.price)


class Student{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    student_details(){
        return "The student name is " + this.name + " and the student age is "+this.age;
    }
}
var s1 = new Student("Suha", "20")
console.log(s1.student_details())


//--------
class Mobile{
    display(){
        console.log("This is mobile function");
    }
}
var m1 = new Mobile()
m1.display()

