import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent implements OnInit{
  constructor(private Server:ServerService){}
  ngOnInit(): void {
      
  }
  SelectedProduct:{id:number,img:string,name:string,price:string,rate:number,category:string,description:string}=this.Server.product;
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
  
}
