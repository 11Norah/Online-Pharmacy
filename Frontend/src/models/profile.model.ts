export class Profile{

    public id: number;
    public firstName:string ;
    public lastName: string;

    public email:string;
    public phoneNumber:string; 
    public address:string;
    public birthDate: string;
    public age:number;
  




    constructor(id: number, firstName: string, lastName: string,useremail:string,phonenum:string,addressuser:string, birthDate: string, user_age:number){ 
        this.id = id;
        this.firstName=firstName;
        this.lastName=lastName;

        this.email=useremail;
        this.phoneNumber=phonenum;
        this.address=addressuser;
        this.birthDate = birthDate;
        this.age=user_age;
       
    }
}