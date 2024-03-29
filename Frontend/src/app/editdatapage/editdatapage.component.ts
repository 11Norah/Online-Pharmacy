import { Component,OnInit } from '@angular/core';
import { Profile } from 'src/models/profile.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-editdatapage',
  templateUrl: './editdatapage.component.html',
  styleUrls: ['./editdatapage.component.css']
})
export class EditdatapageComponent implements OnInit{  

  constructor(private userService: UserService) {}


  userdata: Profile = new Profile(0, "", "", "", "", "", "", 0);
  fullname:string="";
  
  ngOnInit(): void {
    var userinfo=localStorage.getItem('UserInfo')?localStorage.getItem('UserInfo'):"";
    console.log(userinfo);
    if(userinfo!=null)
    this.userdata=JSON.parse(userinfo);
    
    
  
    
  }
   updatedata(e: Event, fname:string,lname:string,phone:string,date:string,address:string){ 
    
    //set items in local storage to the entered values 
    //got age from backend // 
    //var age=response
    //then put it in userinfo
    e.preventDefault();

     localStorage.setItem("UserInfo",'{"id":'+this.userdata.id+',"firstName":'+
    '"'+fname+'"'+',"lastName":'+'"'+lname+'"'+',"email":'+'"'+this.userdata.email+'","phoneNumber":'+'"'+phone+'"'+
    ',"address":'+'"'+address+'"'+',"birthDate":'+'"'+date+'"'+',"age":21}');  

    console.log(this.userdata.birthDate);

   //send userdataobject to the backend
    this.userService.editProfile(this.userdata).subscribe(response => {
      console.log("RESPONSE: " + response);
      localStorage.setItem("UserInfo",'{"id":'+this.userdata.id+',"firstName":'+
    '"'+fname+'"'+',"lastName":'+'"'+lname+'"'+',"email":'+'"'+this.userdata.email+'","phoneNumber":'+'"'+phone+'"'+
    ',"address":'+'"'+address+'"'+',"birthDate":'+'"'+date+'"'+',"age":' + response + "}");
      });
    
    

   
   
  }

}
