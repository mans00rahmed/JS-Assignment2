// ========== Chapter 21-25 ========
// ========== task1 =============
var firstname=prompt("enter first name")
var lastname=prompt("enter last name")
var fullName=firstname+lastname
alert(fullName)

// ========== Task 2 =============
var phone=prompt("enter phone")
alert("Length of string :"+phone.length)

// ========== Task 3 =============
var str=prompt("enter string")
for (i = 0; i <= str.length; i++){
       if (str[i]==='n') {
           alert('index of n is :' + i)           
       }
}


string reverse-->// //var split = str.split("").reverse().join("")

// ========== Task 4 =============
var str = "Hello World"
var str = str.split("").reverse().join("")
for (i = 0; i <= str.length; i++) {
    if (str[i] == 'l') {
        var total=str.length-i-1
        alert('index of last l is :' + total)
        break
    }
}

// ========== Task 5 ============
var str='Pakistani';
alert(str[3]);

//========== TAsk 6 ============
var firstname=prompt("enter first name")
var lastname=prompt("enter last name")
alert(firstname.concat(lastname))

// =========== Task 7 ===========
var city ="Hyderabad"
alert(city.replace('Hyder','Islam'))

// =======  Task 8 ==========
var text = "Ali and Sami are best friends. They play cricket and football together."
var text=text.split(" ")

for (var i = 0; i < text.length; i++) {
    if (text[i] == "and"){
        text[i]="&"
    }
}
console.log(text)

// =============Task 9===============
var value='472'
document.write("value :"+value+"<br>")
document.write("type :"+typeof(value)+"<br>")
value=Number(value)
document.write("value :"+value+"<br>")
document.write("type :"+typeof(value)+"<br>")

//========== Task 10 ============
var inp=prompt("input")
alert(inp.toUpperCase())

// =========== Task 11 ===========
var inp=prompt("input")
var f=inp.slice(0,1)
f=(f.toUpperCase())
alert(inp.replace('j',f))

// ========= Task 12 ==========
var num=35.36
num=String(num)
alert(num.replace(".",""))

//======== Task 13 ==========
var userName = prompt("entere username");
var userName = userName.split("")
for (let i = 0; i < userName.length; i++) {
    if (userName[i]=="@" || userName[i]=="!" || userName[i]=="." || userName[i]==",") {
        var flag=false
    }
}
if (flag===false){
    alert("enter valid username")
}
else{
    alert("ok fine")
}

// ========== Task 14 ============
var input = prompt("enter item name");
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
input = input.toLocaleLowerCase()
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === input) {
        var flag=false
    }
}
if (flag === false) {
    alert(input + " found in bakery")
}
else {
    alert(input + " not found in bakery")
}  

========== Task 15 ============
var pass = prompt("enter password")
pass = pass.split("")
if (pass.length < 6) {
    alert("enter valid password")
}
else if (pass[0] == Number) {
    alert("enter valid password")
}
for (let i = 0; i < pass.length; i++) {
    if (pass[i] == '!' || pass[i] == '@' || pass[i] == '#' || pass[i] == '$' || pass[i] == '%' || pass[i] == '^' || pass[i] == '&' || pass[i] == '*' || pass[i] == '(' || pass[i] == ')')
        alert("invalid password")
}

// ========== Task 16 ============
var university = "University of Karachi";
university=university.split("")
for (let i = 0; i < university.length; i++) {
    document.write(university[i]+"<br>")
}

// ========== Task 17 ============
var name="Paksitan"
var arr=[]
name=name.split("")
for (let i = 0; i < name.length; i++) {
    arr.push(name[i])
}
arr=arr.reverse()
alert("Last index value is "+arr[0])

// ========== Task 18 ============
var text = "The quick brown fox jumps over the lazy dog"
text=text.toLowerCase()
var text=text.split(" ")
var count=0
for (var i = 0; i < text.length; i++) {
    if (text[i] == "the"){
        count++
    }
}
document.write("There are "+count+" occurances of word 'the'")

// ========== Chapter 26-30 ============
//=========== Task 1 =========
var num=+prompt("enter number")
document.write(num+'<br>')
document.write(Math.round (num)+'<br>')
document.write(Math.floor(num)+'<br>')
document.write(Math.ceil(num)+'<br>')

// ============ Task 2 ===========
var num=+prompt("enter number")
document.write(num+'<br>')
document.write(Math.round (num)+'<br>')
document.write(Math.floor(num)+'<br>')
document.write(Math.ceil(num)+'<br>')

// ============ Task 3 ===========
var num = +prompt("enter number")
alert(Math.abs(num))

// ============ Task 4 ===========
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random Dice Values: "+numberOfStars)

// ============ Task 5 ===========
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);
if (numberOfStars == 1) {
    alert("Head")    
}
else{
    alert("Tail")
}

// ============ Task 6 ============
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math.floor(improvedNum);
alert("random number between "+numberOfStars)

// ============ Task 7 ============
var input=prompt("enter weight")
document.write(JSON.parse(input))

// ============ Task 8 ============
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 10) + 1;
var secret = Math.floor(improvedNum);
var inp=+prompt("enter number");
if (inp==secret){
    alert("Congratulations !")
}
else{
    alert("Better Luck next time")
}

// ========== Chapter 26-30 ============
//=========== Task 1 =========
var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
alert(n)

//=========== Task 2 =========
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];
alert(n)

//=========== Task 3 =========
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
if(n=="Saturday"||n=="Sunday"){
    alert("it's Fun Day!")
}

