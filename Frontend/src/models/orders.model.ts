import { Time } from "@angular/common";

export class orders{
    public  indicator:number ;
    public  productName:string ;
    public  type:string ;
    public  imageUrl:string ;
    public cost :number;
    public quantity:number ;
    public orderTime:Date ; 
    constructor(indicatorproduct:number,name:string,category:string,url:string,price:number,productquantity:number,timeoforder:Date){
        this.indicator=indicatorproduct; 
        this.productName=name;
        this.type=category;
        this.imageUrl=url;
        this.cost=price;
        this.quantity=productquantity;
        this.orderTime=timeoforder;



    }





}