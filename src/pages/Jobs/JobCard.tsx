import styled from "styled-components";
import Button from "../../components/Button/Button";
import { Job } from "../../types/jobs";

type UserCardProps = {
  job: Job;
};

const JobCard = ({ job }: UserCardProps) => {
  return (
    <Card>
      <Salary>${job.price}/month</Salary>
      <h2>{job.title}</h2>
      <Description>{job.description}</Description>
      <CardBottom>
        <Type>{job.type}</Type>
        <Button onClick={() => console.log("Clicked")}>View</Button>
      </CardBottom>
    </Card>
  );
};

export default JobCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px;
  width: 250px;
`;

const Salary = styled.p`
  font-size: 11px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 12px;
  margin-top: 10px;
`;

const Type = styled.p`
  font-size: 12px;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-top: 1px solid black;
  padding-top: 10px;
`;
