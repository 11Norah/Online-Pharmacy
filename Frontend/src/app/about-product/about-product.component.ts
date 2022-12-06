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
  SelectedProduct:{id:number,img:string,name:string,price:number,rate:number,category:string,description:string}=this.Server.product;
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

  }

}
