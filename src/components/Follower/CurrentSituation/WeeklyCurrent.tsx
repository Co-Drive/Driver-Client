import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowRightSmallGray, TestWeekboardStatus } from '../../../assets';
import { DUMMY } from '../../../constants/Follower/currentConst';
import SolvedQuestionModal from './SolvedQuestionModal';

interface ClickDailyBoardProps {
  nickname: string;
  date: string;
}

const WeeklyCurrent = () => {
  const { followers } = DUMMY;
  const [clickedBoard, setClickedBoard] = useState({
    clickedDate: '',
    clickedNickname: '',
    isModalOpen: false,
  });

  const { clickedDate, clickedNickname, isModalOpen } = clickedBoard;

  const handleClickDailyBoard = ({ nickname, date }: ClickDailyBoardProps) => {
    setClickedBoard({
      clickedDate: date,
      clickedNickname: nickname,
      isModalOpen: !isModalOpen,
    });

    // 서버 통신 -> 클릭한 닉네임과 날짜를 기반으로 문제 풀이 조회
  };

  return (
    <BoardsContainer>
      {followers.map((follower) => {
        const { profile, boards } = follower;
        const { imgSrc, nickname } = profile;
        return (
          <BoardContainer key={nickname}>
            <TopBar>
              <Profile>
                <Img src={imgSrc} />
                <Nickname>{nickname}</Nickname>
              </Profile>
              <MoreBtn type="button">
                <Text>그룹 더보기</Text>
                <IcArrowRightSmallGray />
              </MoreBtn>
            </TopBar>

            <WeeklyBoard>
              {boards.map((board) => {
                const { count, date } = board;
                const isClickedBoard =
                  clickedDate === date && clickedNickname === nickname;
                return (
                  <DailyBoard
                    key={date}
                    $isClicked={isClickedBoard && isModalOpen}
                    onClick={() =>
                      handleClickDailyBoard({
                        nickname: nickname,
                        date: date,
                      })
                    }
                  >
                    {/* count 관련 조건은 추후 수정 예정 */}
                    {count && <TestWeekboardStatus />}
                    <Date>{date}</Date>

                    {isClickedBoard && isModalOpen && <SolvedQuestionModal />}
                  </DailyBoard>
                );
              })}
            </WeeklyBoard>
          </BoardContainer>
        );
      })}
    </BoardsContainer>
  );
};

export default WeeklyCurrent;

const BoardsContainer = styled.article`
  display: flex;
  gap: 2.6rem;
  flex-direction: column;

  width: 100%;
`;

const BoardContainer = styled.article`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Profile = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Img = styled.img`
  width: 2.8rem;
  height: 2.8rem;

  border-radius: 5rem;

  object-fit: cover;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const MoreBtn = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  padding: 1rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const WeeklyBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: relative;

  padding: 1.2rem 1.2rem 1.2rem 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  row-gap: 0.5rem;
`;

const DailyBoard = styled.div<{ $isClicked: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0.8rem 1.05rem;

  border-radius: 0.6rem;
  background-color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.gray700 : 'transparent'};
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;
