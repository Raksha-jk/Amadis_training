let heading=localStorage.setItem("name","Raksha");
let age=localStorage.setItem("age","21")
let name=localStorage.getItem("name");
document.getElementById("fullName").innerText=name;
localStorage.removeItem("age");
localStorage.clear();

//sessionstorage

heading=sessionStorage.setItem("name","Raksha");
age=sessionStorage.setItem("age","21")
name=sessionStorage.getItem("name");
document.getElementById("fullName").innerText=name;
sessionStorage.removeItem("age");
sessionStorage.clear();

//Input

function click1(){
    console.log("start:::")
    const name =document.getElementById("input").value;
    console.log(name);
    localStorage.setItem("name",name);
}

//Spread Operator
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr=[...arr1,...arr2];
console.log(arr);

console.log((null===undefined)?true:false);
arr1.forEach((num,index) => {
    console.log(index,num);
});
