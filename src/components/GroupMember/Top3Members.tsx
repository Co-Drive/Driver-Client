import { useState } from 'react';
import styled from 'styled-components';
import { IcInformation, ImgRankingBg } from '../../assets';

const Top3Members = () => {
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  const todayDate = new Date().getDate();

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverIc = () => setIsHovered(true);
  const handleLeaveIc = () => setIsHovered(false);

  return (
    <Top3MembersContainer>
      <TopInfo>
        <DateInfo>{`${todayYear}.${todayMonth}.${todayDate} 기준 문제풀이 순위`}</DateInfo>
        <IcContainer>
          <IcInformation
            onMouseEnter={handleHoverIc}
            onMouseLeave={handleLeaveIc}
          />
          {isHovered && (
            <TooltipContainer>
              <Contents $isImportantContents={true}>
                *랭킹 순위는 매주 업데이트 됩니다
              </Contents>
              <Contents $isImportantContents={false}>
                문제풀이 개수가 같다면 랜덤으로 순위가 결정됩니다
              </Contents>
            </TooltipContainer>
          )}
        </IcContainer>
      </TopInfo>

      <Img src={ImgRankingBg} />
    </Top3MembersContainer>
  );
};

export default Top3Members;

const Top3MembersContainer = styled.article`
  position: relative;

  width: 100%;
  height: 21.6rem;
  margin-top: 1.8rem;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  left: 2.4rem;
  z-index: 1;
`;

const DateInfo = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const IcContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  position: relative;
`;

const TooltipContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  position: absolute;
  top: 2.6rem;
  left: 0;
  z-index: 1;

  width: fit-content;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.gray600};

  transform: translate(-2.5%);
  transition: opacity 0.3s ease-in-out;

  &::after {
    position: absolute;
    bottom: 100%;

    border-color: transparent transparent ${({ theme }) => theme.colors.gray600};
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;

const Contents = styled.div<{ $isImportantContents: boolean }>`
  color: ${({ theme, $isImportantContents }) =>
    $isImportantContents ? theme.colors.codrive_green : theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: nowrap;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;
