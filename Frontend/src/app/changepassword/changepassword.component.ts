import { Component, ViewChild } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})

export class ChangepasswordComponent {

  constructor(private userService: UserService) {}

  @ViewChild('newpass') newpassinput: any;
  @ViewChild('oldpass') oldpassinput: any;
  oldpassword=""
  newpassword=""
  validationmessage=""; 
  checkoldpassword: boolean = false;
  getpasswords(e: Event, oldpass:string,newpass:string){  
    e.preventDefault();
    this.oldpassword=oldpass;
    this.newpassword=newpass;
    let email = localStorage.getItem("UserMail")!;

    //if response was false,alert the user and clear newpassword and old password inputs 
    this.userService.login(email, this.oldpassword).subscribe(response => {
      console.log("RESPONSE" + response);
      if(response == 3) this.checkoldpassword = true;
      else this.checkoldpassword = false;

      if (!this.checkoldpassword){
        this.newpassinput.nativeElement.value = '';
        this.oldpassinput.nativeElement.value = '';
        alert("your old Password is incorrect")
        
      }else {
        this.userService.updatePassword(email, this.newpassword).subscribe(response => {
          if(response) alert("changed your password succefully !");
          this.newpassinput.nativeElement.value = '';
          this.oldpassinput.nativeElement.value = '';
        })
  
      }

    })

    
   
    
    
    
  }
 




  


}
