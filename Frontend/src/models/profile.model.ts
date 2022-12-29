export class Profile{
    public fname:string ;
    public lname:string ;
    public email:string;
    public phoneNumber:string; 
    public address:string;
    public age:number;
    public birthdate:string;



    constructor(firstname:string,lasttname:string,useremail:string,phonenum:string,addressuser:string,user_age:number,birth:string){ 

        this.fname=firstname;
        this.lname=lasttname;
        this.email=useremail;
        this.phoneNumber=phonenum;
        this.address=addressuser;
        this.age=user_age;
        this.birthdate=birth;
    }
}