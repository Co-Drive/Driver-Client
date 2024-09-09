import { useEffect } from 'react';
import styled from 'styled-components';
import FollowerList from '../components/Follower/Current/FollowerList';
import FollowerQuestions from '../components/Follower/Current/FollowerQuestions';
import PageLayout from '../components/PageLayout/PageLayout';
import { updateWeek } from '../utils/updateWeek';

const FollowerCurrentPage = () => {
  const { startDate, endDate } = updateWeek();
  const [sMonth, sDate] = startDate.split(' ');

  useEffect(() => {
    updateWeek();
  }, [startDate, endDate]);

  return (
    <PageLayout category="홈">
      <FollowerCurrentPageContainer>
        <Header>
          <Title>팔로잉 현황</Title>
          <Date>{`${sMonth}월 ${sDate}일 - ${endDate}일`}</Date>
          <Text>주간보드</Text>
        </Header>

        <FollowerQuestions />

        <FollowerList />
      </FollowerCurrentPageContainer>
    </PageLayout>
  );
};

export default FollowerCurrentPage;

const FollowerCurrentPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 6rem 25.7rem 18rem;
`;

const Header = styled.header`
  display: flex;
  gap: 1.4rem;
  align-items: end;

  width: 100%;
`;

const Title = styled.p`
  margin-bottom: -0.3rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Text = styled(Date)`
  margin-left: -1rem;
`;
