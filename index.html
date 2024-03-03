
let container=document.querySelector(".container");
async function getData(){
    let response= await fetch("https://dummyjson.com/products");
    let data=await response.json();
    showData(data);
    
    //console.log(data);
}

// document.addEventListener("DOMContentLoaded", ()=>{
//   let cartItems = JSON.parse(localStorage.getItem("CartProducts")) || [];
//    if(cartItems.length > 0){
    
//    }
// })

function showData(item){
    item.products.forEach((product)=>{
        console.log(product);
        let item=document.createElement("div");
        item.classList.add("item");
        container.append(item);
        //Image
        let img=document.createElement("img")
        img.className+="img";
        img.src=product.thumbnail;
        item.appendChild(img);
        let headingdiv=document.createElement("div");
        headingdiv.className+="headingdiv"
        item.appendChild(headingdiv);
        let brand=document.createElement("span");
        brand.innerText=` ${product.brand} :`;
        headingdiv.appendChild(brand);
        brand.className+="brand";
        let title=document.createElement("span");
        title.innerText= ` ${product.title}`;
        title.className+="title";
        headingdiv.appendChild(title);
        let descriptionbox=document.createElement("div");
        descriptionbox.className+="descriptionbox";
        descriptionbox.innerText=product.description;
        item.appendChild(descriptionbox);
        let qualitybox=document.createElement("div");
        qualitybox.className+="qualitybox";
        item.appendChild(qualitybox);
        let rating=document.createElement('span');
        rating.innerHTML=`<span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>`;
        rating.className+="rating"
        qualitybox.appendChild(rating);
        let discountPercentage=document.createElement("span");
        discountPercentage.className+="discountPercentage";
        discountPercentage.innerText=`${product.discountPercentage} off`;
        qualitybox.appendChild(discountPercentage);
        let price=document.createElement("span");
        price.innerHTML="<span>&#8377;</span>  "+product.price;
        price.className+="price";
        item.appendChild(price);
        
        
    let btn=document.createElement("button");
    btn.className+="btn";
    btn.innerText="Add to Cart"
    item.appendChild(btn);


    // clicking on button
    btn.addEventListener('click',(event)=>{
        //console.log(product.id);// printing the product id
        getSingleProduct(product.id);
       
        let cartItems = JSON.parse(localStorage.getItem("CartProducts")) || [];

        // Check if the item already exists in the cart items array
        let existingItem = cartItems.find((item) => item.id == product.id);
      
        if (existingItem) {
          // Increment the quantity of the existing item
          existingItem.quantity += 1;
        } else {
          // Add the new item to the cart items array
          product.quantity = 1;
          cartItems.push(product);
        }
      
        // Update the local storage
        localStorage.setItem("CartProducts", JSON.stringify(cartItems));
      
        alert("Product added to cart . ThankYou  Please Enjoy Your Shopping");




        btn.style.display='none';
        let quantityBox=document.createElement("div");
        quantityBox.classList.add("qtyBox");
        
        item.appendChild(quantityBox);
        let decreasebtn=document.createElement("button");
        decreasebtn.classList.add("decreasebtn");
        decreasebtn.innerText="-";
        quantityBox.appendChild(decreasebtn);
        let qtyValue=document.createElement("span");
        qtyValue.innerText="0"
        qtyValue.classList.add("qtyValue");
        quantityBox.appendChild(qtyValue);
        let increaseQty=document.createElement("button");
        increaseQty.classList.add("increaseQty");
        increaseQty.innerText="+";
        quantityBox.appendChild(increaseQty);

        let currentItem = cartItems.find((item)=>{
                  return item.id === product.id
        })
        
        qtyValue.innerText=currentItem.quantity || 1;
         
        decreasebtn.addEventListener('click',()=>{
          let cartItems = JSON.parse(localStorage.getItem("CartProducts")) || [];
          let currentItem = cartItems.find((item)=>{
            return item.id === product.id
  })
  //debugger;
       currentItem.quantity--;
       qtyValue.innerText=currentItem.quantity;
       localStorage.setItem("CartProducts", JSON.stringify(cartItems));
       
       if(currentItem.quantity==0)
       {
        quantityBox.style.display="none";
        btn.style.display="block"
        let id=cartItems.indexOf(currentItem)
        console.log(id);
        cartItems.splice(id,1);
        // removeItem(id);
        localStorage.setItem('CartProducts', JSON.stringify( cartItems) );
        window.location.reload();
       }
          


          
      

        })
        increaseQty.addEventListener('click',()=>{
          currentItem.quantity++;
          qtyValue.innerText=currentItem.quantity;
          localStorage.setItem("CartProducts", JSON.stringify(cartItems));
             
   
   
             
         
   
           })


        

      });
      
   




        
        
    })

    
}



function removeItem(id){
  debugger;
  cartItems.splice(id,1);
  localStorage.setItem( 'CartProducts' , JSON.stringify(cartItems));
          window.location.reload();
  console.log("item Removed");
  alert("item removedss")
          
}

async function getSingleProduct(id){
    let response= await fetch(`https://dummyjson.com/products/${id}`);
    let data=await response.json();   
    data.quantity=1;
    console.log(data);

   // to check is product item aleready in cart
   let cartItems=JSON.parse(localStorage.getItem("CartProducts")) ||[];
   if (cartItems.find((item) => item.id == data.id)) {
  // alert("This Product Is Already In Your Cart")
  

   


   
    return ;


   }
   else{
   

    cartItems.push(data)
    localStorage.setItem("CartProducts",JSON.stringify(cartItems))
    alert("Product added to cart . ThankYou  Please Enjoy Your Shopping")
}
}
getData();
