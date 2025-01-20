import { User } from "./User";

export class LeaveRequest {
    id! : Number;
    type!: string;
    start_date!: Date;
    end_date!: Date;
    files!: string;
    status! : string;
    users!: User;
  }