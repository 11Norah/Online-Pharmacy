import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  UserSignUp: any;
  constructor(private router: Router ) {}
  
 
  ValidateRequest(){
    
    
    var usermail=document.getElementById("userSignIn") as HTMLInputElement;
    var password=document.getElementById("passSignIn") as HTMLInputElement;
    if(usermail.value=="" ||password.value==""){
      alert("All fields should be filled out");
      
    }
    else{
      //back request
      console.log("Entered info : "+ usermail.value ,password.value);
      if(true){
      usermail.value=""; password.value="";
      //show logout button
      //direct to main page
      this.router.navigate(['/bestseller']);
      
    }
      else{
            alert("Invalid Email !Try again.")
      }
    }
  }
  register(){
    var username=document.getElementById("userSignUp") as HTMLInputElement;
    var pass1=document.getElementById("passSignUp") as HTMLInputElement;
    var pass2=document.getElementById("passSignUp2") as HTMLInputElement;
    var mail=document.getElementById("mail") as HTMLInputElement;
    var userphone=document.getElementById("phone") as HTMLInputElement;
    var age=document.getElementById("age") as HTMLInputElement;
    var address=document.getElementById("address") as HTMLInputElement;
    console.log("Registeration info :"+ username.value ,pass1.value ,pass2.value ,mail.value,userphone.value,age.value,address.value)
    
     if(username.value=="" || pass1.value=="" || pass2.value=="" ||mail.value==""||userphone.value==""||age.value==""||address.value==""){
      alert("All fields should be filled out");
    }
    else if(pass1.value != pass2.value){
      alert("Passwords aren't identical ,Try Again!");
    }
    else{

      //back request
        this.router.navigate(['/confirm']);
      username.value=""; 
      pass1.value=""; pass2.value=""; mail.value="";userphone.value="";age.value="";address.value="";
      
    }
  
  
  }
  toggle(){
    
    var x=document.getElementById("pass") as HTMLInputElement;
    var y=document.getElementById("tooglePassword") as HTMLButtonElement;
    console.log("Password now "+ x.type );console.log("Password now in ngggg"+ x.type );
    if(y){ y.addEventListener('click', function (e) {
      // toggle the type attribute
      console.log("evenent "+e.target +e);
      const type = x.type === 'password' ? 'text' : 'password';
      x.type=type;
      // toggle the eye slash icon
      //this.classList.toggle('fa-eye-slash');
  });}
   
  }
}





