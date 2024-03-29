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
export class AppComponent {
  public static WelcomeUser=document.getElementById("WelcomeUser") as HTMLElement;
  title = 'OnlinePharmacy';
  @ViewChild('container', { read: ViewContainerRef })

  
  

  container!: ViewContainerRef;

  constructor(private router:Router){

    this.router.routeReuseStrategy.shouldReuseRoute=function(){

      console.log("in apppp :::::" +localStorage.getItem("UserLoggedIn") );
    if(Number(localStorage.getItem("UserLoggedIn"))==1){
      (document.getElementById("Welcome") as HTMLElement).innerHTML="Hello "+(localStorage.getItem('UserName') ? localStorage.getItem('UserName') : "");
      (document.getElementById("logoutButton")as HTMLButtonElement).hidden=false;
      
  }
  else{
    (document.getElementById("Welcome") as HTMLElement).innerHTML="<span>"+"Welcome to our store"+"</span>";

  }return false;

  
}
  }

  Route(e:Event){
    e.preventDefault();
    console.log("in routin of appcomponent :" +localStorage.getItem("UserLoggedIn"));
    
    console.log("in app usermail::" +localStorage.getItem("UserMail"));
    if(Number(localStorage.getItem("UserLoggedIn"))==1){

        this.router.navigate(['/profile']);}
    else{
      this.router.navigate(['/registration']);
    }
  }
  
  search(e:Event){
  e.preventDefault();
  this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
    }
  
  if((document.getElementById("searchingFor") as HTMLInputElement).value){
    
    let Searchingvalue=(document.getElementById("searchingFor") as HTMLInputElement).value;
    console.log("written in search"+ Searchingvalue);
    //sent to bach SearchingValue
    (document.getElementById("searchingFor") as HTMLInputElement).value="";
    localStorage.setItem("Category","Search");
    localStorage.setItem("searchTerm", Searchingvalue);
    this.router.navigate(['/SelectedCategory']);
    this.router.onSameUrlNavigation = 'reload';
  
    console.log("search function in app is done");

  }
  else{
    alert("Search bar is empty");
  }
  }
  logout(e:Event){
    //e.preventDefault();
   // localStorage.clear();
    (document.getElementById("logoutButton") as HTMLButtonElement).hidden=true;
    (document.getElementById("Welcome") as HTMLElement).innerHTML="<span>"+"Welcome to our store"+"</span>";
    localStorage.removeItem("UserLoggedIn");
    localStorage.removeItem("UserMail");
    localStorage.removeItem("UserName");
    localStorage.removeItem("UserId");
    localStorage.removeItem("UserInfo");
    this.router.navigate(['/bestseller']);

  //this.userService.UserLoggedIn=0;
  //this.userService.UserMail="";
  //this.userService.UserName="";

  }
  openNav() {

    document.getElementById("mySidenav")!.style.width="250px";
  }
  closeNav() {
    document.getElementById("mySidenav")!.style.width="0";
  }
  submit(e:Event){
    e.preventDefault();
    document.getElementById("mySidenav")!.style.width="0";

  }


}
let userService:ProductService;
window.addEventListener("load",(event)=>{
  userService.UserLoggedIn=1;
})

