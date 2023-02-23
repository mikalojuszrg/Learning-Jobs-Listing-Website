import styled from "styled-components";
import { User } from "../../types/user";
import { getFullName, turnPasswordIntoStars } from "../../utils/string";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Container>
      <Email>{user.email}</Email>
      <p>{getFullName(user.first_name, user.last_name)}</p>
      <p>{turnPasswordIntoStars(user.password)}</p>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Email = styled.p`
  color: #4267b2;
  font-weight: 500;
`;
