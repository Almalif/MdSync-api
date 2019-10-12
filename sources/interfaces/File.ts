import { User } from "./User";

export interface File {
  _id: string;
  name: string;
  content: string;
  owners: User[];
}

export interface FileInputDTO {
  name: string;
}
