import { User } from "./User";

export class Reclamation {
    id! : Number;
    files!: string;
    content!: string;
    status!: string;
    dateReclamation! : Date;
    users! : User;
}

