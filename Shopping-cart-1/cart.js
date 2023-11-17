let lable = document.getElementById("label")
let Shoppingcart = document.getElementById("shopping-cart")
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = ()=>{
    let cartIcon = document.getElementById("cartamount");
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)

}
calculation();

let generateCartItems = ()=>{ 
if(basket.length !== 0){
    return (Shoppingcart.innerHTML = basket.map((x)=>{
        let {id,item}=x;
       // console.log(id)
        let search = shopItemsData.find((shopItemsData) => shopItemsData.id == id ) ;
    
        //console.log(search)
        return `
        <div class="cart-item">
        <img width="100" src=${search.img}>
        <div class="details">
        <div class="title-price-x">
        <h4 class="title-price">
        <p>${search.name}</p>
        <p class="price">$ ${search.price}</p>
        <h4>
        <i onclick="removeitem(${id})" class="bi bi-x-lg"></i>
        </div>

        <div class="buttons">
                        <i  onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity"> ${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>

                    </div>
        <h3>$ ${item * search.price}</h3>
        </div>
        
        </div>
        `
    }).join(""));

}else{
Shoppingcart.innerHTML = ``;
lable.innerHTML = `
<h2>Cart is Empty</h2>
<a href="index.html">
<button class="homeBtn">Back to Home</button>
</a>`;

}

};
generateCartItems();

let increment = (id)=>{
    let selectedItem = id;
    let search= basket.find((x)=>x.id === id);
    if(search === undefined){
        basket.push({
            id:id,
            item:1,
        });
    }else{
        search.item += 1;
    }
    update(id);
    generateCartItems();
    calculation();
    localStorage.setItem("data",JSON.stringify(basket)) 
    
    
    
};

let decrement=(id)=>{
    let selectedItem = id;
    let search= basket.find((x)=>x.id === id);
    //console.log(search)
    if(search === undefined) return;
    if(search.item === 0) return;
    else{
        search.item -= 1;
    }
    update(id);
    basket = basket.filter((x)=>x.item !== 0)
    generateCartItems();
    calculation();
    localStorage.setItem("data",JSON.stringify(basket))
    
};

let update = (id)=>{
    let search=basket.find((x)=>x.id === id);
    document.getElementById(id).innerHTML= search.item;
    calculation();
    totalamount();
 }

 let removeitem =(id)=>{
let selectedItem=id;
//console.log(id);
basket = basket.filter((x)=>x.id != id);
generateCartItems()
totalamount()
calculation();
localStorage.setItem("data",JSON.stringify(basket))
 }

 let totalamount = ()=>{
    if(basket.length !== 0 ){
let amount = basket.map((x)=>{
    let {item,id} = x;
    let search = shopItemsData.find((shopItemsData) => shopItemsData.id == id ) ;
    return item * search.price;

}).reduce((x,y)=>x+y,0)
lable.innerHTML = `
<h2>Total Bill : $ ${amount}</h2>

<button onclick="clearcart()" class="removeall">Clear Cart</button>
`
    }else return
 }
 totalamount()
  
 let clearcart = ()=>{
    basket = []
    generateCartItems();
    calculation();
    localStorage.setItem("data",JSON.stringify(basket))
 }
 