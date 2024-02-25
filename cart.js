

let CartProducts=JSON.parse(localStorage.getItem("CartProducts"));
console.log(CartProducts);
if (CartProducts.length===0)
{
    let body=document.querySelector('body');
    body.className+="bbody";
    let box= document.createElement("box");
    box.className+="box";
    body.appendChild(box);
    let table=document.querySelector("table")
    table.style.display= "none";
    let h2=document.querySelector("h2")
    h2.style.display="none";
    let heading = document.createElement("p");
    heading.textContent = "Your cart is empty";
    heading.className+="heading";
    box.appendChild(heading);
    let shopping =document.createElement('button');
    shopping.className+="button";
    shopping.innerText="Home  Page"
    shopping.addEventListener('click',()=>window.location='index.html')
    box.appendChild(shopping);
   
}
else{
    let container=document.querySelector(".container");
CartProducts.forEach((item)=>{
    let row1=document.createElement('tr');
            let itemName = document.createElement('td');
            let image=document.createElement('img');
            image.src=item.thumbnail;
            let imagetd = document.createElement('td');
            imagetd.appendChild(image);

            let price = document.createElement('td');
            let quantity = document.createElement('td') ;
            let total = document.createElement('td');
            itemName.textContent=item.title;
            let action=document.createElement('td')
            

            let  removebtn=document.createElement('button');
            removebtn.className+='remove';
            removebtn.innerHTML="Remove";
            action.appendChild(removebtn);
        
             
           
            price.textContent='$'+item.price;
            quantity.textContent=item.quantity;
            total.textContent='$'+(item.price*item.quantity).toFixed(2);
            
                   row1.appendChild(itemName);
                   row1.appendChild(imagetd)
                   row1.appendChild(price);
                   row1.appendChild(quantity);
                   row1.appendChild(action)
                   row1.appendChild(total);
                   document.querySelector('table').append(row1);

        
// decrease qty
                   let  decreaseQty = document.createElement("button");
            
                   decreaseQty.className += ' qtyBtndecrement';
                 decreaseQty.innerText='-';
                   action.appendChild(decreaseQty);
                   decreaseQty.addEventListener("click",()=>{
                   // while clicking on button i want to decrease quanitity
                //    if (item.quantity>1){
                //     item.quantity--;
                //     }
                //     else{
                //         alert("CLick on remove button.")
                //     }
                //     localStorage.setItem( 'CartProducts' , JSON.stringify( CartProducts ) );
                //     window.location.reload();
                               item.quantity--;
                               localStorage.setItem( 'CartProducts' , JSON.stringify( CartProducts ) );
                                  window.location.reload();
                                  if(item.quantity==0){
                                    let id=CartProducts.indexOf(item);
                                    removeItem(id);
                                    localStorage.setItem( 'CartProducts' , JSON.stringify( CartProducts ) );
                                    window.location.reload();

                                  }

                   })


                  
                   let  increaseQty = document.createElement("button");
            
                   increaseQty.className += ' qtyBtndecrement';
                 increaseQty.innerText='+';
                   action.appendChild(increaseQty);
   increaseQty.addEventListener("click",()=>{
    item.quantity++;
    localStorage.setItem( 'CartProducts' , JSON.stringify( CartProducts ) );
    window.location.reload();
   })




                   //removing items
                   removebtn.addEventListener('click',(event)=>{
                    event.preventDefault;
                                   console.log(CartProducts[1]);
                                   let id=CartProducts.indexOf(item);
                                   console.log(id);
                                removeItem(id);
                       
                                alert("item Removed . Enojy Your Shopping")
                                })
                  

})



function removeItem(id){
    CartProducts.splice(id,1);
    localStorage.setItem( 'CartProducts' , JSON.stringify( CartProducts ) );
            window.location.reload();
    console.log("item Removed");
            window.location.reload();
}
}






let totalAmount = 0;

CartProducts.forEach((item)=>{
    // ... existing code ...

    // Step 2
    totalAmount += item.price * item.quantity;

    // ... existing code ...
});

