import styled from 'styled-components';

const Landing2 = () => {
  return (
    <Landing2Container>
      <TitleContainer>
        <Title>개발자고 취업하고 싶은 당신!</Title>
        <Title>꾸준히 코딩테스트 준비하는 것, 너무 힘들지 않으신가요?</Title>
      </TitleContainer>
      <SliderContainer>
        <CodriveList1>
          {[...Array(6)].map((_, index) => (
            <List key={index}>이미지 {index + 1}</List>
          ))}
          {[...Array(6)].map((_, index) => (
            <List key={`clone1-${index}`}>이미지 {index + 1}</List>
          ))}
        </CodriveList1>
        <CodriveList2>
          {[...Array(6)].map((_, index) => (
            <List key={index}>이미지 {index + 1}</List>
          ))}
          {[...Array(6)].map((_, index) => (
            <List key={`clone2-${index}`}>이미지 {index + 1}</List>
          ))}
        </CodriveList2>
      </SliderContainer>
      <BottomText>
        <Info>2024 상반기 공채 기준, 코딩테스트 전형 필수인 회사NN개 이상</Info>
        <Text>어쩌구</Text>
      </BottomText>
    </Landing2Container>
  );
};

const Landing2Container = styled.article`
  width: 100%;
  height: 100vh; /* 화면 전체 높이 설정 */

  background-position: center; /* 배경 이미지 가운데 정렬 */
  background-size: cover; /* 배경 이미지가 전체를 덮도록 설정 */
  background-image: url('/src/assets/img/img_landing2_bg.png'); /* 이미지 경로 */
  background-repeat: no-repeat; /* 이미지 반복 안되도록 설정 */
`;

const TitleContainer = styled.div`
  margin-bottom: 6.2rem;

  text-align: center;
`;
const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_34};
  background: radial-gradient(
    circle farthest-corner at center center,
    #fff 0%,
    #58ff7d 100%
  );
  background-color: #ffff; /* background 뒤로 이동 */
  color: ${({ theme }) => theme.colors.gray100};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden; /* 슬라이드가 밖으로 넘치지 않도록 설정 */

  width: 100%; /* 슬라이더 컨테이너의 너비를 전체 화면으로 설정 */
`;

const CodriveList1 = styled.div`
  display: flex;
  gap: 1.4rem;

  width: calc(27rem * 12 + 1.4rem * 11); /* 6개의 슬라이드 + 6개의 복제본 */

  animation: scroll-right 50s linear infinite;

  @keyframes scroll-right {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-50%); /* 왼쪽으로 스크롤 */
    }
  }
`;

const CodriveList2 = styled.div`
  display: flex;
  gap: 1.4rem;

  width: calc(27rem * 12 + 1.4rem * 11); /* 6개의 슬라이드 + 6개의 복제본 */

  animation: scroll-left 50s linear infinite;

  @keyframes scroll-left {
    0% {
      transform: translateX(-50%); /* 오른쪽 끝에서 시작 */
    }

    100% {
      transform: translateX(0%); /* 오른쪽으로 스크롤 */
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
  background-color: ${({ theme }) => theme.colors.white};
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
  ${({ theme }) => theme.fonts.body_ligth_10};
  color: ${({ theme }) => theme.colors.gray100};
`;

export default Landing2;
