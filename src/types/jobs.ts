import { EntityMeta } from "./entity";
import { User } from "./user";

export type JobType = "freelance" | "partTime" | "fullTime";

export type createJobType = {
  title: string;
  price: number;
  type: JobType;
  starting_from: string;
  has_drivers_license: boolean;
  user_id: User["id"];
  description: string;
};

export type Job = createJobType & EntityMeta;
