import Bcrypt from "bcrypt";

const NB_ROUNDS = 10;

export default class Cipher {
  public static async cipherPassword(password: string): Promise<string> {
    return Bcrypt.hash(password, NB_ROUNDS);
  }

  public static async validatePassword(ciphered: string, password: string): Promise<boolean> {
    return Bcrypt.compare(password, ciphered);
  }
}
