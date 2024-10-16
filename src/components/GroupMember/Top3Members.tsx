import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcInformation, ImgEmptyProfile, ImgRankingBg } from '../../assets';
import useGetRanking from '../../libs/hooks/GroupMember/useGetRanking';
import RankingTooltip from './RankingTooltip';

interface RankType {
  rank: Array<{
    language: string;
    nickname: string;
    profileImg: string;
    userId: number;
  }>;
}

const Top3Members = () => {
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  const todayDate = new Date().getDate();

  const { id } = useParams();
  if (!id) return;
  const roomId = parseInt(id);
  const { data, isLoading } = useGetRanking(roomId);
  const { rank } = !isLoading && data.data;
  const isActiveRank = !isLoading && rank.length > 0;
  const changedRank = isActiveRank ? [rank[1], rank[0], rank[2]] : [];
  const finalRank = Array(3)
    .fill(0)
    .map((_: RankType, idx: number) => {
      return (
        changedRank[idx] || {
          language: null,
          nickname: '아직 등록된 사용자가 없어요',
          profileImg: ImgEmptyProfile,
          userId: -1,
        }
      );
    });
  const [isHovered, setIsHovered] = useState(false);

  console.log(rank);

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

      <Img src={ImgRankingBg} alt="랭킹 배경 이미지" />

      <MembersContainer>
        {finalRank.map((member, idx) => {
          const { userId, profileImg, nickname } = member;

          return (
            <Member key={idx} $winner={idx === 1}>
              <ProfileImgContainer $winner={idx === 1}>
                <ProfileImg src={profileImg} alt="프로필 이미지" />
              </ProfileImgContainer>
              <ProfileName $isNotRealUser={userId === -1}>
                {nickname}
              </ProfileName>
            </Member>
          );
        })}
      </MembersContainer>
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

const MembersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-bottom: 4.2rem;
`;

const Member = styled.div<{ $winner: boolean }>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ $winner }) =>
    $winner
      ? css`
          margin-right: 17.7rem;
          margin-left: 17.9rem;
        `
      : css`
          margin-top: 11rem;
        `};
`;

const ProfileImgContainer = styled.div<{ $winner: boolean }>`
  z-index: 1;

  ${({ $winner, theme }) =>
    $winner
      ? css`
          width: 6.8rem;
          height: 6.8rem;
          outline: 0.4rem solid ${theme.colors.codrive_green};
        `
      : css`
          width: 3.4rem;
          height: 3.4rem;
          outline: 0.1rem solid ${theme.colors.green300};
        `};

  padding: 1rem;

  border-radius: 50%;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.p<{ $isNotRealUser: boolean }>`
  z-index: 1;

  color: ${({ theme, $isNotRealUser }) =>
    $isNotRealUser ? theme.colors.gray400 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;
