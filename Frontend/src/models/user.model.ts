export class user{
    public name:string ;
    public email:string;
    public phone:string; 
    public address:string;
    public age:number;



    constructor(username:string,useremail:string,phonenum:string,addressuser:string,user_age:number){ 
        this.name=username;
        this.email=useremail;
        this.phone=phonenum;
        this.address=addressuser;
        this.age=user_age;

    }
}