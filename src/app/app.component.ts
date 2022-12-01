import { Router } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { Component ,ComponentFactoryResolver,  ViewChild,  ElementRef, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlinePharmacy';
  @ViewChild('container', { read: ViewContainerRef })  
  container!: ViewContainerRef;
  constructor(private router:Router){}

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

