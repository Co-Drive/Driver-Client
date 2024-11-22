import styled from 'styled-components';
import { IcLandingLogo, ImgLanding9Bg } from '../../assets';

const Landing9 = () => {
  return (
    <Landing9Container>
      <TitleContainer>
        <IcLandingLogo />
        <Title>실제 사용 후기</Title>
      </TitleContainer>
      <LandingImgContainer>
        <TopRow>
          {feedbacks.slice(0, 3).map((feedback, index) => (
            <FeedbackBox key={index}>
              <FeedbackPeriod>{feedback.period}</FeedbackPeriod>
              <FeedbackTitle>{feedback.title}</FeedbackTitle>
              <>
                <TextLine>{feedback.text.line1}</TextLine>
                <TextLine>{feedback.text.line2}</TextLine>
                <TextLine>{feedback.text.line3}</TextLine>
              </>
            </FeedbackBox>
          ))}
        </TopRow>
        <BottomRow>
          {feedbacks.slice(3).map((feedback, index) => (
            <FeedbackBox key={index}>
              <FeedbackPeriod>{feedback.period}</FeedbackPeriod>
              <FeedbackTitle>{feedback.title}</FeedbackTitle>
              <>
                <TextLine>{feedback.text.line1}</TextLine>
                <TextLine>{feedback.text.line2}</TextLine>
                <TextLine>{feedback.text.line3}</TextLine>
              </>
            </FeedbackBox>
          ))}
        </BottomRow>
      </LandingImgContainer>
    </Landing9Container>
  );
};
const feedbacks = [
  {
    period: '코딩테스트 준비 기간 : 4년 이상',
    title: '빅테크 기업 BE 직무 합격자 강O모',
    text: {
      line1: '한 눈에 내가 얼마나 풀었는지 시각적으로',
      line2: '비교하며 보여주니까 어제의 나를',
      line3: '이기기 위해 더 열심히 하게 되는 것 같아요',
    },
  },
  {
    period: '코딩테스트 준비 기간 : 6개월',
    title: 'FE 직무 취업준비생 김O주',
    text: {
      line1: '혼자서는 문제를 하루에 하나도',
      line2: '제대로 풀기 힘들었는데',
      line3: '확실히 습관이 들어서 이제 매일 풀어요',
    },
  },
  {
    period: '코딩테스트 준비 기간 : 2년 이상',
    title: 'BE 직무 취업준비생 정O희',
    text: {
      line1: '취업준비 중에 스터디원 관리가',
      line2: '생각보다 힘든데, 코드라이브는 그룹 관리가',
      line3: '용이해서 너무 좋아요',
    },
  },
  {
    period: '코딩테스트 준비 기간 : 5년 이상',
    title: '대기업 게임개발 직무 합격자 서O름',
    text: {
      line1: '개발자를 준비하는 후배들에게',
      line2: '꼭 추천하고 싶은 서비스!!!!',
    },
  },
  {
    period: '코딩테스트 준비 기간 : 3년 이상',
    title: 'FE 직무 취업준비생 오O택',
    text: {
      line1: '처음 개발공부를 시작했을 때',
      line2: '이 서비스가 있었다면 제가 더 빠르게',
      line3: '성장할 수 있지 않았을까 생각해요',
    },
  },
];

const Landing9Container = styled.article`
  width: 100%;
  padding: 18.1rem 0 19.1rem;

  background-position: center;
  background-size: cover;
  background-image: url(${ImgLanding9Bg});
  background-repeat: no-repeat;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  margin-bottom: 12rem;

  text-align: center;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_34};
  background: linear-gradient(to right, #fff 0%, #58ff7d 100%);
  background-clip: text;

  -webkit-text-fill-color: transparent;
`;

const LandingImgContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-direction: column;

  padding: 0 13.2rem;
`;

const TopRow = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`;

const BottomRow = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
`;

const FeedbackBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 37.6rem;
  height: 23.1rem;

  border: 1px solid rgb(255 255 255 / 100%);
  border-radius: 2.4rem;

  text-align: center;
  backdrop-filter: blur(10px);
`;

const FeedbackPeriod = styled.p`
  margin-bottom: 1rem;

  ${({ theme }) => theme.fonts.detail_regular_12};
  color: ${({ theme }) => theme.colors.gray200};
`;

const FeedbackTitle = styled.h3`
  margin-bottom: 2.6rem;

  ${({ theme }) => theme.fonts.title_semiBold_18};
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const TextLine = styled.p`
  display: block;

  ${({ theme }) => theme.fonts.landing_regular_20};
  color: ${({ theme }) => theme.colors.white};
`;

export default Landing9;
