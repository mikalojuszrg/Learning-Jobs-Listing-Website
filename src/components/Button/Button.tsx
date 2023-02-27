import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  onClick?: () => void;
  type?: string;
  children: ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: 0;
  background-color: black;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
