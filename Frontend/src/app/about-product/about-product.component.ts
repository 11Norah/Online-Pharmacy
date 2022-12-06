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
  rate(){

    if((<HTMLInputElement>document.getElementById("star5")).checked){
      return 5;
    }
    else if((<HTMLInputElement>document.getElementById("star4half")).checked){
      return 4.5;
    }
    else if((<HTMLInputElement>document.getElementById("star4")).checked){
      return 4;
    }
    else if((<HTMLInputElement>document.getElementById("star3half")).checked){
      return 3.5;
    }
    else if((<HTMLInputElement>document.getElementById("star3")).checked){
      return 3;
    }
    else if((<HTMLInputElement>document.getElementById("star2half")).checked){
      return 2.5
    }
    else if((<HTMLInputElement>document.getElementById("star2")).checked){
      return 2
    }
    else if((<HTMLInputElement>document.getElementById("star1half")).checked){
      return 1.5
    }
    else if((<HTMLInputElement>document.getElementById("star1")).checked){
      return 1
    }
    else if((<HTMLInputElement>document.getElementById("starhalf")).checked){
      return .5
    }
    else {
      return 0
    }
  }

}
