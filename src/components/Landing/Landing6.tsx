import styled from 'styled-components';

const Landing6 = () => {
  return (
    <Landing6Container>
      <LandingTop>
        <Info>문제풀이</Info>
        <TitleContainer>
          <Title>자체 코드블록, 플랫폼 별 문제풀이 난이도 통합</Title>
          <Title>임시저장 기능으로 언제든 다시 풀 수 있게</Title>
        </TitleContainer>
        <Text>
          문제풀이 등록은 최대 10개까지 코드블록과 메모장을 자유롭게 사용할 수
          있어요.
        </Text>
      </LandingTop>
    </Landing6Container>
  );
};

const Landing6Container = styled.article`
  width: 100%;
  padding: 5.4rem 19.1rem 73.3rem;

  background-size: cover; /* 이미지가 확대되지 않고 전체에 맞도록 조정 */
  background-image: url('/src/assets/img/img_landing6_bg.png'); /* 이미지 경로 */
  background-repeat: no-repeat; /* 이미지 반복 안되도록 설정 */
`;

const LandingTop = styled.div`
  text-align: center;
`;

const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 11.2rem;
  height: 4.7rem;
  margin: 0 auto;

  border-radius: 2.5rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.white};
`;

const TitleContainer = styled.div`
  margin: 2.8rem 0 3.6rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_34};
  color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.landing_regular_20};
  color: ${({ theme }) => theme.colors.white};
`;

export default Landing6;
