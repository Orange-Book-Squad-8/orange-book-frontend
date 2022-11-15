import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2%;
  height: 100vh;
  gap: 5px;
`;


export const DashboardInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primaryDarker};
  flex-grow: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.primary};
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    width: 5px;
    height: 5px;
    border: 1px solid black;
    border-radius: 3px;
  }
`;
