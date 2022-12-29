import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { orders } from 'src/models/orders.model';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent  { 
  myorders:orders[]=[];
  ngOnInit(){ 
    //get myorders list from the back 

    
    this.myorders=[
      {indicator:5,productName:"BOBAI SUN BLOCK SPF80 5 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:5,productName:"BOBAI SUN BLOCK SPF80 5 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:5,productName:"BOBAI SUN BLOCK SPF80 5 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:5,productName:"BOBAI SUN BLOCK SPF80 5 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:5,productName:"BOBAI SUN BLOCK SPF80 5 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:7,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:7,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:7,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:7,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:9,productName:"BOBAI SUN BLOCK SPF80 50 GM CRAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:9,productName:"BOBAI SUN BLOCK SPF80 50 GM CRAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:9,productName:"BOBAI SUN BLOCK SPF80 50 GM CRAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREA",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREA",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREA",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREA",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")}] 
   
    let myordersize :number=this.myorders.length;
    
    let counter:number=1;
    let i: number = 0;
    while(i !=myordersize) {
      let ProductsInOrder=this.myorders[i].indicator;
      console.log(ProductsInOrder+" their numbers :"+getOccurrence(this.myorders,ProductsInOrder));
      
      for(var j=0;j<getOccurrence(this.myorders,ProductsInOrder);j++){ 
        if(j==0){
          (document.getElementById('orderscontent')as HTMLBodyElement)
      .innerHTML +='<div style=" ">'+'<strong  style="color:rgb(1, 1, 1) ;   text-shadow: 0 0 3px rgb(249, 208, 24), 0 0 5px rgb(249, 208, 24); font-size: x-large; display:flex;">'+"Order #"+counter+"</strong>"+"<br>"+'<p style=" font-size: x-large; font-weight:bold;">   Date : '+this.myorders[i].orderTime;

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
   console.log((document.getElementById('orderscontent')as HTMLBodyElement).innerHTML)
   


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
  

















/*import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { orders } from 'src/models/orders.model';


//petContainer=document.getElementById('petContainer') as HTMLDivElement;
// addPetBtn =document.getElementById('addPetBtn') as HTMLButtonElement;
//const   firstRemoveBtn=document.querySelector<HTMLButtonElement>('button.removeBtn');
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  myorders:orders[]=[]
  myordersmap = new Map<number, number>(); //it has orders indicator and the number of items for each order 

  ngOnInit(): void { 
    this.myorders=[
      {indicator:5,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:5,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:5,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:5,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:5,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:7,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:7,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:7,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:7,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:9,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:9,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:9,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:13,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:13,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")},
    {indicator:14,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")}]
    
    let myordersize :number=this.myorders.length;
    
    let orderindicator:number=0;
    let numofitemsforeachorder=0;
   

    while(myordersize>0){
      let currentorder=this.myorders[orderindicator].indicator; //first order //5 
      let nextorder=currentorder;
      numofitemsforeachorder=1;
      this.myordersmap.set(this.myorders[orderindicator].indicator, numofitemsforeachorder);
      myordersize=myordersize-1;


      console.log(myordersize)
      while(true && myordersize>0   ){   
        
        orderindicator=orderindicator+1;
        nextorder=this.myorders[orderindicator].indicator; 
        
        if(nextorder!=currentorder ){
          break;

        }
        myordersize=myordersize-1;

        numofitemsforeachorder=numofitemsforeachorder+1
        console.log(this.myorders[orderindicator].indicator + "::::"+numofitemsforeachorder) 
        this.myordersmap.set(this.myorders[orderindicator].indicator, numofitemsforeachorder);

        

         } 
        
   


    } 
    console.log(this.myordersmap)


   



  


}
numSequence(n: number): Array<number> {
  return Array(n);
}
}

*/