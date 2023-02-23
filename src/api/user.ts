import axios from "axios";
import { createUserType, LoginUserType, User } from "../types/user";

const USERS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/user";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(USERS_API_URL);
  return response.data.data;
};

export const createUser = async (user: createUserType): Promise<User> => {
  const response = await axios.post(USERS_API_URL, user);
  return response.data;
};

export const loginUser = async (loginUser: LoginUserType) => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loginUser;
    const userChecker = (u: LoginUserType) =>
      u.email === email && u.password === password;
    const existingUser = users.find(userChecker);
    existingUser ? resolve(existingUser) : reject("Invalid");
  });
};
