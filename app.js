        // CHAPTER: 01   ALERT




// 1. Write a script to greet your website visitor using JS alert
// box

 alert("JavaScript box");



// 2. Write a script to display following message on your web
// page:
alert("Erro! please enter valid password");

// 3. Write a script to display following message on your web
// page: (Hint : Use line break)


alert("Welcome to JS Land...\n Happy Coding!");

// 4. Write a script to display following messages in sequence


alert("Welcome to JS Land...");

alert("Happy Coding! \n ");


// 5. Generate the following message through browser’s
// developer console:

alert("Hello...I can run through my web brower's concole");







// CHAPTER : 02 VARIABLES AND STRINGSS






// 1. Declare a variable called username.
// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.



var username = "ramsha";
var myname = "naseer";
console.log(username,myname);


// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;
message = "hello world";
console.log(message);
 alert(message);


//  4. Write a script to save student’s bio data in JS variables and
//  show the data in alert boxes.

 var name = "anna jack";
 var age = "20 years old";
 var course = "Certified Mobile Application Development";

 alert(name);
 alert(age);
 alert(course);


//  5. Write a script to display the following alert using one JS
//  variable:


alert( "pizza\npizz\npiz\npi\np");  




//  6. Declare a variable called email and assign to it a string that
//  represents your Email Address(e.g. example@example.com).
//  Show the blow mentioned message in an alert box.(Hint: use
//  string concatenation)
 
 
 var message = "my email address is ";
  var email = "@example.com";
  var banger = "!";
  var fullemail = message + email + banger;
  alert(fullemail);


//   7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:


var book = "I am trying to learn from the ";
var book2 = "Book A smarter way to learn javascript";
var fullbook = book + book2;
alert(fullbook);

// 8. Write a script to display this in browser through JS

var text = "Yah! I can write HTML content through Javascript";
document.write(text);


// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var x = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.getElementById("demo").innerHTML = x; 
alert(x);








// CHAPTER:03 VARIABLE FOR NUMBERS







// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.


var age = prompt("what is your age ");
alert(" i am " + age + " years old " );


// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visit = "you have visited this site 14 times"
alert(visit);


// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:


var birth = "My birthday year is 1990 <br> ";
var year  = " Data type of my declared variable is number";

document.getElementById("birthyear").innerHTML = birth + year;



// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


var visitor =("<b> John Doe </b> ordered ");
var Product =(" <b> 5 T-shirt(s) </b>");
var Quantity =("on <a> www.xyzClothing.com </a> clothing store");

document.getElementById("mart").innerHTML = visitor + " " + Product + " " + Quantity;





// // CHAPTER: 04 VARIABLE NAMES:LEGAL ILLEGAL






// 1. Declare 3 variables in one statement.



var heading = "<h1>Rules for naming JS variables </h1> <br> "

var variable1 = "Variable names can only contain, number , $";
var variable2 = " and _ for example :";
var variable3 = " $my_1stVariable";

document.write(heading + variable1 + variable2 + variable3)


// 2. Declare 5 legal & 5 illegal variable names.

var text1 = " <br>  \n Variable must begin with a  ";
var legal1 = "letter, ";
var legal2 = " $";
var legal3 = "_ . For example $name,_name or name";

document.write(text1 + legal1 + legal2 + legal3)



// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

var case1 = "<br>  Variable names are case";
var case2 = "sensitive";
document.write (case1 + case2)


var word1 = "<br> variable names should not be JS ";
var word2 = "keyword";
document.write (word1 + word2)






// CHAPTER:05 MATHS EXPRESSION





// 1. Write a program that take two numbers & add them in a
// // new variable. Show the result in your browser.


var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
var num1 = 3;
var num2 = 5;
var Sum = num1 + num2;

document.write(popnumber + Sum);


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.


var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
var num1 = 3;
var num2 = 5;
var Sum = num1 + num2;

document.write(popnumber + Sum);



var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
var num1 = 3;
var num2 = 5;
var Sub = num1 - num2;

document.write(popnumber + Sub);



var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
var num1 = 3;
var num2 = 5;
var mul = num1 * num2;

document.write(popnumber + mul);


var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
var num1 = 3;
var num2 = 5;
var div = num1 / num2;

