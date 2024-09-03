import { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  IcFollowingGray,
  IcGithubLogoSmall,
  IcUnfollowingWhite,
} from '../../assets';
import useUpdateFollower from '../../libs/hooks/Follower/useUpdateFollower';
import { UpdateFollowerProps } from '../../types/Follower/Personal/personalType';

const FollowingList = () => {
  // 더미 데이터 생성
  const followerData = [
    {
      userId: 1,
      profileImg: '',
      nickname: '일이삼사오육칠팔구십',
      language: 'JavaScript',
      githubUrl: '',
      isFollowing: true,
    },
    {
      userId: 2,
      profileImg: '',
      nickname: '팔로워유저1',
      language: 'Python',
      githubUrl: '',
      isFollowing: true,
    },
    {
      userId: 3,
      profileImg: '',
      nickname: '팔로워유저2',
      language: 'Java',
      githubUrl: '',
      isFollowing: true,
    },
  ];

  const followingData = [
    {
      userId: 4,
      profileImg: '',
      nickname: '팔로잉유저1',
      language: 'C++',
      githubUrl: '',
      isFollowing: true,
    },
    {
      userId: 5,
      profileImg: '',
      nickname: '팔로잉유저2',
      language: 'TypeScript',
      githubUrl: '',
      isFollowing: true,
    },
  ];

  const [isFollowerSelected, setIsFollowerSelected] = useState(true);

  const { mutation } = useUpdateFollower();

  const handleClickFollowerBtn = ({
    nickname,
    isDelete,
  }: UpdateFollowerProps) => {
    mutation({ nickname, isDelete });
  };

  const handleDeleteAccount = () => {
    /* 회원탈퇴 */
  };

  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          <Title>친구 목록</Title>
          <FriendCount>
            {isFollowerSelected ? followerData.length : followingData.length}명
          </FriendCount>
        </TitleContainer>
        <TabContainer>
          <Tab
            $selected={isFollowerSelected}
            onClick={() => setIsFollowerSelected(true)}
          >
            팔로워
          </Tab>
          <Divider>|</Divider>
          <Tab
            $selected={!isFollowerSelected}
            onClick={() => setIsFollowerSelected(false)}
          >
            팔로잉
          </Tab>
        </TabContainer>
      </HeaderContainer>
      <RecommendCard>
        {(isFollowerSelected ? followerData : followingData).map(
          (
            user: {
              userId: number;
              profileImg: string;
              nickname: string;
              language: string;
              githubUrl: string;
              isFollowing: boolean;
            },
            idx: number
          ) => {
            const {
              userId,
              profileImg,
              nickname,
              language,
              githubUrl,
              isFollowing,
            } = user;
            return (
              <PersonalCard key={userId} $addHr={idx < 4}>
                <ProfileImg
                  src={profileImg}
                  $isGithubExit={githubUrl?.length !== 0}
                />
                {githubUrl && (
                  <IcContainer>
                    <IcGithubLogoSmall />
                  </IcContainer>
                )}

                <ProfileInfo>
                  <Nickname>{nickname}</Nickname>
                  <Language>{`#${language}`}</Language>
                </ProfileInfo>

                <FollowingBtn
                  type="button"
                  $isFollowed={isFollowing}
                  onClick={() =>
                    handleClickFollowerBtn({
                      nickname,
                      isDelete: isFollowing,
                    })
                  }
                >
                  {isFollowing ? <IcFollowingGray /> : <IcUnfollowingWhite />}
                  <FollowingText $isFollowed={isFollowing}>
                    {isFollowing ? `팔로잉` : `팔로우`}
                  </FollowingText>
                </FollowingBtn>
              </PersonalCard>
            );
          }
        )}
      </RecommendCard>
      <DeleteIdContainer>
        <DeleteText>코드라이브를 더이상 이용하지 않는다면</DeleteText>
        <DeleteBtn onClick={handleDeleteAccount}>회원탈퇴</DeleteBtn>
      </DeleteIdContainer>
    </div>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.8rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: 0.2rem;
`;

const Title = styled.h2`
  margin-right: 1.6rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_24};
`;

const FriendCount = styled.span`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Tab = styled.p<{ $selected: boolean }>`
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.white : theme.colors.gray500};
  ${({ theme }) => theme.fonts.body_medium_14};

  cursor: pointer;
`;

const Divider = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
`;

const RecommendCard = styled.article`
  display: grid;
  gap: 0.4rem 1.8rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  width: 100%;
  padding: 2rem;
  margin-bottom: 5.6rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};

  overflow-y: auto;
  max-height: 44rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PersonalCard = styled.article<{ $addHr: boolean }>`
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  padding: 1.4rem 1rem;

  ${({ $addHr, theme }) =>
    $addHr &&
    css`
      width: calc(100% - 2rem);
      padding: 1.4rem 0 1.8rem;
      margin: 0 1rem;

      border-bottom: 0.1rem solid ${theme.colors.gray600};
    `};
`;

const ProfileImg = styled.img<{ $isGithubExit: boolean }>`
  width: 6.8rem;
  height: 6.8rem;
  margin-right: ${({ $isGithubExit }) => ($isGithubExit ? `1.5rem` : `1.8rem`)};

  border-radius: 5rem;
  object-fit: cover;
`;

const IcContainer = styled.span`
  position: absolute;
  top: 5.8rem;
  left: 5.1rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  flex-direction: column;

  margin-right: 6.2rem;

  min-width: 15.6rem;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;

const Language = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const FollowingBtn = styled.button<{ $isFollowed: boolean }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.8rem;

  border-radius: 9.9rem;
  background-color: ${({ theme, $isFollowed }) =>
    $isFollowed ? theme.colors.gray700 : theme.colors.codrive_purple};
`;

const FollowingText = styled.p<{ $isFollowed: boolean }>`
  color: ${({ theme, $isFollowed }) =>
    $isFollowed ? theme.colors.gray100 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const DeleteIdContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const DeleteText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const DeleteBtn = styled.button`
  color: ${({ theme }) => theme.colors.codrive_purple};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;
export default FollowingList;
