import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/models/product.model';
import { RegistrationComponent } from '../registration/registration.component';
import { AppComponent } from '../app.component';

import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';

import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {
  bestsellerproducts: Product[] = [];

  constructor(private Server:ProductService, private userService: UserService){}
  
  ngOnInit(): void {

    
      this.Server.getTopRated().subscribe(response => this.bestsellerproducts = response);
      console.log("in bestseller"+localStorage.getItem("UseLoggedIn"));

  }


  aboutproduct(id:number,img:string,name:string,price:number,rate:number,category:string,description:string,permission:boolean){
    let  product={id:id,img:img,name:name,price:price,rate:rate,category:category,description:description,permission:permission};
  localStorage.setItem("aboutProduct",JSON.stringify(product));
  this.Server.RecieveSelectedProduct(id,img,name,price,rate,category,description);
}

 getStars(rating:any) {

  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // If there is a half a star, append it
  if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // Fill the empty stars
  for (let i = (5 - rating); i >= 1; i--)
    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  return output.join('');

}
show(id:any){
  console.log(id)
  let count:any;
  for(var i:number=0; i<this.bestsellerproducts.length;i++){
    if(id==this.bestsellerproducts[i].product_id){
      count=i;
      break;
    }
  }
  let ids:string
  ids=String(this.bestsellerproducts[i].product_id)
console.log(count)
  document.getElementById(ids)!.innerHTML=this.getStars(this.bestsellerproducts[i].rate)
}
AddProduct(id:any){

  ///call back to get rate
  let pos=0;
  for(var i=0;i<this.bestsellerproducts.length;i++){
    if(this.bestsellerproducts[i].product_id==id){
           pos=i;
           break;
    }
  }
  if(this.bestsellerproducts[pos].permission==true){
    document.getElementById("myModal3")!.style.display="block";


  }
  else{
 /* localStorage.removeItem("CartProducts");
  localStorage.removeItem("subtotal");
  localStorage.removeItem('itemsincart')*/
   let cart:{product_id:number,image:string,name:string,price:number,duplication:number}[]=[];
  let duplicate:{id:number,num:number}[]=[]
  let aux:{product_id:number,image:string,name:string,price:number,duplication:number}={product_id:0,image:"",name:"",price:0,duplication:0};
  let subtotal=0;
  aux.product_id=this.bestsellerproducts[pos].product_id;
  aux.image=this.bestsellerproducts[pos].image;
  aux.name=this.bestsellerproducts[pos].name;
  aux.price=this.bestsellerproducts[pos].price;
  aux.duplication=1;
  let flag=0;

  if(localStorage.getItem("CartProducts")==null){
  
    cart.push(aux);
    subtotal=this.bestsellerproducts[pos].price;
   localStorage.setItem("subtotal",JSON.stringify (subtotal));
   localStorage.setItem("CartProducts",JSON.stringify(cart));
  }
  else{
  cart=JSON.parse (localStorage.getItem("CartProducts")!)
  for(var i=0;i<cart.length;i++){
    if(cart[i].product_id==this.bestsellerproducts[pos].product_id){
      
       flag=1;
       cart[i].duplication+=1;
       subtotal=JSON.parse (localStorage.getItem("subtotal")!);
  subtotal+=this.bestsellerproducts[pos].price;
  localStorage.setItem("subtotal",JSON.stringify (subtotal));
  localStorage.setItem("CartProducts",JSON.stringify(cart));
  break;
    }
  }
  if(flag==0){
  cart.push(aux);
  subtotal=JSON.parse (localStorage.getItem("subtotal")!);
  subtotal+=this.bestsellerproducts[pos].price;
 localStorage.setItem("subtotal",JSON.stringify (subtotal));
  localStorage.setItem("CartProducts",JSON.stringify(cart));
  }
}
  let val=0;
  val=JSON.parse(localStorage.getItem("itemsincart")!);
  if(val==null){
    val=1;
  }
  else{
    val+=1;
  }
localStorage.setItem("itemsincart",JSON.stringify(val));
(<HTMLInputElement>document.getElementById("itemsnum")).textContent=val.toString();
  console.log("in cart -->"+(<HTMLInputElement>document.getElementById("itemsnum")).textContent)
  document.getElementById("itemsnum")!.style.display="block"

}
}
clossing(){
 
  document.getElementById("myModal3")!.style.display="none";
}
}
window.addEventListener("load", (event) => {
  (<HTMLInputElement>document.getElementById('radio1')).checked=true;
  var counter=2;
  setInterval(function(){
    (<HTMLInputElement>document.getElementById('radio'+counter)).checked=true;
    counter++;
          if(counter>5){
              counter=1;
          }
  },4000)});