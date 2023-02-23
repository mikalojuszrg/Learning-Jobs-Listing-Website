export type User = {
  createdAt: string;
  email: string;
  first_name: string;
  last_name: string;
  id: number;
  updatedAt: string;
  password: string;
};

export type createUserType = Omit<User, "createdAt" | "updatedAt" | "id">;

export type LoginUserType = Pick<User, "email" | "password">;
