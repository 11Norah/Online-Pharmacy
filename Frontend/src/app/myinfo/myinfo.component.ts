import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/models/profile.model';
import { User } from 'src/models/user.model';
import { ProductService } from 'src/services/product.service';
import { UserService } from 'src/services/user.service';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {
 
  constructor(private userService: UserService, private productservice:ProductService){
    //this.userdata={name:"Mariam",email:"mariamtarek51@gmail.com",phone:"0123456789",address:"22 Miami",age:17};







  }

  userdata: Profile = new Profile("", "", "", "", 0);
  
  ngOnInit(): void {
    let email = this.productservice.UserMail;
    console.log("usermail in info :"+email);
    if(email == null) email = "";
    this.userService.getProfile(email).subscribe(response => {
      console.log(response);
      
      this.userdata = response
    });
    
  }



}
