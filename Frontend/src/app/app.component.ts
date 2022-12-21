
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { user } from 'src/models/user.model';

import { Component ,ComponentFactoryResolver,  ViewChild,  ElementRef, ViewContainerRef} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'OnlinePharmacy';
  @ViewChild('container', { read: ViewContainerRef })  
  UserloggedIn=localStorage.getItem("UserLoggedin");
  UserName=localStorage.getItem("Username");
  
  container!: ViewContainerRef;
  constructor(private router:Router){}
  logout(e:Event){
    e.preventDefault();
    localStorage.clear;
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
