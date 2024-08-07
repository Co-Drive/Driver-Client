import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import Modal from '../common/Modal/Modal';
import PageLayout from '../components/PageLayout/PageLayout';
import { handleCopyClipBoard } from '../utils/handleCopyClipBoard';

const GroupComplete = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { groupPassword, thumbnailUrl } = state;
  const baseUrl = window.location.origin; // 생성한 그룹 페이지가 만들어지면 대체 될 예정
  const [isCopied, setIsCopied] = useState(false);

  const handleClickCopyBtn = () => {
    handleCopyClipBoard({ baseUrl: baseUrl, isUsedBaseUrl: true });
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
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
        <CommonButton
          onClick={() => handleClickCopyBtn()}
          category="link_copy"
        />
        {isCopied && <Modal />}
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
