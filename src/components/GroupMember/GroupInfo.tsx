import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowRightSmallGray } from '../../assets';
import useGetDetail from '../../libs/hooks/GroupDetail/useGetDetail';

const GroupInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return;
  const groupId = parseInt(id);
  const { data, isLoading } = useGetDetail(groupId);
  const { imageSrc, title, tags, owner } = !isLoading && data?.data;
  const { userId, nickname, profileImg } = !isLoading && owner;

  const handleClickHost = () => {
    navigate(`/follower/${userId}`);
  };

  return (
    <>
      {!isLoading && (
        <GroupInfoContainer>
          <GroupImg src={imageSrc} />

          <TotalGroupInfo>
            <Group>
              <Tags>
                {tags.map((tag: string) => {
                  return <Tag key={tag}>#{tag}</Tag>;
                })}
              </Tags>
              <Title>{title}</Title>
              <MoreInfoBtn type="button">
                <MoreInfoText>그룹 정보 보기</MoreInfoText>
                <IcArrowRightSmallGray />
              </MoreInfoBtn>
            </Group>

            <Host typeof="button" onClick={handleClickHost}>
              <ProfileImg src={profileImg} />
              <NicknameContainer>
                <Nickname>{nickname}</Nickname>
                <Nickname>님</Nickname>
              </NicknameContainer>
              <IcArrowRightSmallGray />
            </Host>
          </TotalGroupInfo>
        </GroupInfoContainer>
      )}
    </>
  );
};

export default GroupInfo;

const GroupInfoContainer = styled.article`
  display: flex;
  gap: 3.6rem;
  align-items: center;

  width: 100%;
`;

const GroupImg = styled.img`
  min-width: 36.4rem;

  flex-grow: 0.5;

  height: 21.8rem;

  border-radius: 1.2rem;
  object-fit: cover;
`;

const TotalGroupInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1.3;

  margin: 1.2rem 0 1.6rem;
`;

const Group = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 2.8rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray700};
`;

const Tags = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  margin-bottom: 1.4rem;
`;

const Tag = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
`;

const Title = styled.p`
  margin-bottom: 2.3rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_32};
`;

const MoreInfoBtn = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const MoreInfoText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const Host = styled.button`
  display: flex;
  gap: 1rem;
  align-items: center;

  margin-top: 2.4rem;
`;

const ProfileImg = styled.img`
  width: 2.6rem;
  height: 2.6rem;

  border-radius: 5rem;

  object-fit: cover;
`;

const NicknameContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
