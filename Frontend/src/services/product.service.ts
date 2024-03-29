import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { AppComponent } from "../app/app.component"
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/models/product.model';
import { CartOrder } from 'src/models/cartOrder.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product={id:0,img:"",name:"",price:0,rate:0,category:"",description:""};

  //ProductsCart: Product[] =JSON.parse(localStorage.getItem("CartProducts")!); 
  
  SelectedCategoryName=""

 
  UserLoggedIn = localStorage.getItem('UserLoggedIn') ? Number(localStorage.getItem('UserLoggedIn')) : 0;
  //UserLoggedIn=0;
 // UserMail = localStorage.getItem('UserMail') ? localStorage.getItem('UserMail') : "";
  //UserMail:string="";
  //UserName = localStorage.getItem('UserName') ? localStorage.getItem('UserName') : "";
  //UserName:string="";

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
 
  // localStorage.setItem("CartProducts",JSON.stringify (this.ProductsCart));
  }

GetbestSellerProducts(){
}
RecieveSelectedProduct(id:number,img:string,name:string,price:number,rate:number,category:string,description:string){
  this.product.id=id;
  this.product.img=img;
  this.product.name=name;
  this.product.price=price;
  this.product.rate=rate;
  this.product.category=category;
  this.product.description=description;
  
}
RecieveSelectedCategoryName(CategoryName:string){
  this.SelectedCategoryName=CategoryName;
}

port = 8080;
public getTopRated(): Observable<Product[]> {
  return this.http.get<Product[]>(`http://localhost:${this.port}/getTopProducts`);
}

public changeRate(userId: number, productId: number, rating: number): Observable<number> {
  return this.http.post<number>(`http://localhost:${this.port}/changeRate`, {userId, productId, rating});

}

public getByCategory(category: string): Observable<Product[]> {
  return this.http.get<Product[]>(`http://localhost:${this.port}/getByType?type=${category}`);

}

public search(term: string): Observable<Product[]> {
  return this.http.get<Product[]>(`http://localhost:${this.port}/search?searchTerm=${term}`);
}

public saveOrder(order: CartOrder[]): Observable<boolean> {
  console.log(order);
  
  return this.http.post<boolean>(`http://localhost:${this.port}/saveUserOrders`, order);
}

SendSelectedProduct(){
}
}