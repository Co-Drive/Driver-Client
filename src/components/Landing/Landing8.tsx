import styled from 'styled-components';
import {
  LandingDriver,
  LandingSolveImg1,
  LandingSolveImg2,
  LandingSolveImg3,
  LandingSolveImg4,
} from '../../assets';

const Landing8 = () => {
  return (
    <Landing8Container>
      <LandingTop>
        <Info>문제풀이 스터디 그룹</Info>
        <TitleContainer>
          <Title>혼자 꾸준히 하기는 힘든데 스터디는 부담스러웠다면?</Title>
          <Title>코드라이브에서 원하는 대로 설정</Title>
        </TitleContainer>
        <Text>
          사용언어, 인원 수, 그룹 공개여부 모두 커스터마이징 할 수 있어요.
        </Text>
      </LandingTop>
      <LandingBottom>
        <ImageBox src={LandingSolveImg1} alt="문제풀이 이미지1" />
        <ImageBox src={LandingSolveImg3} alt="문제풀이 이미지2" />
        <MergedImageBox src={LandingSolveImg2} alt="문제풀이 이미지3" />
        <ImageBox src={LandingSolveImg4} alt="문제풀이 이미지4" />
        <ImageBox />
        <Driver src={LandingDriver} alt="driver" />
      </LandingBottom>
    </Landing8Container>
  );
};

const Landing8Container = styled.article`
  width: 100%;
  padding: 5.4rem 10rem 15.2rem;

  background-size: cover;
  background-image: url('/src/assets/img/img_landing8_bg.png'); /* 이미지 경로 */
  background-repeat: no-repeat; /* 이미지 반복 안되도록 설정 */
`;

const LandingTop = styled.div`
  margin-bottom: 4.9rem;

  text-align: center;
`;

const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18.8rem;
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

const LandingBottom = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  place-items: center center;

  position: relative;
`;

const ImageBox = styled.img`
  width: 40.4rem;
  height: 24rem;

  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.colors.gray900};
`;

const MergedImageBox = styled(ImageBox)`
  grid-column: 2 / 3;
  grid-row: 1 / 3;

  height: 100%;
`;

const Driver = styled.img`
  position: absolute;
  top: 22rem;
  right: 12.5rem;
`;

export default Landing8;