document.write(popnumber + div);



var popnumber = "<br> <b> Sum of 3 and 5 is </b> \n";
var num1 = 3;
var num2 = 5;
var mod = num1 %  num2;

document.write(popnumber + mod);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value




var a = " <br><br><br> Value after variable declaration is undefines \n";
var b = "<br> inital value: \n 5 <br>";

document.write( a + b ) ;





var i = "value after increment is: \n" ;
var r = 5;
document.write(i + ++r);


var w = "<br>Value after addition is: \n";
var x = 5;
var y = 8;
var z = x + y;
document.write(w + z);




var a = "<br>Value after decrement is : \n";
var b = 13;
 document.write(a + --b );





 var h = "<br>ِThe remaineder is: \n";
 var g = 0;
 document.write(h + g);



//  4. Cost of one movie ticket is 600 PKR. Write a script to
//  store
//  ticket price in a variable & calculate the cost of buying 5
//  tickets
//  to a movie. Example output:


var c = "\n<br>Total cost to buy 5 tickets to a movie is \n";
var t = 5;
var f = 600;
var m = t * f;

document.write(c + m);


// 5. Write a script to display multiplication table of any
// number in your browser. E.g


var n = "<br><br><b>Table of 2</b> <br>";
document.write(n);
        var t =  9;
        for (var a = 1; a <= 10; a++) {

      document.write( "<br>"+ a +"*"+ t + "=" + a*t + "<br>" + "<br>")
}



// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.



function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    document.write(message + "<br>");
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    document.write(message);
} 
cToF(60);
fToC(45);



// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables


var p = "Price of item 1 is ";
var cost1 = 650;
document.write("<br>"+"<br>"+ p + cost1);


var k = "Price of item 2 is";
var cost2 = 650 * 2;
document.write("<br>" + k + cost2);


var b =" Ordered quantity of item 1";
var cost3 = "3";

document.write("<br>" + b + cost3);





var h =" Ordered quantity of item 2";
var cost4 = 3 *2;

document.write("<br>" + h + cost4);



var d ="  Shipping charges \n";
var c = 300;

document.write("<br>" + d + c);





var w = "Total cost of your order is ";
var sum = (cost1 + cost2 + cost3 + cost4);
document.write("<br>" + w + sum);




// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


var mark = "<h1>MARK SHEET</h1>"
var marks1 =" Total marks ";
var n =  980;

document.write("<br>" +"<br>"+mark+ marks1 + n);



var mark2 =" Marks obtained ";
var num =  804;

document.write("<br>" + mark2 + num);


var per = " percentage \n";
var t =( n / num )% 100;
 document.write("<br>" + per + t + "%");


//  9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
//  script to convert the total currency to Pakistani Rupees.
//  Perform all calculations in a single expression.
//  (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//  and 1 Saudi Riyal = 28 Pakistani Rupee)



var heading ="<h1>Currency in PKR</h1>";

var text = "Total Currency in PKR: ";
 var us = 104.80 ;
var d = 10;
var k = d * us; 
 var sau =  28;
 var l = 25;
 var w = l * sau;
 
 var a = k + w ;

 document.write("<br>" + "<br>"+ "<br>"+ heading +text + a )



//  10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:

 var add = 5 + 5;
 var mul = 10 * 10;
 var div = 100 / 2;
var t = add ;
var e = mul ;
var p = div;

  document.write("<br>"+"<br>"+"<br>" +"add \n"+ t +"<br>" +"mul \n"+ e +"<br>"+"div \n"+ p);




  // 1. The Age Calculator: Forgot how old someone is?
  // Calculate it!


var cal = "<h1>Age Calculator</h1>";
  var year = "Current Year: ";
  var d = 2019;

  var birth = "Bith Year: ";
  var y = 1992;

  var age = "Your Age is: ";
  var ans = d - y;
  document.write("<br>"+ cal + year + d +"<br>"+ birth + y +"<br>"+ age + ans);



  // 12. The Geometrizer: Calculate properties of a circle.
  // a. Store a radius into a variable


  var geo = "<h1>The Geometrizer</h1>";
  var rad = "Radius of a circle: ";
  var v = 20 ;
  var cir = "The circumference is: ";
  var p = v * 3.142 * 2;

  var area = "The area is: ";
