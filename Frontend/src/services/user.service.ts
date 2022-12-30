import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orders } from 'src/models/orders.model';
import { Profile } from 'src/models/profile.model';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  port = 8080;
  public register(newUser: User): Observable<boolean> {
      return this.http.post<boolean>(`http://localhost:${this.port}/signup`, newUser);
  }

  public login(email: string, password: string): Observable<number> {
    return this.http.post<number>(`http://localhost:${this.port}/signin`, {email, password});
  }

  public activate(userEmail: string, token: string): Observable<number> {
    return this.http.post<number>(`http://localhost:${this.port}/activate-account`, {userEmail, token});
  }

  public resendCode(email: string): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:${this.port}/get-activation-code?email=${email}`);
  }

  public getProfile(email: string): Observable<Profile> {
    return this.http.get<Profile>(`http://localhost:${this.port}/getProfileData?email=${email}`);
  }

  public editProfile(profile: Profile): Observable<number> {
    return this.http.post<number>(`http://localhost:${this.port}/edit-profile`, profile);
  }

  public updatePassword(email: string, password: string): Observable<boolean> {
    return this.http.post<boolean>(`http://localhost:${this.port}/update-password`, {email, password});
  }

  public getUserOrders(id: number): Observable<orders[]> {
    return this.http.get<orders[]>(`http://localhost:${this.port}/getUserOrders?userId=${id}`);
  }
}