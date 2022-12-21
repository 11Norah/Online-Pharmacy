
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Profile } from 'src/models/profile.model';

import { Component ,ComponentFactoryResolver,  ViewChild,  ElementRef, ViewContainerRef} from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';


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
  constructor(private router:Router){}
  ngOnInit():void{
    this.UserloggedIn=RegistrationComponent.loggedIn;
    console.log("in apppp"+this.UserloggedIn);
    if(this.UserloggedIn=="true"){
      (document.getElementById("Welcome") as HTMLElement).innerHTML="Hello";
      //(document.getElementById("logoutButton")as HTMLButtonElement).hidden=false;
      //this.UserloggedIn="true";
  }
  else{
    (document.getElementById("Welcome") as HTMLElement).innerHTML="Hello user";
    
  }
    
  }
  /**Route(){
    console.log("on route"+ this.UserloggedIn);
    if(this.UserloggedIn=="true"){
    this.router.navigate(['/profile']);}
    else{
      this.router.navigate(['/registration']);
    }
  }**/
  logout(e:Event){
    e.preventDefault();
    localStorage.clear;
    (document.getElementById("logoutButton") as HTMLButtonElement).hidden=true;
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
