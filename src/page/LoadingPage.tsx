import Lottie from 'lottie-react';
import styled from 'styled-components';
import animationData from '../assets/lottie/lottie.json';

const LoadingPage = () => {
  return (
    <LoadingPageContainer>
      <LottieContainer>
        <Lottie animationData={animationData} />
      </LottieContainer>
    </LoadingPageContainer>
  );
};

export default LoadingPage;

const LoadingPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100dvh;
`;

const LottieContainer = styled.article`
  width: 10.8rem;
  height: 10.8rem;
`;
