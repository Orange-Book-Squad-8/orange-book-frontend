import styled from 'styled-components';


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


export const DashboardFilterBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.primary};;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const InputNameFilter = styled.input`
  border-radius: 3px;
  background-color: ${({ theme }) => theme.neutral};;
  border: 1px solid ${({ theme }) => theme.primaryDarker};

  :focus {
    border: 0px;
  }
`;