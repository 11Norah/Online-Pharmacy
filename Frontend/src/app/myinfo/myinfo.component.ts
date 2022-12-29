import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/models/profile.model';
import { User } from 'src/models/user.model';
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

  userdata: Profile = new Profile("","" ,"", "", "", 0,"");
  fullname:string ="";
  
  ngOnInit(): void {
    let email = localStorage.getItem("Email");
    if(email == null) email = "";
    this.fullname=localStorage.getItem("UserName")!;
    var splitted = this.fullname.split(" ", 3); 
    this.userdata.fname=splitted[0];
    this.userdata.lname=splitted[1]
    //alert(this.userdata.name)

    this.userdata.age=+localStorage.getItem("UserAge")!;
    this.userdata.address=localStorage.getItem("UserAddress")!;
    this.userdata.phoneNumber=localStorage.getItem("UserPhone")!;
    this.userdata.email=localStorage.getItem("UserMail")!;
    
    /*this.userService.getProfile(email).subscribe(response => {
      console.log(response);
      
      this.userdata = response
    });*/
    
  }



}
