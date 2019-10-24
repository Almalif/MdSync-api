export interface User {
  _id: string;
  email: string;
  password: string;
}

export interface UserInputDTO {
  email: string;
  password: string;
}
