import { EntityMeta } from "./entity";

export type createUserType = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export type User = createUserType & EntityMeta;

export type LoginUserType = Pick<User, "email" | "password">;
