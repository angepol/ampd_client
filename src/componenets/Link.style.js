import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";

const Link = styled(NavLink)`
  color: #484848;
  text-decoration: none;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #777;
  }
`;

export default Link;
