import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #fda031;
  margin-top: 16px;
  margin-bottom: 24px;
  background-color: #fd8e0a;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #fda031;
  }
`;

export default Button;
