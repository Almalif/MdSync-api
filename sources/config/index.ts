import dotenv from "dotenv";

export default (): void => {
  // Set the NODE_ENV to 'development' by default
  process.env.NODE_ENV = process.env.NODE_ENV || "development";

  const envFound = dotenv.config();
  if (!envFound) {
    // This error should crash whole process

    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
};
