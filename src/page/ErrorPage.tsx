import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcWarningBig } from '../assets';
import PageLayout from '../components/PageLayout/PageLayout';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout category="에러 페이지" isDisabledFooter={true}>
      <WarningContainer>
        <IcWarningBig />
        <WarningText>{`오류가 발생했어요 :(`}</WarningText>
        <GoHomeBtn onClick={() => navigate('/')}>홈으로 돌아가기</GoHomeBtn>
      </WarningContainer>
    </PageLayout>
  );
};

export default ErrorPage;

const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 20.7rem;
`;

const WarningText = styled.p`
  margin-top: 2.6rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const GoHomeBtn = styled.button`
  padding: 1.2rem 2.6rem;
  margin-top: 6.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_20};
`;
