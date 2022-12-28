import { Component, EventEmitter, Output } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Profile } from 'src/models/profile.model';
import { User } from 'src/models/user.model';
import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  
  constructor(private router: Router, private userService: UserService, private Productservice:ProductService ) {}

  userProfile: Profile = new Profile(0, "", "", "", "", "", "", 0);

  ValidateRequest(e:Event){
    e.preventDefault();
    var usermail=document.getElementById("userSignIn") as HTMLInputElement;
    var password=document.getElementById("passSignIn") as HTMLInputElement;
    if(usermail.value=="" ||password.value==""){
      alert("All fields should be filled out");

    }
    else{
      this.userService.login(usermail.value, password.value).subscribe(response => {
        if(response == 0) { //Sign up required
          alert("Email not found!");
        }
        else if(response == 1) {
          alert("You entered an incorrect password!");
        }
        else if(response == 2) {
          confirm("You haven't activated your account!");
          this.router.navigate(['/confirm']);
        }
        else if(response == 3) {
          //this.Productservice.UserMail=usermail.value;
          //console.log("this.Productservice.UserMail in registration:    "+ this.Productservice.UserMail);

          this.userService.getProfile(usermail.value).subscribe(response => {
            console.log(response);
            this.userProfile = response
            });
          localStorage.setItem('UserMail', usermail.value);
          localStorage.setItem('UserLoggedIn',"1");
          //this.Productservice.UserLoggedIn=1;
          //show logout button
        //direct to main page
        this.router.navigate(['/app']);
        console.log("username is"+localStorage.getItem("UserLoggedIn"));
        this.router.navigate(['/bestseller']);
        usermail.value=""; password.value="";
        }
      })
      console.log("Entered info : "+ usermail.value ,password.value);
    }
  }
  register(e:Event){

    var First=document.getElementById("FirstName") as HTMLInputElement;
    var Last=document.getElementById("LastName") as HTMLInputElement;

    var pass1=document.getElementById("passSignUp") as HTMLInputElement;
    var pass2=document.getElementById("passSignUp2") as HTMLInputElement;
    var mail=document.getElementById("mail") as HTMLInputElement;
    var userphone=document.getElementById("phone") as HTMLInputElement;

    var date=document.getElementById("birthdate") as HTMLInputElement;
    var address=document.getElementById("address") as HTMLInputElement;
    console.log("Registeration info :"+ First.value ,Last.value,pass1.value ,pass2.value ,mail.value,userphone.value,date.value,address.value)

     if(First.value=="" || Last.value==""||pass1.value=="" || pass2.value=="" ||mail.value==""||userphone.value==""||date.value==""||address.value==""){

      alert("All fields should be filled out");
    }
    else if(pass1.value != pass2.value){
      alert("Passwords aren't identical ,Try Again!");
    }
    else{

      let status;
      const user: User = new User(First.value, Last.value, mail.value, pass1.value, date.value, userphone.value, false, address.value);
      this.userService.register(user).subscribe(response => {
        status = response;
        if(status) {
          this.userService.getProfile(mail.value).subscribe(response => {
            console.log(response);
            this.userProfile = response;
          });
          localStorage.setItem("UserMail", mail.value);
          localStorage.setItem("UserName",First.value+" "+Last.value);
          
          //this.Productservice.UserMail=mail.value;
          //this.Productservice.UserName=First.value;
          //console.log("user"+ this.Productservice.UserName);
          this.router.navigate(['/confirm']);
          First.value=""; Last.value="";
          pass1.value=""; pass2.value=""; mail.value="";userphone.value="";date.value="";address.value="";
        }
        else {
          alert("You have signed up before!");
        }
      })



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
