import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(private router:Router){}
 confirmation(){
  var x=document.getElementById("pin") as HTMLInputElement;
  console.log(x);
  //this.router.navigate(['/bestseller']);
 }
}
