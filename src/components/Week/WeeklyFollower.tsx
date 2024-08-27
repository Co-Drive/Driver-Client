import styled from 'styled-components';
import { IcArrowRightGray } from '../../assets';
import { Home_FOLLOWER_DUMMY } from '../../constants/Home/follwerConst';
import HomeProfileCard from './ProfileCard';

const WeeklyFollower = () => {
  return (
    <Container>
      <HeaderContainer>
        <WeeklyText>주간 팔로워 현황</WeeklyText>
        <div>
          <AllButton type="button">
            전체보기
            <IcArrowRightGray />
          </AllButton>
        </div>
      </HeaderContainer>
      <div>
        {Home_FOLLOWER_DUMMY.followings.map((user) => (
          <HomeProfileCard key={user.userId} user={user} />
        ))}
      </div>
    </Container>
  );
};

export default WeeklyFollower;

const Container = styled.div`
  width: 45.4rem;
  padding: 3.6rem 3.4rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  max-width: 45.4rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 17.6rem;

  /* background-color: pink; */

  white-space: nowrap;
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
