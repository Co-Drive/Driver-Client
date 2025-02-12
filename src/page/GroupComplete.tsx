import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowRightBlack } from '../assets';
import CommonButton from '../common/CommonButton';
import Modal from '../common/Modal/Modal';
import PageLayout from '../components/PageLayout/PageLayout';
import { getGroupInfo } from '../libs/apis/GroupComplete/getGroupInfo';
import { handleCopyClipBoard } from '../utils/handleCopyClipBoard';

const GroupComplete = () => {
  const navigate = useNavigate();
  const [groupPassword, setGroupPassword] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const { id: uuid } = useParams();
  const { state } = useLocation();
  const { imageSrc } = state || {};
  const token = sessionStorage.getItem('token');
  const nickname = sessionStorage.getItem('nickname');

  if (uuid) {
    useEffect(() => {
      if (token && nickname) {
        const fetchGroupInfo = async () => {
          try {
            const data = await getGroupInfo(uuid!);
            setGroupPassword(data.password);
            setThumbnailUrl(data.imageSrc);
          } catch (error) {
            console.log('error');
          }
        };
        fetchGroupInfo();
      } else {
        navigate('/login');
      }
    }, [uuid, token, nickname]);
  }

  const handleClickCopyBtn = () => {
    const baseUrl = `https://www.codrive.co.kr/group/${uuid}`;
    handleCopyClipBoard({ baseUrl: baseUrl, isUsedBaseUrl: true });
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const handleGroupPageRedirect = async () => {
    if (token && nickname) {
      const data = await getGroupInfo(uuid!);
      navigate(`/group/${data.roomId}/admin?page=1`);
    }
  };

  return (
    <PageLayout category={'group_create'} isDisabledFooter={true}>
      <Title>{`그룹 ${imageSrc ? '신청' : '생성'}이 완료되었어요!`}</Title>
      <PasswordContainer>
        {groupPassword && (
          <PasswordText>
            비밀번호<Password>{groupPassword}</Password>
          </PasswordText>
        )}
        {imageSrc && (
          <PasswordText>승인되면 즉시 알려드릴게요 :{')'}</PasswordText>
        )}
      </PasswordContainer>
      <ThumbnailContainer>
        <Img src={thumbnailUrl || imageSrc} alt="썸네일" />
      </ThumbnailContainer>
      {imageSrc ? (
        <MoreGroupBtn type="button" onClick={() => navigate('/group')}>
          <MoreGroupText>다른 그룹 더보기</MoreGroupText>
          <IcArrowRightBlack />
        </MoreGroupBtn>
      ) : (
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
      )}
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
  margin-left: 0.8rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const ThumbnailContainer = styled.div`
  margin-bottom: 6.6rem;
`;

const Img = styled.img`
  width: 44rem;
  height: 31rem;
  object-fit: cover;

  border-radius: 1.2rem;
`;

const MoreGroupBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.4rem 1.6rem 1.4rem 2.1rem;
  margin-bottom: 8rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
`;

const MoreGroupText = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const ButtonContainer = styled.span`
  display: flex;
  gap: 1.8rem;
  justify-content: center;

  padding-bottom: 33.2rem;
`;
