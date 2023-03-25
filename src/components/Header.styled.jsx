import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  font-size: 20px; 
 
  color: black;

  &.active {
    color: orange;
  }
`;

export const Header = styled.header`
  height: 40px;
  background-color: grey;
`;