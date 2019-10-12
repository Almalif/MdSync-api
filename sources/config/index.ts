import dotenv from "dotenv";

import { getEnvVarOrThrow } from "../utils/getEnvVar";

export interface Config {
  NODE_ENV: string;
  DATABASE_URL: string;
}

export default (): Config => {
  const envFound = dotenv.config();
  if (!envFound) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }

  // Set the NODE_ENV to 'development' by default
  return {
    NODE_ENV: process.env.NODE_ENV || "development",
    DATABASE_URL: getEnvVarOrThrow("DATABASE_URL"),
  };
};
