/*Chapter1*/


/*Write a script to greet your website visitor using JS alert
box*/
alert("Welcome to our website!"); 

/* Write a script to display following message on your web*/
alert("Error! Please enter a valid password."); 


/*Write a script to display following message on your web*/
  alert("Welcome to JS Land...\nHappy Coding!");   
  
  
  /*Write a script to display following messages in sequence*/
  alert("Welcome to JS Land...");
alert("Happy Coding!\nPrevent this page from creating additional dialogs.");


/*Generate the following message through browser’s
developer console:*/
console.log("Hello... I can run JS through my web browser's console");







/*CHAPTER 2*/
/*Declare a variable called username*/
var username;

/*Declare a variable called myName & assign to it a string
that represents your Full Name.*/
var myName = "Your Full Name";


/*Write script to
a) Declare a JS variable, titled message.
b) Assign “Hello World” to variable message
c) Display the message in alert box.*/
var message = "Hello World";
alert(message);




/*Write a script to save student’s bio data in JS variables and
show the data in alert boxes.*/
var name = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development"; 
alert(name); alert(age); alert(course);



/*Write a script to display the following alert using one JS
variable:*/
var p = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(p);


 /*Declare a variable called email and assign to it a string that
represents your Email Address(e.g. example@example.com).
Show the blow mentioned message in an alert box*/
 var email = "example@example.com"; 
alert("My email address is " + email);  




/*CHAPTER 3*/


/*Declare a variable called age & assign to it your age. Show
your age in an alert box.*/
var age = 15; 
alert("I am " + age + " years old"); 



/*Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.*/
var visits = 14; 
alert("You have visited this site " + visits + " times"); 


/*Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:*/
var birthYear = 1990; 
document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number"); 




/*A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.*/
var visitorName = "John Doe"; 
var productTitle = "T-shirt(s)"; 
var quantity = 5; 
document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");



/*Declare 3 variables in one statement.*/
var var1, var2, var3;

/*Declare 5 legal & 5 illegal variable names.*/
Legal: myVar, _name, $price, user1, firstName 


/*Illegal: 1stVar, my-var, var, hello world, @mail*/


/*Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________*/
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain numbers, $, and _. For example: $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords"); 

/*chapter5*/

/*Write a program that take two numbers & add them in a
new variable. Show the result in your browser.*/
var num1 = 3, num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum); 


/*Repeat task1 for subtraction, multiplication, division &
modulus*/
var num3 = 3, num4 = 5;
var sub = num1 - num2;
document.write("Subtraction of " + num3 + " and " + num4 + " is " + sub); 
var num5 = 3, num6 = 5;
var mult = num1 * num2;
document.write("multiplication  of " + num5 + " and " + num6 + " is " + mult); 

/*Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
MATH EXPRESSIONS | JAVASCRIPT
Page 2 of 9
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.*/
var val; 
document.write("Value after variable declaration is " + val + "<br>"); 
val = 5; 
document.write("Initial value: " + val + "<br>"); 
val++; 
document.write("Value after increment is: " + val + "<br>"); 
val += 7; 
document.write("Value after addition is: " + val + "<br>"); 
val--; 
document.write("Value after decrement is: " + val + "<br>"); 
document.write("The remainder is: " + (val % 3));


/*Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output:*/
var ticketPrice = 600; 
document.write("Total cost to buy 5 tickets to a movie is " + (ticketPrice * 5) + "PKR"); 


/*Write a script to display multiplication table of any
number in your browser. E.g*/






/*The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.*/
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32; 
document.write(celsius + "°C is " + fahrenheit + "°F<br>"); 



/*Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
MATH EXPRESSIONS | JAVASCRIPT
Page 5 of 9
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser*/
// a. Price of item 1
var priceItem1 = 650; 

// b. Price of item 2
var priceItem2 = 100; 

// c. Ordered quantity of item 1
var quantityItem1 = 3; 

// d. Ordered Quantity of item 2
var quantityItem2 = 7; 

// e. Shipping charges
var shippingCharges = 100; 

// Compute the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Show the receipt in the browser
document.write("<h1>Shopping Cart</h1>");
document.write("<p>Price of item 1 is " + priceItem1 + "</p>");
document.write("<p>Quantity of item 1 is " + quantityItem1 + "</p>");
document.write("<p>Price of item 2 is " + priceItem2 + "</p>");
document.write("<p>Quantity of item 2 is " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges " + shippingCharges + "</p>");
document.write("<br>");
document.write("<h3>Total cost of your order is " + totalCost + "</h3>");

/*Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser*/
// 1. Store total marks & marks obtained in variables
var totalMarks = 980;
var marksObtained = 804;

// 2. Compute the percentage
// Formula: (Marks Obtained / Total Marks) * 100
var percentage = (marksObtained / totalMarks) * 100;

// 3. Show the result in your browser
document.write("<h1>Marks Sheet</h1>");
document.write("<p>Total marks: " + totalMarks + "</p>");
document.write("<p>Marks obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");



/*Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee)*/
// Perform all calculations in a single expression
var totalPKR = (10 * 104.80) + (25 * 28);

// Show the result in the browser
document.write("<h1>Currency in PKR</h1>");
document.write("<p>Total Currency in PKR: " + totalPKR + "</p>");

/*Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression*/
let num = 4;

let result = ((num + 5) * 10) / 2;

console.log(result);


/*The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”*/
// a. Store the current year
let currentYear = 2026;

// b. Store the birth year
let birthYear = 2003;

// c. Calculate 2 possible ages
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

// Output the result
console.log("They are either " + age2 + " or " + age1 + " years old");


/*The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
Page 8 of 9
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/
// a. Store radius
let radius = 7;

// value of π
let pi = 3.142;

// b. Calculate circumference
let circumference = 2 * pi * radius;
console.log("The circumference is " + circumference);

// c. Calculate area
let area = pi * radius * radius;
console.log("The area is " + area);


/*The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will ne*/
// a. Favorite snack
let favoriteSnack = "chocolate biscuits";

// b. Current age
let currentAge = 22;

// c. Maximum age
let maxAge = 80;

// d. Amount per day
let snacksPerDay = 3;

// e. Calculate total snacks for lifetime
let yearsRemaining = maxAge - currentAge;
let totalSnacks = yearsRemaining * 365 * snacksPerDay;

// Output result
console.log(
  "You will need " + totalSnacks + " " + favoriteSnack +
  " to last you until the ripe old age of " + maxAge
);







