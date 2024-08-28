import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowRightGray } from '../../../assets';
import { Home_FOLLOWER_DUMMY } from '../../../constants/Home/follwerConst';
import HomeProfileCard from './ProfileCard';

const WeeklyFollower = () => {
  const hasFollowers = Home_FOLLOWER_DUMMY.followings.length > 0;
  const navigate = useNavigate();

  const handleClickAllButton = () => {
    navigate('/follower');
  };

  return (
    <Container>
      <HeaderContainer>
        <WeeklyText>주간 팔로워 현황</WeeklyText>
        <div>
          <AllButton type="button" onClick={handleClickAllButton}>
            전체보기
            <IcArrowRightGray />
          </AllButton>
        </div>
      </HeaderContainer>
      <ProfileContainer>
        {hasFollowers ? (
          Home_FOLLOWER_DUMMY.followings
            .slice(0, 3)
            .map((user) => <HomeProfileCard key={user.userId} user={user} />)
        ) : (
          <NoFollowersText>
            팔로워를 추가하여 <br /> 문제풀이 현황을 비교해보세요
          </NoFollowersText>
        )}
      </ProfileContainer>
    </Container>
  );
};

export default WeeklyFollower;

const Container = styled.div`
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

const ProfileContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;

  margin: 4rem 0 4.1rem;
  margin-top: 4rem;
`;

const NoFollowersText = styled.p`
  margin: 2.9rem 3.65rem 6.5rem;

  color: ${({ theme }) => theme.colors.gray400};

  text-align: center;

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
