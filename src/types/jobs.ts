export type Job = {
  title: string;
  description: string;
  price: number;
  type: string;
  starting_from: string;
  drivers_license: boolean;
  user_id: number;
  id: number;
  createdAt: string;
  updatedAt: string;
};

export type createJobType = Omit<
  Job,
  "createdAt" | "updatedAt" | "id" | "user_id"
>;
