import User from "../../models/User";

export interface User {
  email: string;
}

export default class UserView {
  public static formatUser(user: User): User {
    return {
      email: user.email,
    };
  }
}
