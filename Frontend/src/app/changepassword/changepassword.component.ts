import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})

export class ChangepasswordComponent {
  @ViewChild('newpass') newpassinput: any;
  @ViewChild('oldpass') oldpassinput: any;
  oldpassword=""
  newpassword=""
  validationmessage=""; 
  checkoldpassword: boolean = false;
  getpasswords(oldpass:string,newpass:string){  
    this.oldpassword=oldpass;
    this.newpassword=newpass;


    //if response was false,alert the user and clear newpassword and old password inputs 

    if (!this.checkoldpassword){
      this.newpassinput.nativeElement.value = '';
      this.oldpassinput.nativeElement.value = '';
      alert("your old Password is incorrect")
      
    }else {
      this.newpassinput.nativeElement.value = '';
      this.oldpassinput.nativeElement.value = '';
      alert("changed your password succefully !")

    }
   
    
    
    
  }
 




  


}
