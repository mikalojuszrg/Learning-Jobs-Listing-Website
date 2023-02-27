import styled from "styled-components";
import { useJobs } from "../../hooks/job";
import JobCard from "./JobCard";
import JobModal from "./JobModal";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();

  if (isLoading) {
    return <div>Jobs are loading...</div>;
  }

  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet</div>;
  }

  return (
    <div>
      <Title>JOB LISTINGS</Title>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <JobModal />
    </div>
  );
};

export default Jobs;

const Title = styled.h1`
  text-align: center;
`;
