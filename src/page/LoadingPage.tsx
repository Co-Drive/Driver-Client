import Lottie from 'lottie-react';
import styled from 'styled-components';
import animationData from '../assets/lottie/lottie.json';

interface LoadingPageProps {
  isPageLoading?: boolean;
}

const LoadingPage = ({ isPageLoading }: LoadingPageProps) => {
  return (
    <LoadingPageContainer $isPageLoading={isPageLoading}>
      <LottieContainer>
        <Lottie animationData={animationData} />
      </LottieContainer>
    </LoadingPageContainer>
  );
};

export default LoadingPage;

const LoadingPageContainer = styled.section<{ $isPageLoading?: boolean }>`
  display: flex;
  justify-content: ${({ $isPageLoading }) => !$isPageLoading && 'center'};
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: ${({ $isPageLoading }) =>
    $isPageLoading ? 'calc(100vh - 11.6rem)' : '100vh'};
  padding-top: ${({ $isPageLoading }) => $isPageLoading && '11.6rem'};
`;

const LottieContainer = styled.article`
  width: 10.8rem;
  height: 10.8rem;
`;
