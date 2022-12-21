import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/models/profile.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  constructor(private userService: UserService){
    //this.userdata={name:"Mariam",email:"mariamtarek51@gmail.com",phone:"0123456789",address:"22 Miami",age:17};







  }

  userdata: Profile = new Profile("", "", "", "", 0);

  ngOnInit(): void {
    let email = localStorage.getItem("Email");
    if(email == null) email = "";
    this.userService.getProfile("sleemnorah@yahoo.com").subscribe(response => {
      console.log(response);
      
      this.userdata = response
    });
  }



}
