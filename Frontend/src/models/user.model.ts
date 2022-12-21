<<<<<<< HEAD
export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public birth_date: string;
    public phoneNumber: string;
    public pDrug: boolean;
    public address: string;

    constructor(firstname: string, lastname: string, email: string, password: string, birth_date: string, phoneNumber: string, pDrug: boolean, address: string) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.password = password;
        this.birth_date = birth_date;
        this.phoneNumber = phoneNumber;
        this.pDrug = pDrug;
        this.address = address;
=======
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

>>>>>>> Milestone2
    }
}