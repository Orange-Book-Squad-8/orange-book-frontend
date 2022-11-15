import styled from 'styled-components';

export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1.25rem;

  @media screen and (min-width: 576px) {
    gap: 4rem;
    padding: 3rem 3.5rem;
  }
`;

export const CommonSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.h3`
  margin-bottom: 1.25rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    text-align: left;
  }

  @media screen and (min-width: 992px) {
    font-size: 3rem;
  }
`;

export const CarrosselTitle = styled(Title)`
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.neutral};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    text-align: left;
  }

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const Illustration = styled.img`
  max-width: 380px;

  @media screen and (min-width: 768px) {
    max-width: 520px;
    width: 50%;
  }

  @media screen and (min-width: 992px) {
    width: 40%;
  }
`;

export const Emphasis = styled.em`
  display: block;
  margin-top: 1.25rem;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.secondaryDarker};
  text-align: center;

  @media screen and (min-width: 576px) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 992px) {
    font-size: 3rem;
  }
`;

export const CarrosselSection = styled.section``;
