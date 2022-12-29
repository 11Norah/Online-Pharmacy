import { Component,OnInit } from '@angular/core';
import { Profile } from 'src/models/profile.model';

@Component({
  selector: 'app-editdatapage',
  templateUrl: './editdatapage.component.html',
  styleUrls: ['./editdatapage.component.css']
})
export class EditdatapageComponent implements OnInit{  


  userdata: Profile = new Profile("","", "", "", "", 0,"");
  fullname:string="";
  
  ngOnInit(): void {
    
    let email = localStorage.getItem("Email");
    if(email == null) email = "";
    this.fullname =localStorage.getItem("UserName")!;
    
    var splitted = this.fullname.split(" ", 3); 
    this.userdata.fname=splitted[0];
    
    this.userdata.lname=splitted[1];
    this.userdata.birthdate=localStorage.getItem("UserBirth")!;
    

    this.userdata.age=+localStorage.getItem("UserAge")!;
    this.userdata.address=localStorage.getItem("UserAddress")!;
    this.userdata.phoneNumber=localStorage.getItem("UserPhone")!;
  
    
  }
   updatedata(fname:string,lname:string,phone:string,date:string,address:string){ 
    
    //set items in local storage to the entered values 
    localStorage.setItem("UserName",fname+""+lname);
    localStorage.setItem("UserPhone",phone);
    localStorage.setItem("UserBirth",date);
    localStorage.setItem("UserAddress",address);

 
    
    


    //request to get age from back 



    //val age=response;
   // localStorage.setItem("UserAge",age);



      //update userdata info to send it to the back
      this.userdata.fname=fname;
    
      this.userdata.lname=lname;
      this.userdata.birthdate=date;
  
      this.userdata.address=address;
      this.userdata.phoneNumber=phone;
      //send user data to back 
    
    

   
   
  }

}
