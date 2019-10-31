import dotenv from "dotenv";
import { Service } from "typedi";

import { getEnvVarOrThrow } from "../utils/getEnvVar";

export interface ConfigData {
  NODE_ENV: string;
  MONGODB_URI: string;
  SECRET_KEY_JWT: string;
}

@Service()
export default class Config {
  private config: ConfigData;

  constructor() {
    const envFound = dotenv.config();
    if (!envFound) {
      // This error should crash whole process
      throw new Error("⚠️  Couldn't find .env file  ⚠️");
    }

    // Set the NODE_ENV to 'development' by default
    this.config = {
      NODE_ENV: process.env.NODE_ENV || "development",
      MONGODB_URI: getEnvVarOrThrow("MONGODB_URI"),
      SECRET_KEY_JWT: getEnvVarOrThrow("SECRET_KEY_JWT"),
    };
  }

  get(): ConfigData {
    return this.config;
  }
}
