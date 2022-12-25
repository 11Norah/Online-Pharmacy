
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Profile } from 'src/models/profile.model';

import { Component ,ComponentFactoryResolver,  ViewChild,  ElementRef, ViewContainerRef, OnInit} from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { BestsellerComponent } from './bestseller/bestseller.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public static WelcomeUser=document.getElementById("WelcomeUser") as HTMLElement;
  title = 'OnlinePharmacy';
  @ViewChild('container', { read: ViewContainerRef })
  UserloggedIn=RegistrationComponent.loggedIn;;
  
  UserName=localStorage.getItem("Username");
  
  container!: ViewContainerRef;
  constructor(private router:Router){}
  ngOnInit():void{
    
  }
  Route(e:Event){
    e.preventDefault();
    console.log("on route"+ BestsellerComponent.yeslogged);
    if(BestsellerComponent.yeslogged=="true"){
    this.router.navigate(['/profile']);}
    else{
      this.router.navigate(['/registration']);
    }
  }
  
  search(e:Event){
  e.preventDefault();
  if((document.getElementById("searchingFor") as HTMLInputElement).value){
    
    let Searchingvalue=(document.getElementById("searchingFor") as HTMLInputElement).value;
    console.log("written in search"+ Searchingvalue);
    //sent to bach SearchingValue
    (document.getElementById("searchingFor") as HTMLInputElement).value="";
  }
  else{
    alert("Search bar is empty");
  }
  }
  logout(e:Event){
    e.preventDefault();
    localStorage.clear();
    (document.getElementById("logoutButton") as HTMLButtonElement).hidden=true;
    RegistrationComponent.loggedIn="false";
    BestsellerComponent.yeslogged="false";
  }
  openNav() {
    
    document.getElementById("mySidenav")!.style.width="250px";
  }
  closeNav() {
    document.getElementById("mySidenav")!.style.width="0";
  }
  submit(){
    document.getElementById("mySidenav")!.style.width="0";

  }


}

