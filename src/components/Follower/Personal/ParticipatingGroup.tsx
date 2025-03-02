import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcSecretBigWhite } from '../../../assets';
import { ALL_TAG } from '../../../constants/utils/allTag';
import useGetRooms from '../../../libs/hooks/utils/useGetRooms';
import {
  ClickCardProps,
  ParticipatingGroupProps,
} from '../../../types/Follower/Personal/personalType';
import { GroupType } from '../../../types/MyGroup/myGroupType';

const ParticipatingGroup = ({ nickname }: ParticipatingGroupProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return;

  const followerId = parseInt(id);
  const { data, isLoading } = useGetRooms({
    followerId: followerId,
    isJoinedRooms: true,
    sortType: 'NEW',
  });
  const { joinedRooms } = !isLoading && data?.data;

  const handleClickCard = ({
    groupId,
    userId,
    isMember,
    isPublicRoom,
  }: ClickCardProps) => {
    const myId = sessionStorage.getItem('user');
    if (myId && parseInt(myId) === userId) {
      navigate(`/group/${groupId}/admin?page=1&sort=NEW`);
    } else {
      isMember
        ? navigate(`/group/${groupId}/member?page=1&sort=NEW`)
        : navigate(`/group/${groupId}`, {
            state: { isPublicRoom: isPublicRoom },
          });
    }
  };

  return (
    <ParticipatingCardContainer>
      <TitleContainer>
        <Nickname>{nickname}</Nickname>
        <Title>님의 참여 그룹</Title>
      </TitleContainer>

      <GroupContainer>
        {!isLoading &&
          joinedRooms.map((room: GroupType) => {
            const {
              roomId,
              imageSrc,
              title,
              tags,
              introduce,
              owner,
              isMember,
              isPublicRoom,
            } = room;
            const { userId } = owner;
            const renderTags = tags.length > 5 ? ALL_TAG : tags;

            return (
              <CardContainer
                key={roomId}
                onClick={() =>
                  handleClickCard({
                    groupId: roomId,
                    userId,
                    isMember,
                    isPublicRoom,
                  })
                }
              >
                <CardImgContainer>
                  {!isPublicRoom && (
                    <SecretCardBg>
                      <IcSecretBigWhite />
                      <SecretCardDesc>
                        해당 그룹은 비밀그룹 입니다
                      </SecretCardDesc>
                    </SecretCardBg>
                  )}
                  <Img src={imageSrc} alt="그룹 대표 이미지" />
                </CardImgContainer>

                <Contents>
                  <Name>{title}</Name>
                  <TagContainer>
                    {renderTags.map((tag) => {
                      return <Tag key={tag}>#{tag}</Tag>;
                    })}
                  </TagContainer>
                  <Introduce>{introduce}</Introduce>
                </Contents>
              </CardContainer>
            );
          })}
      </GroupContainer>
    </ParticipatingCardContainer>
  );
};

export default ParticipatingGroup;

const ParticipatingCardContainer = styled.article`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-top: 9.8rem;
  margin-left: 0.2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  margin-left: 0.1rem;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const GroupContainer = styled.article`
  display: grid;
  gap: 4rem 1.8rem;
  grid-template-columns: repeat(3, 1fr);

  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  min-width: 29.6rem;

  width: 100%;
  height: 27.1rem;
`;

const CardImgContainer = styled.div`
  position: relative;

  width: 100%;
  height: 17.8rem;
`;

const SecretCardBg = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  inset: 0;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  opacity: 0.7;
`;

const SecretCardDesc = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Img = styled.img`
  width: 100%;
  height: 17.8rem;
  object-fit: cover;

  border-radius: 1.6rem;
`;

const Contents = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-direction: column;

  width: calc(100% - 2rem);
  margin: 0 1rem;
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const TagContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tag = styled.p`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const Introduce = styled.p`
  overflow: hidden;

  width: 100%;
  height: 2.8rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: pre-wrap;
  word-break: break-all;
`;