var l = 3.142 * 400;

document.write("<br>" + geo +"<br>"+ rad + v +"<br>"+ cir + p +"<br>"+ area + l  )



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.


var i = "<h1>The Lifetime Supply Calculator</h1>";
var fav = "Favourite Snack: Chocolate chip";
var current = "Current age: ";
var c = 15;
var es ="Estimated Maximum Age: ";
var b = 65;
var snack =" Amount of snacks per day: ";
var m = 3;
var q = m * b;
var x = "You will need ";
var cho =" chocolate chip to last  you until the ripe old age of 65"; 

document.write("<br>" + i + fav +"<br>" + current + c +"<br>" + es + b + "<br>" +
snack + m +"<br>" + x + q + cho );



// CHAPTER: 06-09 MATHS EXPRESSION


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:





var txt1= "<h1>RESULT</h1>the value of a is:10 ";
document.write("<br>"+txt1);

var txt2 = "the value of ++a is: ";
var f = 1;
var d = "now the value od ++a is: ";
document.write("<br>" +"<br>" +txt2 + f + "<br>" + d + ++f);


var txt2 = "the value of a++ is: ";
var f = 1;
var d = "now the value od a++ is: ";
document.write("<br>" +"<br>" +txt2 + f + "<br>" + d + f++);


var txt2 = "the value of --a is: ";
var f = 1;
var d = "now the value of --a is: ";
document.write("<br>" +"<br>" +txt2 + f + "<br>" + d + --f);

var txt2 = "the value of a-- is: ";
var f = 1;
var d = "now the value of a-- is: ";
document.write("<br>" +"<br>" +txt2 + f + "<br>" + d + f--);



// 2. What will be the output in variables a, b & result after
// execution of the following script:

var a = 2, b = 1;
var result = --a ;
document.write("<br>"+"<br>"+"<br>"+"--a result is: "+result);

var a = 2, b = 1;
var result = --a - --b;
document.write("<br>"+"--a - --b result is: "+result);


var a = 2, b = 1;
var result = --a - --b + ++b;
document.write("<br>"+"--a - --b + ++b result is: "+result);



var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>"+"--a - --b + ++b + b--  result is: "+result);



// 3..Write a program that takes input a name from user &
// greet the user

var name= prompt("Enter your name ");
alert( name +"\n" + "Good Evening");


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


var user= prompt("Enter any table number");
var a =1;
for( var a =1; a<=10; a++){

document.write("<br>" +"<br>" + user + "*" + a + "=" + (user * a)  );

}


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var heading = "<h1>SUBJECT</h1>";
var sub1 = prompt("Enter first subject name");
var sub2 = prompt("Enter second subject name");
var sub3 = prompt("Enter third subject name");


document.write("<br>" + heading + sub1 +"<br>"+ sub2 +"<br>"+ sub3);


var heading = "<h1>TOTAL MARKS</h1>";
var sub1 = ("Total marks: ");
var sub2 = ("Total marks: ");
var sub3 = ("Total marks: ");
var n = 650;


document.write("<br>" + heading + sub1 +n+"<br>"+ sub2 +n +"<br>"+ sub3 + n);



var heading = "<h1>OBTAINED MARKS</h1>";
var sub4 = prompt("obtained marks of first subject: ");
var sub5 = prompt("obtained marks of first subject: ");
var sub6 = prompt("obtained marks of first subject: ");

document.write("<br>" + heading + sub4 +"<br>"+ sub5  +"<br>"+ sub6 );




var heading ="<h1>PERCENTAGE</h1>";
var per1 = (n/sub4) % 100;
var per2= (n/sub5) % 100;
var per3 = (n/sub6) % 100;


document.write("<br>" +heading)

document.write(per1+" %"+ "<br>");

document.write(per2+ "%"+ "<br>");

document.write(per3+ "%"+ "<br>");





// CHAPTER:09-1 USER INPUT AND CONDITIONAL STATMENT

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


var city =prompt("Enter your city name");
if ( city =="karachi"){

  document.write("<h1>Welcome to city lights</h1>")
}

else {
document.write("other city")

}


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


var gender =prompt("Enter your gender");
if(gender == "female"){
document.write("<h1>Good morning Ma'm</h1>")


}

