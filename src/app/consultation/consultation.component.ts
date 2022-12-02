import { Component } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent {
route:any;
  title = 'pharmacy';
  selection :number=-1
  treatment:string=''

click(diagnosis : number){
  this.selection=diagnosis;
  if(diagnosis==0){this.treatment="Flurest tab \n 1 tablet 3 times daily"}
  
  else if(diagnosis==1){this.treatment="Farcolin tab \n 1 tablet 3 times daily"}
  console.log(this.selection)// 👉️ "Initial value"
}
}
