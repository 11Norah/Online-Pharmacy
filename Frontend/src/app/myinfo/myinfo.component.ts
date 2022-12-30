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
   
  }


  userdata: Profile = new Profile(0, "", "", "", "", "", "", 0);

  ngOnInit(): void {
    var userinfo=localStorage.getItem('UserInfo')?localStorage.getItem('UserInfo'):"";
    console.log(userinfo)
    if(userinfo!=null)
    this.userdata=JSON.parse(userinfo);




    

  }
  get userinformation():Profile{
    return this.userdata;
  }



}