import styled from 'styled-components';
import {
  ImgLanding2Bg,
  Recruit1,
  Recruit10,
  Recruit11,
  Recruit12,
  Recruit13,
  Recruit14,
  Recruit15,
  Recruit16,
  Recruit2,
  Recruit3,
  Recruit4,
  Recruit5,
  Recruit6,
  Recruit7,
  Recruit8,
  Recruit9,
} from '../../assets';

const Landing2 = () => {
  const imagesList1 = [
    Recruit1,
    Recruit2,
    Recruit3,
    Recruit4,
    Recruit5,
    Recruit6,
    Recruit7,
    Recruit8,
  ];

  const imagesList2 = [
    Recruit9,
    Recruit10,
    Recruit11,
    Recruit12,
    Recruit13,
    Recruit14,
    Recruit15,
    Recruit16,
  ];

  return (
    <Landing2Container>
      <TitleContainer>
        <Title>개발자로 취업하고 싶은 당신!</Title>
        <Title>꾸준히 코딩테스트 준비하는 것, 너무 힘들지 않으신가요?</Title>
      </TitleContainer>
      <SliderContainer>
        <CodriveList1>
          {imagesList1.map((img, index) => (
            <List key={index} style={{ backgroundImage: `url(${img})` }} />
          ))}
          {imagesList1.map((img, index) => (
            <List
              key={`clone1-${index}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </CodriveList1>
        <CodriveList2>
          {imagesList2.map((img, index) => (
            <List key={index} style={{ backgroundImage: `url(${img})` }} />
          ))}
          {imagesList2.map((img, index) => (
            <List
              key={`clone2-${index}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </CodriveList2>
      </SliderContainer>
      <BottomText>
        <Info>
          2024년 10월 기준 하반기 채용에서 코딩테스트 전형 필수인 회사는 500개
          이상
        </Info>
        <Text>출처 &#41; 잡코리아</Text>
      </BottomText>
    </Landing2Container>
  );
};

const Landing2Container = styled.article`
  width: 100%;
  min-height: 100vh;

  background-position: center;
  background-size: cover;
  background-image: url(${ImgLanding2Bg});
  background-repeat: no-repeat;
`;

const TitleContainer = styled.div`
  padding: 18.6rem 0 6.2rem;

  text-align: center;
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

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
`;

const CodriveList1 = styled.div`
  display: flex;
  gap: 1.4rem;

  width: calc(27rem * 16 + 1.4rem * 15);

  animation: scroll-right 50s linear infinite;

  @keyframes scroll-right {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-50%);
    }
  }
`;

const CodriveList2 = styled.div`
  display: flex;
  gap: 1.4rem;

  width: calc(27rem * 16 + 1.4rem * 15);

  animation: scroll-left 50s linear infinite;

  @keyframes scroll-left {
    0% {
      transform: translateX(-50%);
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

  width: 27rem;
  height: 17.8rem;
  margin-bottom: 1.4rem;

  border-radius: 2.4rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const BottomText = styled.div`
  margin-top: 3.2rem;

  text-align: center;
`;

const Info = styled.p`
  ${({ theme }) => theme.fonts.title_regular_14};
  color: ${({ theme }) => theme.colors.gray100};
`;

const Text = styled.p`
  margin-top: 0.6rem;
  ${({ theme }) => theme.fonts.body_ligth_10};

  color: ${({ theme }) => theme.colors.gray100};
`;

export default Landing2;
