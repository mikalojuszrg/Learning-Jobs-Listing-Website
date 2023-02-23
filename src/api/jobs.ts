import axios from "axios";
import { createJobType, Job } from "../types/jobs";

const JOBS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/jobs";

export const fetchJobs = async (): Promise<Job> => {
  const response = await axios.get(JOBS_API_URL);
  return response.data.data;
};

export const createJob = async (job: createJobType): Promise<Job> => {
  const response = await axios.post(JOBS_API_URL, job);
  return response.data;
};
