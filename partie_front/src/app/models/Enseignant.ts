export class Enseignant {
    firstName! : string;
    lastName! : string;
    phoneNumber! : string;
    mail! : string;

    constructor(firstName: string, lastName: string, phoneNumber: string, mail: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.mail = mail;
    }
}

