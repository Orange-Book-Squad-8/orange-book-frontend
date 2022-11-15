import styled from 'styled-components';

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