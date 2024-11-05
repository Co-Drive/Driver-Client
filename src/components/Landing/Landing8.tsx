import styled from 'styled-components';
import { IcLandingCursor, LandingGroupImg } from '../../assets';

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
        <LandingGroup src={LandingGroupImg} alt="랜딩 그룹 이미지" />
        <IconWrapper>
          <IcLandingCursor />
        </IconWrapper>
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
  display: flex;
  justify-content: center;
  position: relative;
`;

const LandingGroup = styled.img`
  position: relative;

  width: 100%;
  height: auto;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 27rem;
  right: 1rem;
  transform: translate(-50%, -50%);
`;

export default Landing8;
