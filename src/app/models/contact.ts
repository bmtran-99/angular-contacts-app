interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export class Contact {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    
    constructor() {
        this.id = 0
        this.name = '';
        this.username = '';
        this.email = '';
        this.address = {} as Address;
        this.phone = '';
        this.website = '';
        this.company = {} as Company;
    }
}