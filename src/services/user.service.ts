import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const createUser = async (payload: RegisterPayload) => {
  const { name, email, password } = payload;

  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  const isUser = await User.findOne({ email });
  if (isUser) throw new Error("user email already exist's");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("enter correct credentials");

  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password as string
  );
  if (!isPasswordCorrect) throw new Error("enter correct credentials");

  const token = jwt.sign({ Email: email }, process.env.JWT_SECRET as string);
  return token;
};
