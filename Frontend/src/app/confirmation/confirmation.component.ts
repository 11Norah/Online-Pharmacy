import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(private router:Router){}
  ngOnInit(){
    var u=document.getElementById("demo") as HTMLElement;
    u.innerHTML="Time Left: ";


var x = setInterval(function() {

  var d = new Date(); //get current time
  var seconds = d.getMinutes() * 60 + d.getSeconds(); 
  var fiveMin = 60 * 5; //five minutes is 300 seconds!
  var timeleft = fiveMin - seconds % fiveMin; 
   var min = Math.floor((timeleft)  / 60) ;
  var seconds= timeleft % 60; //formart seconds back into mm:ss 
 
  (document.getElementById("demo") as HTMLElement).innerHTML = min +" Min " +":"+seconds +" Sec";
    console.log(timeleft);
  // If the count down is over, write some text 
  if (timeleft<6) {
    clearInterval(x);
    (document.getElementById("demo") as HTMLElement).style.color="red";
    (document.getElementById("demo") as HTMLElement).innerHTML = "EXPIRED";
  }
});
  }
 confirmation(){
  var x=document.getElementById("pin") as HTMLInputElement;
  console.log(x);
  //this.router.navigate(['/bestseller']);
 }
 resend(){

 }
}
