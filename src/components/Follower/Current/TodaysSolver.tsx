import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../../../assets';
import { TODAYS_SOLVER_DUMMY } from '../../../constants/Follower/currentConst';
import Solver from './Solver';

const TodaysSolver = () => {
  const { totalPages, users } = TODAYS_SOLVER_DUMMY;
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickArrowLeft = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => (prev -= 1));
    }
  };

  const handleClickArrowRight = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => (prev += 1));
    }
  };

  return (
    <TodaysSolverContainer>
      <Header>
        <Title>오늘 문제 푼 팔로워</Title>

        {users.length && (
          <ArrowContainer>
            <IcArrowLeftSmallGray onClick={handleClickArrowLeft} />
            <IcArrowRightSmallGray onClick={handleClickArrowRight} />
          </ArrowContainer>
        )}
      </Header>

      <SolverContainer>
        <Solver currentPage={currentPage} users={users} />
      </SolverContainer>
    </TodaysSolverContainer>
  );
};

export default TodaysSolver;

const TodaysSolverContainer = styled.article`
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

const Header = styled.header`
  display: flex;
  gap: 2.4rem;
  justify-content: space-between;
  align-items: center;

  margin-right: 1rem;
  margin-left: 0.6rem;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const ArrowContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const SolverContainer = styled.article`
  width: 100%;
  height: 23rem;
  min-width: 29.5rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;
