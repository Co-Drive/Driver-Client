import { useEffect } from 'react';
import styled from 'styled-components';
import FollowerList from '../components/Follower/Current/FollowerList';
import FollowerQuestions from '../components/Follower/Current/FollowerQuestions';
import PageLayout from '../components/PageLayout/PageLayout';
import { updateWeek } from '../utils/updateWeek';

const FollowerCurrentPage = () => {
  const { startDate, endDate } = updateWeek();
  const [sMonth, sDate] = startDate.split(' ');
  const [eMonth, eDate] = endDate.split(' ');

  useEffect(() => {
    updateWeek();
  }, [startDate, endDate]);

  return (
    <PageLayout category="홈">
      <FollowerCurrentPageContainer>
        <Header>
          <Title>주간 팔로잉 현황</Title>
          <Date>{`${sMonth}월 ${sDate}일 - ${eMonth}월 ${eDate}일`}</Date>
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
  flex-direction: column;

  width: 92.6rem;
  padding: 6rem 0 8rem;
`;

const Header = styled.header`
  display: flex;
  gap: 1.4rem;
  align-items: end;
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
