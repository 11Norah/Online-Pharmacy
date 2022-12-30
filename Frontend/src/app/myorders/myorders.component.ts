import { getLocaleExtraDayPeriods } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { orders } from 'src/models/orders.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit { 
  myorders:orders[]=[];
  constructor(private userService: UserService) {

  }
 
  ngOnInit(): void{ 
    const id = localStorage.getItem("UserId")!;
    this.userService.getUserOrders(Number(id)).subscribe(response   =>  { 
      this.myorders = response 
      this.getorders()
      
     // console.log(this.myorders);
    }); 
    //get myorders list from the back 
  
 
  } 
  getorders(){
    
   
   
    let myordersize :number=this.myorders.length;
    
    let counter:number=1;
    let i: number = 0;
    while(i !=myordersize) {
      let ProductsInOrder=this.myorders[i].indicator;
      console.log(ProductsInOrder+" their numbers :"+getOccurrence(this.myorders,ProductsInOrder));
      
      for(var j=0;j<getOccurrence(this.myorders,ProductsInOrder);j++){ 
        if(j==0){
          (document.getElementById('orderscontent')as HTMLBodyElement)
      .innerHTML +='<div style=" ">'+'<strong  style="color:rgb(1, 1, 1) ;   text-shadow: 0 0 3px rgb(249, 208, 24), 0 0 5px rgb(249, 208, 24); font-size: x-large; display:flex;">'+"Order #"+counter+"</strong>"+"<br>"+'<p style=" font-size: xx-large; font-weight:bold;">   Date : '+this.myorders[i].orderTime +'  (Eastern West Egypt)';

        }
        (document.getElementById('orderscontent')as HTMLBodyElement).innerHTML +='<br>'+'<br>'+'<div style="width:300px;height:400px;background-color: white; padding:0px;border-radius: 15px;box-shadow: 0px 0px 15px 2px rgb(249, 208, 24);transition: 0.5s;margin-bottom: 70px;">'
        +'<div style ="width=300; height=200;">'+'<img style="object-fit: cover; border-radius: 15px; position: relative; width:300px;  height:250px;" src='
        +this.myorders[i+j].imageUrl+"></div>"+this.myorders[i+j].productName +"<br>"+"<br>"+'<span style="color:white;  background-color: rgb(113, 113, 113); border: 2px solid black ;padding: 10px; border-radius: 25px;">Quantity</span>'
        +" : "+  this.myorders[i+j].quantity
        +"<br>"+"<br>"+"<br>"+'<span style="color:white;  background-color: rgb(113, 113, 113); border: 2px solid black ;padding: 10px; border-radius: 25px;">Cost</span>'
        +" : "+this.myorders[i+j].cost+" LE"+'</div>';

        if(j==ProductsInOrder-1){
          (document.getElementById('orderscontent')as HTMLBodyElement).innerHTML+='</div>'+"<br>"
          

        }

      }
      counter+=1;
     
      i=i+j;
      console.log(i);
      // '<div class="item"><div class="portfolio-item"><a href="img/portfolio-item-' + i + '.jpg" data-lightbox="image-' + i + '"><img src="img/portfolio-item-' + i + '.jpg"></a></div></div>'
   }
   


var arr = [2, 3, 1, 3, 4, 5, 3, 1];

function getOccurrence(array:orders[], value:Number) {
    var count = 0;
    array.forEach((v) => (v.indicator === value && count++));
    return count;
}

console.log(getOccurrence(this.myorders, 5));  // 2
console.log(getOccurrence(this.myorders, 9));  // 3





  }
 


    


 
  } 
  















