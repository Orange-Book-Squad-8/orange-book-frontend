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
`;


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

export const LessonEditDashboardContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: wheat;
  padding: 4px;
  border-radius: 5px;
  overflow: hidden;
  gap: 1px;
  min-width: 30vw;
`;

export const LessonEditDashboardForm = styled.form`
  padding: 4px;
  display: flex;
  flex-direction: column;
`;