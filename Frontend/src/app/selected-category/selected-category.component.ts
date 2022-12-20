import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-selected-category',
  templateUrl: './selected-category.component.html',
  styleUrls: ['./selected-category.component.css']
})
export class SelectedCategoryComponent implements OnInit {
  constructor(private Server:ProductService){}
  bestsellerproducts: Product[] = [];
  name: string=this.Server.SelectedCategoryName;
  ngOnInit(): void {
  
    const item = localStorage.getItem('Category');
    if(this.name == "") this.name = item == null? "" : item;
    localStorage.setItem('Category', this.name);
    const category = this.name;
    this.Server.getByCategory(category).subscribe(response => this.bestsellerproducts = response);
  }
      

 /*bestsellerproducts=[{product_id: 10000,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KEf5HhX0KiVBvBgsHQ9pmkcAQyiGQLqiZEWC1nN4KkQGMl_2rpRj_4O9gEjuMnpV72c&usqp=CAU",name:"La Rcohe Posay",price:415.0,rate:5,type:"Skin Care",description:"cleanser for all skin types"},{product_id:10002,image:"data:image/jpeg;base64,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"
   ,name:"Redoxn Vit.c",price:96.0  ,rate:3.1,type:"vitamins",description:"Redoxon Vitamin C Effervescent Tablets empower the Immune System and provide greater protection for body."},
  {product_id:10003,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAx8JqVvhvmHF-6twQbkpGmmF0aYHdREOrEQ&usqp=CAU",name:"Vichy Mineral 89",price:509.0,rate:3.6,type:"skin care",description:"Vitamin C for all skin types"}
  ,{id:10004,image:"https://www.syd24.com/wp-content/uploads/2019/07/BRONCHICUM-ELIXIR-S.jpg",name:"Bronchicum Elixir Anti Cough",price:45.0 ,rate:4.5,type:"Cough",description:"for cough"}]*/
 aboutproduct(product_id:any,image:string,name:string,price:number,rate:number,type:string,description:string){
  this.Server.RecieveSelectedProduct(product_id,image,name,price,rate,type,description);
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