import styled from "styled-components";

const Header = styled.div`
  padding: 20px;
  border-bottom: solid 1px #ccc;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 16px;
`;

const CardHeader = (props) => (
  <Header>
    <Title>{props.title}</Title>
  </Header>
);

export default CardHeader;
