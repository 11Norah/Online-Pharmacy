import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { AppComponent } from '../app/app.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product = {
    id: 0,
    img: '',
    name: '',
    price: 0,
    rate: 0,
    category: '',
    description: '',
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  GetbestSellerProducts() {}
  RecieveSelectedProduct(
    id: number,
    img: string,
    name: string,
    price: number,
    rate: number,
    category: string,
    description: string
  ) {
    this.product.id = id;
    this.product.img = img;
    this.product.name = name;
    this.product.price = price;
    this.product.rate = rate;
    this.product.category = category;
    this.product.description = description;
  }

  public getTopRated(): Observable<Product[]> {
    return this.http.get<Product[]>('https://localhost:443/getTopProducts');
  }

  public changeRate(id: number, rate: number): Observable<number> {
    return this.http.post<number>('https://localhost:443/changeRate', {
      id,
      rate,
    });
  }

  SendSelectedProduct() {}
}
