export class AddressBookModel {
    address: string = "";
    state: string = "";
    zipCode:number=0;
    city: String ="";
    name: String ="";
    phoneNumber: number = 0;
    constructor(address: string, state: string, zipCode: number, city: string, name: string, phoneNumber: number){
        this.address = address;
        this.state = state;
        this.zipCode = zipCode;
        this.city = city;
        this.name = name;
        this.phoneNumber = phoneNumber;
        
    }

}