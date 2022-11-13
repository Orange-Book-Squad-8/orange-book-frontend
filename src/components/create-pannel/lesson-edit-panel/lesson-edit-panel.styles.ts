import styled from 'styled-components';

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

export const DashboardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  gap: 1px;
`;

export const DashboardListHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 0.3rem 0;
  background-color: cadetblue;
  position: sticky;
  top: 0;
  font-size: 0.8rem;
`;

export const LessonActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50px;
  flex-grow: 0;
  gap: 1px;
  padding: 0 10px;
`;


export const DashboardPanel = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: lightyellow;
  flex-grow: 2;
  overflow: hidden;
`;