// Step 3
let totalRow = document.createElement('tr');
totalRow.innerHTML = `<th>Total Amount</th><td></td><td> <span class="total"> $${totalAmount}</span>/-</td> <td><button class="button" onclick="checkout()">Checkout</button</td>`;
document.querySelector('table').append(totalRow);




function checkout(){
  CartProducts.splice(0);
  localStorage.setItem( 'CartProducts' , JSON.stringify( CartProducts ) );
            window.location.reload();
    console.log("item Removed");
            window.location.reload();
}
























// if (Array.isArray(CartProducts)) {
//     // Create a function to add each item to the container
//     function getarray(CartProducts) {
//         CartProducts.forEach((item) => {
//             console.log(item);
         
//             // Create a new div element for each item
//             const singleItem = document.createElement('div');
//             singleItem.className += ' singleItem';

//             // Append the new div to the container
//             container.appendChild(singleItem);



//              //Image
// let img=document.createElement("img")
// img.className+="img";
// img.src=item.thumbnail;
// singleItem.appendChild(img);
// let headingdiv=document.createElement("div");
// headingdiv.className+="headingdiv"
// singleItem.appendChild(headingdiv);
// let brand=document.createElement("span");
// brand.innerText=` ${item.brand} :`;
// headingdiv.appendChild(brand);
// brand.className+="brand";
// let title=document.createElement("span");
// title.innerText= ` ${item.title}`;
// title.className+="title";
// headingdiv.appendChild(title);
// let descriptionbox=document.createElement("div");
// descriptionbox.className+="descriptionbox";
// descriptionbox.innerText=item.description;
// singleItem.appendChild(descriptionbox);
// let qualitybox=document.createElement("div");
// qualitybox.className+="qualitybox";
// singleItem.appendChild(qualitybox);
// let rating=document.createElement('span');
// rating.innerHTML=`<span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>`;
// rating.className+="rating"
// qualitybox.appendChild(rating);
// let discountPercentage=document.createElement("span");
// discountPercentage.className+="discountPercentage";
// discountPercentage.innerText=`${item.discountPercentage} off`;
// qualitybox.appendChild(discountPercentage);
// let price=document.createElement("span");
// price.innerHTML="<span>&#8377;</span>  "+item.price;
// price.className+="price";
// singleItem.appendChild(price);



// let removebtn=document.createElement("button");
// removebtn.className+="btn";
// removebtn.innerText="Remove "
// singleItem.appendChild(removebtn);
// let quantity=document.createElement("div");
// quantity.className+="quantity";
// singleItem.appendChild(quantity);
//             // quanitiy buttons 
           
//             let totalquantity=document.createElement("span");
//             totalquantity.className+="qtytotal"
//             let qtytotal=0;
//             totalquantity.innerText= qtytotal;

//             quantity.appendChild(totalquantity)
//             let  increaseQty = document.createElement("button");
//              increaseQty.className += 'qtyBtnincrement';
//              increaseQty.innerText='+';
//                quantity.appendChild(increaseQty);
                

//                increaseQty.addEventListener('click',()=>{
//                 qtytotal++;
//                 totalquantity.innerText=qtytotal;
//                })


//                decreaseQty.addEventListener('click',()=>{
//                 if (qtytotal > 1){
//                     qtytotal--;
//                     totalquantity.innerText=qtytotal;
//                     }else {
//                         alert( "No more items to remove");
//                     }
//                })
//                //adding qtytotal to local storage
            

//                //quantity buttons
//             removebtn.addEventListener('click',(event)=>{
//                console.log(CartProducts[1]);
//                let id=CartProducts.indexOf(item);
//                console.log(id);
//             removeItem(id);
   
            
//             })

//         });
//     }

//     // Call the function with the CartProducts array
//     getarray(CartProducts);
// } else {
//     console.error('CartProducts is not an array');
// }
// function removeItem(id){
//     CartProducts.splice(id,1);
//     localStorage.setItem( 'CartProducts' , JSON.stringify( CartProducts ) );
//             window.location.reload();
//     console.log("item Removed");
//             window.location.reload();
// }