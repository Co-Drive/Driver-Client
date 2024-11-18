import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import styled from 'styled-components';
import {
  ArrowRightWhite,
  ImgLanding3Bg,
  LandingCodriveImg,
} from '../../assets';

interface Landing3Props {
  scrollToLanding4: () => void;
}

const Landing3 = ({ scrollToLanding4 }: Landing3Props) => {
  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();

  useMotionValueEvent(scrollY, 'change', () => {
    const windowScrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const scrollRatio = (windowScrollY + viewportHeight) / documentHeight;

    if (scrollRatio > 0.26) {
      scrollAnimation.start({ translateY: 0 });
    } else {
      scrollAnimation.start({ translateY: 300 });
    }
  });

  return (
    <Landing3Container>
      <LandingTop>
        <Info>소개</Info>
        <TitleContainer>
          <Title>깃허브 리퍼지토리 자동 연동, 플랫폼 통합 문제풀이 기능,</Title>
          <Title>
            사용자 맞춤 대시보드 홈, 문제풀이 스터디 그룹, 네카라쿠배 등 빅테크
            합격자 족보까지
          </Title>
        </TitleContainer>
        <Text>
          오직 개발자만을 위해 만든 동기부여 서비스, 코드라이브에 지금
          합류해주세요!
        </Text>
      </LandingTop>
      <motion.div
        initial={{ translateY: 300 }}
        animate={scrollAnimation}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <LandingImgContainer>
          <LandingImg src={LandingCodriveImg} alt="코드라이브" />
        </LandingImgContainer>
      </motion.div>
      <LandingButton onClick={scrollToLanding4}>
        자세히 알아보기
        <ArrowRightWhite />
      </LandingButton>
    </Landing3Container>
  );
};

const Landing3Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding-bottom: 11.8rem;

  background-position: center;
  background-size: cover;

  background-image: url(${ImgLanding3Bg});
  background-repeat: no-repeat;
`;

const LandingTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 5.4rem;

  text-align: center;
`;

const Info = styled.p`
  padding: 1.4rem 2.8rem;

  border-radius: 2.5rem;
  background-color: rgb(255 255 255 / 10%);
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.white};
`;

const TitleContainer = styled.div`
  margin: 2.8rem 0 3.6rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_34};
  background: radial-gradient(
    circle farthest-corner at center center,
    #fff 0%,
    #58ff7d 100%
  );
  background-color: #ffff;
  color: ${({ theme }) => theme.colors.gray100};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Text = styled.p`
  margin-bottom: 11.3rem;

  ${({ theme }) => theme.fonts.landing_regular_20};
  color: ${({ theme }) => theme.colors.white};
`;

const LandingButton = styled.button`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  padding: 1.65rem 1.8rem 1.65rem 2.8rem;

  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5rem;
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.white};

  text-align: center;
`;

const LandingImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 11rem;
`;

const LandingImg = styled.img`
  width: 100%;
`;

export default Landing3;
