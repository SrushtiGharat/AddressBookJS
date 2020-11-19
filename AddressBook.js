//Contact class
class Contact
{
    get firstName(){return this._firstName;}

    set firstName(firstName)
    {
        let regex_firstName = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(regex_firstName.test(firstName))
            this._firstName = firstName;
        else
            throw "First Name is invalid";
    }
    
    get lastName(){return this._lastName;}

    set lastName(lastName)
    {
        let regex_lastName = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(regex_lastName.test(lastName))
            this._lastName = lastName;
        else
            throw "Last Name is invalid";
    }

    get address(){return this._address;}

    set address(address)
    {
        let regex_address = RegExp("^[A-Za-z0-9-]{4,}$");
        if(regex_address.test(address))
            this._address= address;
        else
            throw "Address is invalid";
    }

    get city(){return this._city;}

    set city(city)
    { 
        let regex_city = RegExp("^[A-Za-z]{4,}$");
        if(regex_city.test(city))
            this._city= city;
        else
            throw "City is invalid";
    }

    get state(){return this._state;}

    set state(state)
    {
        let regex_state = RegExp("^[A-Za-z]{4,}$");
        if(regex_state.test(state))
            this._state=state;       
        else
            throw "State is invalid";
    }   

    get zip(){return this._zip;}

    set zip(zip)
    {
        let regex_zip = RegExp("^[1-9][0-9]{2}[ ]?[0-9]{3}$");
        if(regex_zip.test(zip))
            this._zip= zip;
        else
            throw "Zip is invalid";
    }
   
    get phoneNumber(){return this._phoneNumber;}

    set phoneNumber(phoneNumber)
    { 
        let regex_phone = RegExp( "^[1-9][0-9]{1,2}[ ][1-9][0-9]{9}$");
        if(regex_phone.test(phoneNumber))
            this._phoneNumber= phoneNumber;
        else
            throw "Phone No is invalid";
    }

    get emailId(){return this._email;}

    set emailId(emailId)
    {
        let emailValid = RegExp("^[a-z0-9A-Z]+([._+-][a-z0-9A-Z]+)*[@][a-z0-9A-Z]+[.][a-zA-Z]{2,3}(.[a-zA-Z]{2})?$");
        if(emailValid.test(emailId))
            this._emailId= emailId;
        else
            throw "Email Id is invalid";
    }

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
        "\nCity : "+this.city+"\nState : "+this.state+"\nZip : "+this.zip+"\nPhone : "+this.phoneNo+"\nEmail : "+this.email;
    }
}


try
{
    let contactIndex = 0;

    //Adding contacts
    let addressBookArray = new Array();
    
    Add(new Contact("Ram","Singh","2-GreenTower","Mumbai","Maharashtra","400500","91 7028827730","ram@gmail.com"));
    Add(new Contact("Seeta","Verma","3-TilakNagar","Ahmedabad","Gujarat","501302","91 9823439977","seeta@gmail.com"));
    Add(new Contact("Reeta","Yadav","Gokuldham","Bangalore","Karnataka","402306","91 8888823459","reeta@gmail.com"));
    Add(new Contact("Shyam","Pandey","OrchidsColony","Mumbai","Maharashtra","400600","91 9234652738","shyam@gmail.com"));

    addressBookArray.forEach(contact => console.log(contact.toString()+"\n"));

    //Add Contacts function
    function Add(contact)
    {
        CheckDuplicate(contact);
        addressBookArray.push(contact);
    }

   //Check duplicate function
   function CheckDuplicate(contact)
   {
       if(addressBookArray.find(c => c.firstName == contact.firstName && c.lastName == contact.lastName))
           throw "Contact already exixts";
   }

    //Edit contacts
    contactIndex = addressBookArray.findIndex(c => c.firstName == "Ram" && c.lastName == "Singh");
    if(contactIndex == -1)
        throw "Contact not present";
    addressBookArray[contactIndex].phoneNo = "91 9130829963";
    console.log("Contact editted successfully");

    //Delete contact
    contactIndex = addressBookArray.findIndex(c => c.firstName == "Seeta" && c.lastName == "Verma");
    if(contactIndex == -1)
        throw "Contact not present";
    addressBookArray.splice(contactIndex,1);
    console.log("Contact deleted successfully");

    //Get total contacts
    let totalContacts = addressBookArray.length;
    console.log("\nTotal contacts in address book : "+totalContacts);

    //Search person by city or state
    console.log("Search person by city or state : ")
    contactIndex = addressBookArray.filter(contact => contact.city == "Mumbai"||contact.state == "Maharashtra").findIndex(c => c.firstName == "Ram" && c.lastName == "Singh");
    if(contactIndex == -1)
        throw "Contact not present";
    console.log(addressBookArray[contactIndex].toString()+"\n");

    //Get contacts by city or state
    console.log("Contacts by city or state : ")
    addressBookArray.filter(contact => contact.city == "Mumbai"||contact.state == "Maharashtra").forEach(contact => console.log(contact.toString()+"\n"));
}
catch(e)
{
    console.error(e);
}