//=========== Task 5 =========
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd
if (today<16){
    alert("First fifteen days")
}
else{
    alert("Last fifteen days")
}

//=========== Task 6 =========
var today = new Date();
var miliseconds = new Date().getTime();
var minute = new Date().getTime() / 60000;
document.write("Current Date :"+today+'<br>')
document.write("MiliSeconds :"+miliseconds+'<br>')
document.write("Minutes :"+minute+'<br>')

// ========== Task 7 ==========
var hours = new Date().getHours();
if (hours<=12) {
    alert("it is am")
}
else{
    alert("it is pm")
}

// =========== Task 8 ===========
var d = new Date('Dec 31, 2020 00:00:00');
d.setDate(31);
alert(d)

// ============ Task 9 ==============
var dateFirst = new Date("11/25/2019"); //suppose ramazan ths year
var dateSecond = new Date("6/20/2020"); //current date
var timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
document.write(diffDays);

=============== Task 10 ============
var date1=new Date("Jan 01 2015 11:12:15")
var date2=new Date()
var timeDiff=date2.getTime()-date1.getTime()
console.log(timeDiff/1000+" seconds")

================= Task 11 ================
============ Task1 12 =============
var date=new Date('1920');
alert(date)

=========== Task 13 ================
var age=prompt("enter age")
var date=new Date();
alert(date.getFullYear()-age)

============= Task 14 ==============
var customerName = "ABC"
var currentMonth = 12
var numberOfUnits = 114
var charge = 16
var date = new Date()
var date = date.getDate()
var netAmount = numberOfUnits * charge
var lateCharge = 1000
var grossAmount = netAmount + lateCharge
if (date <= 15) {
    alert(netAmount)
}
else {
    alert(grossAmount)
}

============== Chapter 35-38 ===========
========== Task1 ==========
function date() {
    var d = new Date();
    alert(d)
}
date();
============ Task 2 ===========
function greet(fname,lname) {
    var fname=prompt("enter first name")
    var lname=prompt("enter last name")
    alert("Hello!"+fname+lname)    
}
greet()

// ============= Task 3 ===========
function sum() {

    var num1 = +prompt("enter 1st number")
    var num2 = +prompt("enter 2nd number")
    var total = num1+num2
    alert(total)
}
sum()

// ============= Task 4 ===========
function calculator(num1,num2,operator){
    if (operator=='+'){
        document.write(num1+num2)
    }        
    else if(operator=="-"){
        document.write(num1-num2)
    }
    else if(operator=="*"){
        document.write(num1*num2)
    }
    else if(operator=="/"){
        document.write(num1/num2)
    }
}
num1=prompt("enter number 1")
num2=prompt("enter number 1")
operator=prompt("enter operator")
calculator(num1,num2,operator)

// ============= Task 5 ===========
function square(n) {
    alert(n*n)    
}
n=+prompt("enter number")
square(n)

// ============= Task 6 ===========
function factorial(n) {
    var f = 1
    for (i = n; i >= 2; i--) {
        f=f*i
    }
    document.write(f)
}
factorial(4)

// ============= Task 7 ===========
var start = +prompt('enter start point')
var end = +prompt('enter ending point')
function count(start,end){
    for(i=start;i<=end;i++){
        document.write(i+'<br>')
    }
}
count(start,end)

// ============= Task 8 =============
function calculateHypotenuse(base,perp) {

    function square(n) {
        return (n * n)
    }
    hyp = Math.sqrt(square(base) + square(perp))
    alert(hyp)
}

calculateHypotenuse(2,2)

// ============= Task 9 ============
var a,w,h;
function area(w,h) {
    a=w*h
    return(a)
}
area(2,2)
w=+prompt("enter width")
h=+prompt("enter height")
area(w,h)
alert(a)

//=============== Task 10 ============
function pallindrome(word) {
    var w = word.split('')
    var wr = w.reverse()
    if (w == wr) {
        alert("word is pallindrome")
    }
    else {
        alert("word is not pallindrome")
    }
}
// Driver Code
var word = prompt("enter word")
pallindrome(word)

//================== Task 11 ==============
function caps(word) {
    var w = word.split(' ')
    for (let i = 0; i <= w.length - 1; i++) {
        var q = w[i]
        var e = q.split('')
        var r = (e[0].toUpperCase())
        document.write(r + q.slice(1) + " ")
    }
}
// // Driver Code
var word = prompt("enter sentence");
caps(word)

//================== Task 12 ==============
function longestWord() {
    var sent = prompt("Enter Sentence")
    var brkSent = sent.split(' ')
    for (let i = 0; i < brkSent.length - 1; i++) {
        if (brkSent[i].length < brkSent[i + 1].length) {
            var a = (brkSent[i + 1])
        }
        else {
            var a = brkSent[i]
        }
    }
    alert(a)
}
// Driver Code
longestWord()

//================== Task 13 ==============
function count(sent, word) {
    var count = 0
    for (let i = 0; i < sent.length; i++) {
        if (sent[i] == word) {
            count++
        }
    }
    document.write(count)
}
// //Driver Code
var sent = prompt("enter sentence")
var word = prompt("enter word to be searched")
count(sent,word)

//================== Task 14 ==============
// The Geometrizer
function calcCircumference(r) {
    var circ=2*3.142*r
    document.write(circ)
}

function calcArea(radius) {
    var area=3.142*radius*radius
    document.write(area)    
}
calcCircumference(1)
calcArea(1)
