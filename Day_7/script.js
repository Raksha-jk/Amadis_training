const message=document.getElementById("mess");
console.log(message.innerText);
const fruit=document.getElementsByClassName("fruits");
console.log(fruit[0].innerText);
const fruits=document.querySelector(".fruits");
console.log(fruits.innerText);
fruits.style.color="red";
const allFruits=document.querySelectorAll(".fruits");
allFruits[0].innerText="Kiwi";
const list=document.querySelector(".list");
list.innerHTML="<div class='fruits'>banana</div>";
function hi(){
    alert("Welcome");
}
const btn2=document.getElementById("btn2");
btn2.addEventListener("click",addEl);
btn2.addEventListener("mouseover",edEl);
btn2.addEventListener("mouseout",mout)
function mout(){
    const pEl=document.createElement("p");
    pEl.innerText="MouseOut";
    document.getElementById("demo").appendChild(pEl);
}
function edEl(){
    const pEl=document.createElement("p");
    pEl.innerText="MouseOvered";
    document.getElementById("demo").appendChild(pEl);
}
function addEl(){
    const pEl=document.createElement("p");
    pEl.innerText="I am Clicked!";
    document.getElementById("demo").appendChild(pEl);

}
//createAttribute
function att(){
    const head=document.createAttribute("class");
    head.value="demoClass";
    document.getElementsByTagName("h2")[0].setAttributeNode(head);
}
//insertBefore
function insert(){
    const name=document.getElementById("detail").value;
    const list=document.getElementById("myList");
    const newNode=document.createElement("li");
    newNode.innerText=name;
    list.insertBefore(newNode,list.children[0]);
}
function insertap(){
    const name=document.getElementById("detail").value;
    const list=document.getElementById("myList");
    const newNode=document.createElement("li");
    newNode.innerText=name;
    list.appendChild(newNode);
}
//remove
function rem(){
    const div=document.getElementById("div");
    div.remove()
}
function rem2(){
    const div=document.getElementById("div");
    div.removeChild(div.firstElementChild)
}
const par=document.getElementById("par");
par.addEventListener("click",(e)=> par.classList.toggle("myStyle"));