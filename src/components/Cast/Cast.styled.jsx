import styled from 'styled-components';

export const CastCard = styled('img')`
    width: 240px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const CastListItem = styled('ul')`
    list-style-type: none;
    padding: 0px;
`;

export const CastList = styled('div')`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 0px;
`;
