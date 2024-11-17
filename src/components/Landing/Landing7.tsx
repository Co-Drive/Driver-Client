import styled from 'styled-components';
import {
  LandingLogo1,
  LandingLogo2,
  LandingLogo3,
  LandingLogo4,
  LandingLogo5,
} from '../../assets';

const images = [
  LandingLogo1,
  LandingLogo2,
  LandingLogo3,
  LandingLogo4,
  LandingLogo5,
];

const Landing7 = () => {
  return (
    <LandingBottom>
      <BottomText>
        코드라이브에 가입하시면 바로 확인하실 수 있습니다!
      </BottomText>
      <SliderContainer>
        <LogoList>
          {[...images, ...images, ...images].map((src, index) => (
            <List key={index}>
              <img src={src} alt={`이미지 ${index + 1}`} />
            </List>
          ))}
        </LogoList>
      </SliderContainer>
    </LandingBottom>
  );
};

const LandingBottom = styled.div`
  text-align: center;
`;

const BottomText = styled.p`
  margin-bottom: 6.3rem;

  ${({ theme }) => theme.fonts.title_regular_14};
  color: ${({ theme }) => theme.colors.gray200};
`;

const SliderContainer = styled.div`
  align-items: center;
  position: relative;
  overflow: hidden;

  width: 100%;
`;

const LogoList = styled.div`
  display: flex;
  gap: 3rem;
  animation: scroll 50s linear infinite;

  width: calc(28rem * ${images.length * 3} + 3rem * ${images.length * 3 - 1});

  @keyframes scroll {
    0% {
      transform: translateX(-33.333%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`;

const List = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Landing7;
