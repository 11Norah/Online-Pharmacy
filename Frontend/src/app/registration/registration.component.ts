import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  ValidateRequest(){
    var username=document.getElementById("user") as HTMLInputElement;
    if(username.value==""){
      alert("All fields should should be filled out");
    
    }
  }
  toggle(){
    
    var x=document.getElementById("pass") as HTMLInputElement;
    var y=document.getElementById("tooglePassword") as HTMLButtonElement;
    console.log("Password now "+ x.type );
    y.addEventListener('click', function (e) {
      // toggle the type attribute
      console.log("evenent "+e.target +e);
      const type = x.type === 'password' ? 'text' : 'password';
      x.type=type;
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
  });
    if(x.type=="password"){
        x.type="text";
        y.textContent="fa fa-eye slash";
    }
    else if(x?.className=="text"){
      x.type="password";
    }
  }
}
