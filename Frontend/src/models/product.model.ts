export class Product {
    public product_id: number;
    public name: string;
    public type: string;
    public description: string;
    public image: string;
    public permission: boolean;
    public price: number;
    public rate: number;
    public numOfRates: number

    constructor(id: number, name: string, type: string, description: string, image: string, permission: boolean, price: number, rate: number, numOfRates: number) {
        this.product_id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.image = image;
        this.permission = permission;
        this.price = price;
        this.rate = rate;
        this.numOfRates = numOfRates;
    }
    
}