import { User } from "./User";

export class News {
    id! : Number;
    title! : string;
    date!: Date;
    content! : string;
    files! : string
    users! : User;
  }