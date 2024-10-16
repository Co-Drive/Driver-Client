import { useState } from 'react';
import styled from 'styled-components';
import { IcInformation, ImgRankingBg } from '../../assets';
import RankingTooltip from './RankingTooltip';

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
          {isHovered && <RankingTooltip />}
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

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;
