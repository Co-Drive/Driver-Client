import styled from 'styled-components';
import { BtnInformation } from '../../assets';

const TodaySolve = () => {
  const data = [{ value: 1 }];

  const maxProblems = 7;
  const solvedProblems = 1;

  const progrss = (solvedProblems / maxProblems) * 100;

  const chartData = [{ name: 'Sovled', value: solvedProblems }];

  return (
    <Container>
      <TitleContainer>
        <Title>오늘 문제풀이</Title>
        <BtnInformation />
      </TitleContainer>
      <Subtitle>달성 가능한 목표를 세우고, 매일 설천해보세요</Subtitle>
    </Container>
  );
};

export default TodaySolve;

const Container = styled.div`
  width: 100%;
  max-width: 29.7rem;

  padding: 3.4rem 3.4rem 7.2rem;

  background-color: rebeccapurple;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: bisque;
`;

const Title = styled.h2`
  background-color: coral;
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.p`
  background-color: cornflowerblue;
`;
