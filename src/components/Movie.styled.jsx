import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieCard = styled('div')`
    display: flex;
`;

export const Description = styled('div')`
    margin-left: 20px;
`;

export const Poster = styled('img')`
    width: 340px;
    height: auto;
`;

export const ListGenres = styled('div')`
    display: flex;
    gap: 30px;
    font-size: 16px;
`;

export const Ul = styled('ul')`
    list-style-type: none;
    padding: 0px;
`;

export const Li = styled('li')`
    margin: 10px;
`;

export const StyledLink = styled(Link)`
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  font-size: 20px;
  color: black; 
`;