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

export const LessonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
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
export const LessonInfoStatsPrimary = styled.div`
  border-right: 1px solid lightgray;
  width: 35%;
  overflow: hidden;
  padding-left: 1rem;
  align-items: center;
  display: flex;
`;
export const LessonInfoStatsSecondary = styled.div`
  padding: 2px;
  border-right: 1px solid lightgray;
  width: 15%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
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
  width: 30vw;
`;

export const LessonEditDashboardForm = styled.form`
  padding: 4px;
  display: flex;
  flex-direction: column;
`;