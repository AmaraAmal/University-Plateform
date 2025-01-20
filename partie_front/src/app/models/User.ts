import { Role } from "./Role";

export class User {
    id! : number;
    firstName! : string;
    lastName! : string;
    email! : string;
    phoneNumber! : string;
    password! : string;
    role!: Role;
}