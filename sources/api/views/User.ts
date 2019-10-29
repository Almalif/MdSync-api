import User from "../../models/User";

export interface User {
  email: string;
}

export interface Token {
  token: string;
}

export default class UserView {
  public static formatUser(user: User): User {
    return {
      email: user.email,
    };
  }

  public static formatToken(token: string): Token {
    return {
      token,
    };
  }
}
