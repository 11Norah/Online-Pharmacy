
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
  UserloggedIn=RegistrationComponent.loggedIn;;
  
  UserName=localStorage.getItem("Username");
  
  container!: ViewContainerRef;
  constructor(private router:Router,private userService:ProductService){
   
    this.router.routeReuseStrategy.shouldReuseRoute=function(){
      
      console.log("in apppp :::::"+userService.UserLoggedIn );
    if(userService.UserLoggedIn==1){
      (document.getElementById("Welcome") as HTMLElement).innerHTML="Hello "+userService.UserName;
      (document.getElementById("logoutButton")as HTMLButtonElement).hidden=false;
      RegistrationComponent.loggedIn="true";
  }
  else{
    (document.getElementById("Welcome") as HTMLElement).innerHTML="Hello user";
    
  }return false;
  }
} 
 
  Route(e:Event){
    e.preventDefault();
    console.log("in routin of appcomponent :"+this.userService.UserLoggedIn);
    console.log("on route"+ BestsellerComponent.yeslogged);
    console.log("in app usermail::"+this.userService.UserMail);
    if(this.userService.UserLoggedIn==1){
        this.router.navigate(['/profile']);}
    else{
      this.router.navigate(['/registration']);
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
  submit(e:Event){
    e.preventDefault();
    document.getElementById("mySidenav")!.style.width="0";

  }

  
}
let userService:ProductService;
window.addEventListener("load",(event)=>{
  userService.UserLoggedIn=1;
})
