const path = window.location.pathname;
if(path.includes("index.html")){
    const adCart=document.querySelectorAll(".crt-btn");
    adCart.forEach(btn => 
    btn.addEventListener("click", () => {
        addlocal(btn);
    }));
    async function getBookData(par) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const item = {
                    image: par.querySelector(".book-img").getAttribute("src"),
                    name: par.querySelector(".book-name").innerText,
                    price: parseFloat(par.querySelector(".book-price").innerText.replace("Price: ₹", ""))
                };
                resolve(item);
            }, 300);
        });
    }
    async function addlocal(btn){
        const par=btn.parentElement;
        const item=await getBookData(par);
        
        let carts=JSON.parse(localStorage.getItem("cartItem"))||[];
        let exists=carts.find(b=>b.name===item.name)
        if(!exists){
            carts.push(item);
        }
        localStorage.setItem("cartItem",JSON.stringify(carts));
    }
}
if(path.includes("cart.html")){
    addCart();
    function addCart(){
        const cartItem = JSON.parse(localStorage.getItem("cartItem"));
        const cart=document.querySelector(".cart");
        cart.innerHTML="";
        cartItem.forEach(item=>{
        cart.innerHTML += `
            <div class="cart-items">
                <img src="${item.image}" width="100" height="100">
                <span class="item-name">${item.name}</span>
                <span class="item-price">₹${item.price}</span>
                <input type="number" class="item-quantity" value="1" min="1">
                <button class="del-btn">Remove</button>
            </div>
            <hr>
        `;
        });
        addTotal();
        document.querySelectorAll(".item-quantity").forEach((q)=>{q.addEventListener("input",addTotal)});
        const remBtn=document.querySelectorAll(".del-btn");
        remBtn.forEach(rem=>{rem.addEventListener("click", (e) => {
            e.target.parentElement.remove();
            const nameToRemove = e.target.parentElement.querySelector(".item-name").innerText;
            let cartItems = JSON.parse(localStorage.getItem("cartItem")) || [];
            cartItems = cartItems.filter(item => item.name !== nameToRemove);
            localStorage.setItem("cartItem", JSON.stringify(cartItems));
            addTotal();});});
    }
    function addTotal(){
        const cartItems=document.querySelectorAll(".cart-items");
        const tot=document.querySelector("#total");
        let total=0;
        cartItems.forEach(element => {
            const itQuant=parseFloat(element.querySelector(".item-quantity").value);
            const itPrice=parseFloat(element.querySelector(".item-price").innerText.replace("₹",""));
            total+=itQuant*itPrice;
        });
        tot.innerText="Total : ₹"+total;
        console.log(total);
    }
}