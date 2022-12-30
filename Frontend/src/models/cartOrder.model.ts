
export class CartOrder{
    public  userId:number ;
    public  productId:number ;
    public quantity:number ;
    public orderTime:Date ; 
    constructor(id:number,pid:number, productquantity:number, timeoforder:Date){
        this.userId=id; 
        this.productId=pid;
        this.quantity=productquantity;
        this.orderTime=timeoforder;



    }





}