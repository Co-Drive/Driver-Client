import styled from 'styled-components';
import { IcInformation } from '../../../assets';
import Solver from './Solver';

const TodaysSolver = () => {
  return (
    <TodaysSolverContainer>
      <Header>
        <Title>오늘 문제 푼 팔로워</Title>
        <IcInformation />
      </Header>

      <SolverContainer>
        <Solver />
      </SolverContainer>
    </TodaysSolverContainer>
  );
};

export default TodaysSolver;

const TodaysSolverContainer = styled.article`
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

const Header = styled.header`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  margin-left: 0.6rem;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const SolverContainer = styled.article`
  width: 100%;
  height: 23rem;
  min-width: 29.5rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
