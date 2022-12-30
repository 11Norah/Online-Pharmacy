import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent implements OnInit{
  constructor(private Server:ProductService){}
  ngOnInit(): void {

  }
  loggedin=JSON.parse( localStorage.getItem("UserLoggedIn")!);
  SelectedProduct=JSON.parse(localStorage.getItem("aboutProduct")!);
  //rating of product
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
  show(){

    document.getElementById("stars")!.innerHTML=this.getStars(this.SelectedProduct.rate)
  }
  
  //to submit rating of product
  submit_rate(value:string){
    let rate:number=+value
    //call backend
    console.log(rate)
    let id = localStorage.getItem("UserId");
    this.Server.changeRate(Number(id), this.SelectedProduct.id, rate).subscribe(response => {
      console.log("response = " + response);
      this.SelectedProduct.rate = response;
      document.getElementById("stars")!.innerHTML = this.getStars(this.SelectedProduct.rate);
    })

  }
  AddProduct(){
    if(this.SelectedProduct.permission==true){
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
    aux.product_id=this.SelectedProduct.id;
    aux.image=this.SelectedProduct.img;
    aux.name=this.SelectedProduct.name;
    aux.price=this.SelectedProduct.price;
    aux.duplication=1;
    let flag=0;
  
    if(localStorage.getItem("CartProducts")==null){
    
      cart.push(aux);
      subtotal=this.SelectedProduct.price;
     localStorage.setItem("subtotal",JSON.stringify (subtotal));
     localStorage.setItem("CartProducts",JSON.stringify(cart));
    }
    else{
    cart=JSON.parse (localStorage.getItem("CartProducts")!)
    for(var i=0;i<cart.length;i++){
      if(cart[i].product_id==this.SelectedProduct.id){
        
         flag=1;
         cart[i].duplication+=1;
         subtotal=JSON.parse (localStorage.getItem("subtotal")!);
    subtotal+=this.SelectedProduct.price;
    localStorage.setItem("subtotal",JSON.stringify (subtotal));
    localStorage.setItem("CartProducts",JSON.stringify(cart));
    break;
      }
    }
    if(flag==0){
    cart.push(aux);
    subtotal=JSON.parse (localStorage.getItem("subtotal")!);
    subtotal+=this.SelectedProduct.price;
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
