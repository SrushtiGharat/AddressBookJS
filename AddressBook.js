class Contact
{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNo;
    email;

    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }

    toString()
    {
        return "First Name : "+this.firstName+"\nLastName : "+this.lastName+"\nAddress : "+this.address+
        "\nCity : "+this.city+"State : "+this.state+"\nZip : "+this.zip+"\nPhone : "+this.phoneNo+"\nEmail : "+this.email;
    }
}

let contact = new Contact("Ram","Singh","B-901 Green Tower","Mumbai","Maharashtra","400500","7028827730","ram@gmail.com");
console.log(contact.toString());