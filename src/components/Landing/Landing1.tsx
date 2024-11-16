import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ImgLanding, LandingMoon } from '../../assets';

const Landing1 = () => {
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const viewport = window.innerHeight;
    if (viewport / latest < viewport) {
      scrollAnimation.start({ translateY: 0 });
    } else {
      scrollAnimation.start({ translateY: 150 });
    }
  });

  return (
    <LoginContainer>
      <TitleContainer>
        <Text>이번 코딩테스트는 합격하자!</Text>
        <Title>코딩테스트 100번 이상 본 개발자들이</Title>
        <Title>사용하려고 만든 서비스</Title>
      </TitleContainer>
      <HomeBtn onClick={() => navigate('/login')}>지금 무료로 시작하기</HomeBtn>
      <motion.img
        src={LandingMoon}
        alt="랜딩페이지"
        initial={{ translateY: 150 }}
        animate={scrollAnimation}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding-top: 11.6rem;
  margin: 0 auto;

  background-size: cover;
  background-image: url(${ImgLanding});
`;

const TitleContainer = styled.div`
  padding-top: 14.6rem;

  text-align: center;
`;

const Text = styled.p`
  margin-bottom: 1.8rem;

  ${({ theme }) => theme.fonts.landing_semibold_24};
  color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_48};
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

const HomeBtn = styled.button`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 1.8rem 13.8rem;
  margin-top: 4.6rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
  color: ${({ theme }) => theme.colors.gray900};

  box-shadow: rgb(183 255 199 / 70%) 0 0 1.5rem;
`;

export default Landing1;
