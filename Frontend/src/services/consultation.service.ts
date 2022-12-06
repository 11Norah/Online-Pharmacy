import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) { }

  public getTreatments(diagnosis: string): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/consultations?diagnosis=" + diagnosis);
  }
}
