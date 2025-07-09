//String-slice
let text="Hello, World!";
let text2="Hello, World and World";
console.log(text.slice(0,5));
console.log(text.slice(1,5));
console.log(text.slice(5));
console.log(text.slice(-5,-1));
//String-substring
console.log(text.substring(0,5));
console.log(text.substring(1,5));
console.log(text.substring(5));
//String-replace
console.log(text.replace("World", "JavaScript"));
console.log(text2.replace("World", "JavaScript"));
console.log(text2.replace(/World/g, "JavaScript"));
//String-replaceAll
console.log(text2.replaceAll("World", "JavaScript"));
//String-split
console.log(text.split(","));
console.log(text.split(" "));
console.log(text.split("o"));
//Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits);
console.log(typeof fruits);
console.log(fruits.length);
console.log(fruits.sort());
fruits.push("Kiwi");
console.log(fruits);
console.log(fruits.pop());
console.log(fruits.push("Kiwi"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Kiwi"));
console.log(fruits);
fruits[0]="apple";
console.log(fruits);
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
fruits.forEach(function(fruit, index){
    console.log(fruit, index);
});
for(const fruit in fruits){
    console.log(fruit);
}
//while loop
let a=0;
while(a<=10){
    console.log(a);
    a++;
}
let b=0;
while(b<=10){
    b++;
    console.log(b);
}
let c=0;
do{
    console.log(c);
    c++;
}while(c<=10);
let d=0;
do{
    d++;
    console.log(d);
}while(d<=10);
//if-else
let age=19;
if (age>=18){
    console.log("You are an adult");
}
else{
    console.log("You are a minor");
}
//switch
let day=3;
switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}