else {
  document.write("<h1>Good morning Sir</h1>")
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


var color =prompt("Enter color of traffic signal");
if(color === "red"){
  document.write("<br>" + "<h2>must stop</h2>")
}

else if (color === "Yellow"){
  document.write("<br>" + "<h2>reday to move</h2>")
}
else if(color === "green"){
  document.write("<br>" + "<h2>move now</h2>")
}

else {

  document.write("invalid try again")
}



// 4. Write a program to take input remaining fuel in car (in
//   litres) from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car”
  

var fuel = prompt("Enter remaining fuel in the car(in litres)");

if (fuel < 0.25 ){
  document.write("<br>"+"Please refill the fuel in your car")
}

else{
  document.write("enough")
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");


}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
  alert("car is smaller than cat");
  }


//   6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var heading = "<h1>MARK SHEET</h1>"
var mark7 = prompt("Enter first sub marks obtained");
var mark8 =prompt("Enter second sub marks obtained");
var mark9 = prompt("Enter third sub marks obtained");
var ob = mark7+ mark8 + mark9;
document.write("<br>"+heading +"Marks obtained: " + ob +"<br>");
var total = 300;
document.write("<br>" + "Total marks" + total);
var per = ob/total % 100;
document.write("<br>" + "percentage" + per);

var per = ob/total % 100;
if ( per > 80){
  document.write("A-one")
}

else if (per > 70){
  document.write("A")
}
 else if (per > 60 ){
   document.write("B")
 }
else if (per < 60 ){
  document.write("fail")
}




// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.



var secret = prompt("Guess the secret number");
if (secret == 4){

  document.write("<br>" + "Bingo!")
}

else if (secret == 3) {
  document.write("<br>" +" “Close enough to the correct answer”")
}

else{
  document.write("<br>" + "Wrong Answer")
}



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.



var value_number = Number(prompt("Enter a Number : "));
 
