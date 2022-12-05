import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { AppComponent } from './app.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  product={id:0,img:"",name:"",price:0,rate:0,category:"",description:""}
  constructor(private http: HttpClient) { }
  ngOnInit(): void {}
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

SendSelectedProduct(){
}
}
