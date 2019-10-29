import { User, UserInputDTO } from "../interfaces/User";
import Cipher from "../utils/cipher";
import UserModel from "../models/User";

export default class UserService {
  public static async register(userInput: UserInputDTO): Promise<User> {
    // Cipher the password
    const password = await Cipher.cipherPassword(userInput.password);

    // Create and save the user in database
    const createdUser = new UserModel({ email: userInput.email, password });
    return createdUser.save();
  }

  public static async login(userInput: UserInputDTO): Promise<boolean> {
    const response = await UserModel.findOne({ email: userInput.email }, "password");
    return Cipher.validatePassword((response && response.password) || "", userInput.password);
  }
}
