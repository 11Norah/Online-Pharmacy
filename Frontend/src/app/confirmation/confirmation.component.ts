import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(private router:Router, private userService: UserService){}
  ngOnInit(){
    var u=document.getElementById("demo") as HTMLElement;
    u.innerHTML="Time Left: 10 minutes ";

/*
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
});*/
  }
 confirmation(e: Event){
  e.preventDefault();
  var x=document.getElementById("pin") as HTMLInputElement;
  console.log(x);
  let email = localStorage.getItem('UserMail');
  console.log(email);
  if(email == null) email = "";
  this.userService.activate(email, x.value).subscribe(response => {
    if(response == 1) {
      alert("The entered token is incorrect! Check your email for the correct code.");
    }
    else if(response == 2) {
      alert("The enetered token is Expired! Click Resend Button.")
    }
    else if(response == 3) {
      this.router.navigate(['/bestseller']);
    }
  })
  
 }
 resend(e: Event){
  e.preventDefault();
  let email = localStorage.getItem('UserMail');
  console.log("EMAIL: " + email);
  if(email == null) email = "";
    this.userService.resendCode(email).subscribe(response => alert("Code is successfully sent!"));
 }
}
