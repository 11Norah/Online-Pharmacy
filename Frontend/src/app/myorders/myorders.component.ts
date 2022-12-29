import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { orders } from 'src/models/orders.model';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent { 
  /*
  myorders:orders[]=[]
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
