import { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  IcFollowingGray,
  IcGithubLogoSmall,
  IcUnfollowingWhite,
} from '../../assets';
import useUpdateFollower from '../../libs/hooks/Follower/useUpdateFollower';
import { UpdateFollowerProps } from '../../types/Follower/Personal/personalType';
import PageLayout from '../PageLayout/PageLayout';

const FollowingList = () => {
  // 더미 데이터 생성
  const dummyData = [
    {
      userId: 1,
      profileImg: '', // 실제 이미지 경로로 대체
      nickname: '일이삼사오육칠팔구십',
      language: 'JavaScript',
      githubUrl: '',
      isFollowing: true, // 팔로잉 여부
    },
    {
      userId: 2,
      profileImg: '',
      nickname: '팔로워유저1',
      language: 'Python',
      githubUrl: '',
      isFollowing: false,
    },
    {
      userId: 3,
      profileImg: '',
      nickname: '팔로워유저2',
      language: 'Java',
      githubUrl: '',
      isFollowing: false,
    },
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

  // 팔로워와 팔로잉 분리
  const followers = dummyData.filter((user) => !user.isFollowing);
  const followings = dummyData.filter((user) => user.isFollowing);

  const [isFollowerSelected, setIsFollowerSelected] = useState(true); // 팔로워 탭이 기본 선택

  const { mutation } = useUpdateFollower();

  const handleClickFollowerBtn = ({
    nickname,
    isDelete,
  }: UpdateFollowerProps) => {
    // 더미 데이터에서의 팔로우 상태 변경 로직 추가
    console.log(`팔로우 상태 변경: ${nickname}, isDelete: ${isDelete}`);
    mutation({ nickname, isDelete });
  };

  return (
    <PageLayout category="홈">
      <FollowContainer>
        <HeaderContainer>
          <TitleContainer>
            <Title>친구 목록</Title>
            <FriendCount>
              {isFollowerSelected ? followers.length : followings.length}명
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
          {(isFollowerSelected ? followers : followings).map(
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
      </FollowContainer>
    </PageLayout>
  );
};

// Tab 스타일링
// 스타일 컴포넌트 정의
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
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
  align-items: center;
`;

const Tab = styled.div<{ $selected: boolean }>`
  display: inline-block;

  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.white : theme.colors.gray500};
  ${({ theme }) => theme.fonts.body_medium_14};

  cursor: pointer;
`;

const Divider = styled.div`
  margin: 0 8px;

  color: #666;
`;

const FollowContainer = styled.article`
  margin-top: 4rem;
`;

const RecommendCard = styled.article`
  display: grid;
  gap: 0.4rem 1.8rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  width: 100%;
  padding: 2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};
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

export default FollowingList;
