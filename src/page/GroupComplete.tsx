import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Thumbnail } from '../assets';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';
const GroupComplete = ({ thumbnailUrl }: { thumbnailUrl: string }) => {
  const navigate = useNavigate();
  const baseUrl = window.location.origin; // 생성한 그룹 페이지가 만들어지면 대체 될 예정

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      console.log(err);
    }
  };

  const handleGroupPageRedirect = () => {
    alert('그룹 페이지를 생성하고 유지보수 예정.');
    navigate('/group-page'); // 그룹 페이지 생성 후 유지보수 예정
  };

  return (
    <PageLayout category={'group_create'}>
      <Title>그룹 생성이 완료되었어요!</Title>
      <PasswordContainer>
        <PasswordText>
          비밀번호 <Password>아자자화이팅</Password>
        </PasswordText>
      </PasswordContainer>
      <ThumbnailContainer>
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt="사용자 썸네일" />
        ) : (
          <Thumbnail />
        )}
      </ThumbnailContainer>
      <ButtonContainer>
        <CommonButton
          onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}
          category="link_copy"
        />
        <CommonButton
          onClick={handleGroupPageRedirect}
          category="group_direct"
          isActive={true}
        />
      </ButtonContainer>
    </PageLayout>
  );
};

export default GroupComplete;

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

  /* background-color: aqua; */
`;

const ButtonContainer = styled.span`
  display: flex;
  gap: 1.8rem;
  justify-content: center;

  /* background-color: cornflowerblue; */
`;