if(value_number % 3 == 0)
{
document.write("<font face='arial' size='4'> ");
			document.write("<br>"+"The number " +value_number+
			" is divisible by 3. </font>");
}
else
{
document.write("<font face='arial' size='4'> ");
			document.write("<br>"+"The number " + value_number+ 
			" is not divisible by 3. </font>");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num_user= prompt("Enter any number to check even or odd");
if (num_user % 2 === 0)
{
  document.write("<font face='arial' size='4'> ")
document.write("<br>"+ num_user  + " " + "is even  </font>")
}
else {
  document.write("<font face='arial' size='4'> ")
  document.write("<br>"+ num_user + " " + "is odd  </font>")
}



// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


var T = prompt("Enter temperature");
if (T > 40 ){
  document.write("<br>"+"It is too hot outside.")
}

else if (T > 30){
  document.write("<br>"+"The Weather today is normal.")
}
else if(T > 20){
  document.write("<br>"+"Today's Weather is cool.")
}

else if(T > 10){
  document.write("<br>"+"OMG! Today's Weather is so cool")
}

else {
  document.write("<br>"+"Please enter corrent temperature")
}



// 1. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


var first_num= prompt("Enter first number");
var Operation = prompt("Enter operator");
var second_num= prompt("Enter second number");

console.log(first_num + Operation + second_num);
if (Operation === "+"){
alert( (+first_num)  + (+second_num) )

}

else if (Operation === "-"){
  alert(first_num  - second_num)
  
  }

else if (Operation === "*"){
  alert(first_num  * second_num)
  
  }

  else if (Operation === "/"){
    alert(first_num  / second_num)
    
    }

    else if (Operation === "%"){
      alert(first_num  / second_num * 100 + "%")
      
      }
    





      // CHAPTER: 12 - 13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION





//       1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


var ch = prompt("Enter any character");


if (ch>=65 && ch<=90){
    alert("Character is a capital letter")
}
	else if (ch>=97 && ch<=122)
  {
    alert("Character is a small letter")
  }
	else if (ch>=48 && ch<=57){
  alert("Character is a digit")
}
	else if ((ch>0 && ch<=47)||(ch>=58 && ch<=64)||
               (ch>=91 && ch<=96)||(ch>=123 && ch<=127)){
            alert("Character is a special symbol")

  }



              //  2. Write a JavaScript program that accept two integers and
              //  display the larger. Also show if the two integers are equal.


              var input1 = prompt("Enter first number:");
              var input2 = prompt("Enter second number:");

if (input1 == input2) {
    console.log(input1 + " is equal to " + input2);
} else if (input1 > input2) {
    console.log(input1 + " is larger than " + input2);
} else {
    console.log(input1 + " is lesser than " + input2);
}


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


var inp =prompt("Enter any number");

if (inp >= 0){
console.log(inp + "is positive")

}
else{
  console.log(inp + "is negative")
} 


// 4. Write a program that takes a character (i.e. string of
//   length 1) and returns true if it is a vowel, false otherwise
  

var char = prompt("Enter any character");
if (char  === "a"){
  console.log(char +" "+"vowel")
}
else if (char  === "e"){
  console.log(char +" "+"vowel")
}

else if (char  === "i"){
  console.log(char +" "+"vowel")
}
else if (char  === "o"){
  console.log(char +" "+"vowel")
}

else if (char  === "u"){
  console.log(char +" "+"vowel")
}

else {
  console.log(char +" " +"is not vowel (false)")
}



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise



var pswd = prompt("Enter you pasword")
if(pswd === "meowmeow"){
  console.log("Correct pasword");
}
else{
  console.log("incorrect pasword");
}



// 6. This if/else statement does not work. Try to fix it:


var greeting;
var hour = 13;
if (hour < 18) {
alert ("Good day");
}
else{
alert("Good evening");
}



// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements



var time = prompt("Enter time");
if(time >= 0000 && time < 1200){
console.log("Good Morning");
}
else if (time >= 1200 && time < 1700){
  console.log("Good afternoon");
}
else if (time >= 1700 && time < 2100){
  console.log("Good evening");
}
 else if (time >=2100 && time <= 2359){
    console.log("Good night");
 }


//  CHAPTER: 14-16 ARRAYS

// 1. Declare an empty array using JS literal notation to store
// student names in future.


var student_name=[];

var fruits = ["ramsha", "omamima","abad","uniba","maha"];
document.write("<br>"+"<br>"+fruits);


// 2. Declare an empty array using JS object notation to store
// student names in future.


var student_name=[];

var fruits = ["ramsha", "omamima","abad","uniba","maha"];
document.write("<br>"+"<br>"+fruits);



// 3. Declare and initialize a strings array.


var color = ["red", "green", "blue", "yellow", "white"];
document.write("<br>"+"<br>"+color);

// 4. Declare and initialize a numbers array.
var points = ["40", "100", "1", "5", "25", "10"];
console.log(points);


// 5. Declare and initialize a boolean array.
var boolean =["true","false"]
console.log("<br>"+"<br>"+boolean);

// 6. Declare and initialize a mixed array.
var family = ["Meow", "momo", ["bella", "maggiee", "john"]];
console.log(family);


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var heading =  "Qualification";
var qua= ["SSC", "<br>" , "HSC" , "<br>" , "BCS" , "<br>" , "BS" , "<br>", "BCOM" , "<br>" , "MS"," <br>","M.Phil"," <br>","PhD"];

document.write("<br>"+ heading +"<br>"+ qua);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


var student= ["ramsha","meow","jenny"];
var score = ["320","230","480"];
var t = 500/320 * 100;
var o =500/230 * 100;
var q =500/480 *100;
document.write("<br>"+"score of ramsha is"+" " + score[0] +" "+"percentage:"+" "+ t+ "%");
document.write("<br>"+"score ofmeow is"+" " + score[1] +" "+"percentage:"+" "+ o+ "%");
document.write("<br>"+"score of jenny is"+" " + score[2] +" "+"percentage:"+" "+q + "%");



// 9. Initialize an array with color names. Display the array
// elements in your browser.

var color= ["red","green","blue","brown","grey","black"];
document.write("<br>"+color);

var choice = prompt("Want any color?");
color.unshift(choice);
document.write("<br>"+color);

color.unshift("pink","light blue");
document.write("<br>"+color);

color.shift("red");
document.write("<br>"+color);

color.pop();
document.write("<br>"+color);

var wish=prompt("Add changes ?");

color.unshift(wish);
document.write("<br>"+color);

color.shift(wish);
document.write("<br>"+color);

color.pop();
document.write("<br>"+color);



// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


var arr = ["<br>"+"Score of students:"+" "+"320", "230", "480", "120"]

document.write(arr);

var arr = ["<br>"+"Ordered Score of students:"+" "+"320", "230", "480", "120"]
document.write(arr.sort());



// 1. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cit ="<br>Cities list";
var list =["Karachi"+" "+ "lahore"+" "+"islamabad"+" "+"quetta"+" "+"peshawar"];
document.write(cit+"<br>"+ list);

var sel = "Selected cities list";
let selectcities=['Karachi','Quetta']
document.write("<br>"+sel +"<br>"+selectcities);


// 12. Write a program to create a single string from the
// below mentioned array:


var a = ["this", "is", "my","cat"];
document.write(a.join()); 


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


var val = "Device";
var seq = ["keyboard"+"mouse"+"printer"+"monitor"];
document.write("<br>"+val+"<br>" + seq[0],seq[1],seq[2],seq[3]);





// CHAPTER:17-20 ARRAY AND LOOP


// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var arr1 = ["ABC", 24, 18000];
var arr2 = ["EFG", 30, 30000];
var arr3 = ["IJK", 28, 41000];
var arr4 = ["EFG", 31, 28000];
var arr5 = ["EFG", 29, 35000];
var salary = [arr1, arr2, arr3, arr4, arr5];  
for(var i = 0; i < salary.length; i++) { 
    document.write(salary[i] + "<br>"); 
}



// 2. Declare and initialize a multidimensional array
// representing the following matrix:


var arr1 = [0, 1, 2, 3];
var arr2 = [1, 0 , 1 ,2];
var arr3 = [2, 1 , 0, 1];
var salary = [arr1, arr2, arr3];  
for(var i = 0; i < salary.length; i++) { 
    document.write(salary[i] + "<br>"); 
}


// 3. Write a program to print numeric counting from 1 to 10.

var arr_1 =[1];
var arr_2 =[2];
var arr_3 =[3];
var arr_4 =[4];
var arr_5 =[5];
var arr_6 =[6];
var arr_7 =[7];
var arr_8 =[8];
var arr_9 =[9];
var arr_10 =[10];

var salary = [arr_1,arr_2,arr_4,arr_5,arr_6,arr_7,arr_8,arr_9,arr_10];  
for(var i = 0; i < salary.length; i++) { 
    document.write(salary[i] + "<br>"); 
}




// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.



var user= prompt("Enter any table number");
var a =1;
for( var a =1; a<=15; a++){

document.write("<br>" +"<br>" + user + "*" + a + "=" + (user * a)  );

}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits1= ["apple"];
var fruits2=["banana"];
var fruits3=["mango"];
var fruits4=["orange"];
var fruits5=["strawberry"];

document.write("<br>"+fruits1+fruits2+fruits3+fruits4+fruits5);


// 6. Generate the following series in your browser. See
// example output.


var a =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var b=[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var c=[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var d =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
 var e =[2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

 document.write(a,b,c,d,e);





7.//  Write a program to enable “search by user input” in an
// array.

var inputArray = [];
var size = 5; 

for(var i=0; i<size; i++) {
	

	inputArray[i] = prompt('Enter Element ' + (i+1));
}


console.log(inputArray);


// 8. Write a program to identify the largest number in the
// given array.


var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array>largest) {
        var largest=array[i];
    }
}

console.log(largest);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

public class SmallestInArrayExample{  
  public static int getSmallest(int[] a, int total){  
  int temp;  
  for (int i = 0; i < total; i++)   
          {  
              for (int j = i + 1; j < total; j++)   
              {  
                  if (a[i] > a[j])   
                  {  
                      temp = a[i];  
                      a[i] = a[j];  
                      a[j] = temp;  
                  }  
              }  
          }  
         return a[0];  
  }  
  public static void main(String args[]){  
  int a[]={1,2,5,6,3,2};  
  int b[]={44,66,99,77,33,22,55};  
  System.out.println("Smallest: "+getSmallest(a,6));  
  System.out.println("Smallest: "+getSmallest(b,7));  
  }}  






















