import styled from 'styled-components';

export const DashboardFilterBar = styled.div`
  display: flex;
  flex-direction: row;
  border-color: black;
  border-style: solid;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
`;
export const InputNameFilter = styled.input`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.neutral};;
  border: 1px solid ${({ theme }) => theme.primaryDarker};

  :focus {
    border: 0;
  }
`;

export const DashboardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

export const DashboardListHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 0.3rem 0;
  background-color: ${({ theme }) => theme.secondary};
  position: sticky;
  top: 0;
  font-size: 0.8rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
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
  border: 2px solid ${({ theme }) => theme.secondaryDarker};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};;
  flex-grow: 2;
  color: ${({ theme }) => theme.secondary};
  overflow: hidden;
`;
