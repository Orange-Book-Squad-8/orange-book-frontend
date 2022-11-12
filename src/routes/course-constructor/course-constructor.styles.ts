import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
  height: 100vh;
  gap: 5px;
`;


export const DashboardPanel = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: lightyellow;
  flex-grow: 2;
  overflow: hidden;
`;

export const DashboardInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: lightyellow;
  flex-grow: 1;
  min-width: 360px;
  overflow-y: scroll;
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
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;
