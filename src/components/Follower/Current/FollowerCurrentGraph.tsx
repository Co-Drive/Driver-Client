import { useState } from 'react';
import styled from 'styled-components';
import { FollowerCurrentGraphProps } from '../../../types/Follower/Current/currentType';

const FollowerCurrentGraph = ({ users }: FollowerCurrentGraphProps) => {
  const [hoveredNickname, setHoveredNickname] = useState<string>('');

  const filledData = Array(15)
    .fill(0)
    .map((_, index) => {
      return users[index] || { nickname: null, count: -1 };
    });
  const followerArr = users.length >= 15 ? users : filledData;

  const handleHoverGraph = (nickname: string) => {
    setHoveredNickname(nickname);
  };

  const handleLeaveGraph = () => {
    setHoveredNickname('');
  };

  return (
    <GraphContainer>
      {followerArr.map((follower, idx) => {
        const { nickname, count } = follower;
        const isHoveredGraph = hoveredNickname === nickname;

        return (
          <GraphDetail key={idx}>
            {isHoveredGraph && (
              <ToolTipContainer $count={count}>
                <Nickname>{nickname}</Nickname>
                <ProblemNum>{`${count} 문제`}</ProblemNum>
              </ToolTipContainer>
            )}
            <Graph
              $count={count}
              onMouseEnter={() => nickname && handleHoverGraph(nickname)}
              onMouseLeave={() => nickname && handleLeaveGraph()}
            />
          </GraphDetail>
        );
      })}
    </GraphContainer>
  );
};

export default FollowerCurrentGraph;

const GraphContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: center;
  align-items: flex-end;
  overflow: auto hidden;

  height: 100%;
  padding: 1.4rem 2rem;

  min-width: 57rem;

  scrollbar-color: ${({ theme }) => theme.colors.gray500};

  /* 스크롤바 굵기 설정 */
  &::-webkit-scrollbar {
    height: 0.5rem;
  }

  /* 스크롤바 막대 설정 */
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;

const GraphDetail = styled.div`
  display: flex;
  position: relative;
`;

const ToolTipContainer = styled.div<{ $count: number }>`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: ${({ $count }) => {
    switch ($count) {
      case -1:
      case 0:
        return '2.6rem';
      default:
        return `${$count + 1.6}rem`;
    }
  }};

  width: 100%;

  &::after {
    position: absolute;
    top: 3.6rem;

    border-color: ${({ theme }) => theme.colors.gray500} transparent transparent;
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;

const Nickname = styled.p`
  padding: 1rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};

  white-space: nowrap;
`;

const ProblemNum = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.detail_regular_12};

  white-space: nowrap;
`;

const Graph = styled.span<{ $count: number }>`
  width: 1.8rem;
  height: ${({ $count }) => {
    switch ($count) {
      case -1:
      case 0:
        return '2rem';
      default:
        return `${$count + 1}rem`;
    }
  }};

  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;

  background-color: ${({ $count }) => {
    switch ($count) {
      case -1:
        return '#292A2F';
      case 0:
        return '#646875';
      case 1:
      case 2:
      case 3:
        return '#DCFFE4';
      case 4:
      case 5:
      case 6:
        return '#B7FFC7';
      case 7:
      case 8:
      case 9:
        return '#7DFF99';
      case 10:
      case 11:
      case 12:
        return '#59FF7E';
      case 13:
        return '#08FF3F';
      default:
        return '#08FF3F';
    }
  }};
`;
