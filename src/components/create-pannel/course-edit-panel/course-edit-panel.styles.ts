import styled from 'styled-components';


export const DashboardPanel = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: lightyellow;
  flex-grow: 2;
  overflow: hidden;
`;


export const DashboardFilterBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-color: black;
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
`;
