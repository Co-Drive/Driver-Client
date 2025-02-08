import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowRightGray } from '../../../assets';
import useGetFollowingsCheck from '../../../libs/hooks/Home/useGetFollowingsCheck';
import HomeProfileCard from './ProfileCard';

import { UserProps } from '../../../types/Week/HomeFollowerTypes';

const WeeklyFollower = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useGetFollowingsCheck();
  const { followings } = !isLoading && data.data;
  const isFollowing = false;

  const hasFollowers = !isLoading && followings.length > 0;

  const handleClickAllButton = () => {
    navigate('/follower?page=1');
  };

  while (!isLoading && followings.length < 3) {
    followings.push({
      userId: `default-${followings.length + 1}`,
      successRate: 0,
      profileImg: '',
      nickname: '기본사용자',
      language: '사용언어',
    });
  }

  return (
    <Container>
      <HeaderContainer>
        <WeeklyText>주간 팔로잉 현황</WeeklyText>
        <div>
          <AllButton type="button" onClick={handleClickAllButton}>
            전체보기
            <IcArrowRightGray />
          </AllButton>
        </div>
      </HeaderContainer>
      <ProfileContainer $isFollowing={isFollowing}>
        {!isLoading && hasFollowers ? (
          followings
            .slice(0, 3)
            .map((user: UserProps, index: number) => (
              <HomeProfileCard key={user ? user.userId : index} user={user} />
            ))
        ) : (
          <NoFollowersText>
            팔로워를 추가하여 <LineText>문제풀이 현황을 비교해보세요</LineText>
          </NoFollowersText>
        )}
      </ProfileContainer>
    </Container>
  );
};

export default WeeklyFollower;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;

  width: 45.4rem;
  padding: 3.6rem 3.4rem 0;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  max-width: 45.4rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 17.6rem;

  white-space: nowrap;
`;

const ProfileContainer = styled.div<{ $isFollowing: boolean }>`
  display: flex;
  gap: 2.4rem;
  justify-content: ${({ $isFollowing }) => ($isFollowing ? 'start' : 'center')};

  padding: 0 3.4rem;
  margin: 4rem 0 4.1rem;
`;

const NoFollowersText = styled.div`
  margin: 2.9rem 3.65rem 6.5rem;

  color: ${({ theme }) => theme.colors.gray400};

  text-align: center;

  ${({ theme }) => theme.fonts.body_medium_16};
`;

const LineText = styled.p`
  display: flex;

  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const WeeklyText = styled.p`
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const AllButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.gray300};
`;
