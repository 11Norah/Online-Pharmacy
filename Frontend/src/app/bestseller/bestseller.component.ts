import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {
  constructor(private Server:ServerService){}
  ngOnInit(): void {
      this.Server.getTopRated().subscribe(response => this.bestsellerproducts = response);
  }

 numval=this.AddToCart;
  AddToCart( x:any[]){
let val=(<HTMLInputElement>document.getElementById("itemsnum")).textContent;
let numval=0
if(val!=null){
 numval= +val+1;
}
(<HTMLInputElement>document.getElementById("itemsnum")).textContent=numval.toString();
  console.log((<HTMLInputElement>document.getElementById("itemsnum")).textContent)
  document.getElementById("itemsnum")!.style.display="block"
}
aboutproduct(id:number,img:string,name:string,price:number,rate:number,category:string,description:string){
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


}
