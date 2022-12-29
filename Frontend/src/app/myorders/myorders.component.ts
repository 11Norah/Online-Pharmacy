import { ThisReceiver } from '@angular/compiler';
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


   /* const el = document.createElement('button');

    el.textContent = 'Hello mariooom';

    el.setAttribute('title', 'my-title');

    const box = document.getElementById('box');

    box?.appendChild(el);*/
   
  }


  /*
  
  ngOnInit(): void { 
    //get a list of orders from back end 
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
    {indicator:12,productName:"BOBAI SUN BLOCK SPF80 50 GM CREAM",type:"skincare",imageUrl:"https://lomixa.net/wp-content/uploads/2021/03/1-12-1.jpg",cost:90,quantity:2,orderTime:new Date("2019-01-16")}] 
    let firstorder :number=this.myorders[0].indicator;
    let secondorder:number=this.myorders[1].indicator;
    let myordersize :number=this.myorders.length;
    let createform:boolean=true;
    let orderindicator:number=0;

    while(myordersize!=0){
      let currentorder=this.myorders[orderindicator].indicator; //first order //5 
      let nextorder=currentorder;

      //create form 
      createform=true;
      console.log("okkkk") 
      const el = document.createElement('div');
      el.innerHTML='<span style="background-color: salmon; color: white;>Hello worldHello worldHello worldHello worldHello world</span>"';

      const box = document.getElementById('orderscontent');

      box?.appendChild(el);
     


      while(nextorder==currentorder){   

        createform=false;
        orderindicator=orderindicator+1;

        nextorder=this.myorders[orderindicator].indicator; 
        myordersize=myordersize-1;
        


        //put items in this form
        //create div item inside the form 
        


         //break when it changes to create new from 
         }
      myordersize=myordersize-1;






    }




    


 
  } 
  
  */


}
