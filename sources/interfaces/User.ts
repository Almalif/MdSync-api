export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  salt: string;
}

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
}
