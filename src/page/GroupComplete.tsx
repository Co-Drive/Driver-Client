import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';

// props 타입 정의해둔 것 지워주세용 !
const GroupComplete = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { groupPassword, thumbnailUrl } = state;
  const baseUrl = window.location.origin; // 생성한 그룹 페이지가 만들어지면 대체 될 예정

  const handleCopyClipBoard = async () => {
    const text = `${baseUrl}${location.pathname}`;
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (err) {
      // 에러 페이지 네비게이트 시키기
      navigate('/error-page'); // 에러 페이지로 네비게이트
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
          비밀번호 <Password>{groupPassword}</Password>
        </PasswordText>
      </PasswordContainer>
      <ThumbnailContainer>
        <Img src={thumbnailUrl} alt="썸네일" />
      </ThumbnailContainer>
      <ButtonContainer>
        <CommonButton onClick={handleCopyClipBoard} category="link_copy" />
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
  margin: 7.4rem 0 2.6rem;

  ${({ theme }) => theme.fonts.title_bold_32};
  color: ${({ theme }) => theme.colors.codrive_green};
`;

const PasswordContainer = styled.div`
  margin-bottom: 4rem;
`;

const PasswordText = styled.p`
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.gray100};
`;

const Password = styled.span`
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const ThumbnailContainer = styled.div`
  margin-bottom: 6.6rem;
`;

const Img = styled.img`
  width: 4.4rem;
  height: 3.1rem;
`;

const ButtonContainer = styled.span`
  display: flex;
  gap: 1.8rem;
  justify-content: center;
`;
