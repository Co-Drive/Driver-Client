import styled from 'styled-components';
import { Thumbnail } from '../assets';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';
const GroupComplete = () => {
  return (
    <PageLayout category={'group_create'}>
      <MainContainer>
        <Title>그룹 생성이 완료되었어요!</Title>
        <PasswordContainer>
          <PasswordText>
            비밀번호 <Password>아자자화이팅</Password>
          </PasswordText>
        </PasswordContainer>
        <ThumbnailContainer>
          <Thumbnail />
        </ThumbnailContainer>
        <ButtonContainer>
          <CommonButton category="link_copy" />
          <CommonButton category="group_direct" isActive={true} />
        </ButtonContainer>
      </MainContainer>
    </PageLayout>
  );
};

export default GroupComplete;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: pink;
`;

const Title = styled.h1`
  margin-top: 7.4rem;
  margin-bottom: 2.6rem;

  background-color: blue;
  ${({ theme }) => theme.fonts.title_bold_32};
  color: ${({ theme }) => theme.colors.codrive_green};
`;

const PasswordContainer = styled.div`
  margin-bottom: 4rem;

  background-color: purple;
`;

const PasswordText = styled.p`
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const Password = styled.span`
  background-color: brown;
`;

const ThumbnailContainer = styled.div`
  margin-bottom: 6.6rem;

  background-color: aqua;
`;

const ButtonContainer = styled.span`
  display: flex;
  gap: 1.8rem;
  justify-content: center;

  background-color: cornflowerblue;
`;
