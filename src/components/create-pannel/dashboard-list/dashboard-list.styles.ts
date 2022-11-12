import styled from 'styled-components';

export const DashboardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
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