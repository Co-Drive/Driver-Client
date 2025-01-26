import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  IcInformation,
  IcRank1,
  IcRank2,
  IcRank2Gray,
  IcRank3,
  IcRank3Gray,
  ImgEmptyProfile,
  ImgRankBgNonePeople,
  ImgRankingBg,
} from '../../assets';
import useGetRanking from '../../libs/hooks/GroupMember/useGetRanking';
import { RankType } from '../../types/Admin/memberTypes';
import RankingTooltip from './RankingTooltip';

const Top3Members = () => {
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  const todayDate = new Date().getDate();

  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) return;
  const roomId = parseInt(id);
  const { data, isLoading } = useGetRanking(roomId);
  const { rank } = !isLoading && data.data;
  const isActiveRank = !isLoading && rank.length > 0;
  const rankBg = isActiveRank ? ImgRankingBg : ImgRankBgNonePeople;
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

  const handleHoverIc = () => setIsHovered(true);
  const handleLeaveIc = () => setIsHovered(false);

  const handleClickSolveBtn = () => {
    navigate('/solve');
  };

  const renderProfile = (idx: number, userId: number) => {
    if (userId === -1) {
      if (idx === 0) return <IcRank2Gray />;
      else if (idx === 2) return <IcRank3Gray />;
    } else {
      if (idx === 0) return <IcRank2 />;
      else if (idx === 1) return <IcRank1 />;
      else return <IcRank3 />;
    }
  };

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

      <Img src={rankBg} alt="랭킹 배경 이미지" />

      {isActiveRank ? (
        <MembersContainer>
          {finalRank.map((member, idx) => {
            const { userId, profileImg, nickname } = member;

            return (
              <Member key={idx} $winner={idx === 1}>
                <Ranking $winner={idx === 1}>
                  {renderProfile(idx, userId)}
                </Ranking>
                <ProfileImgContainer
                  $winner={idx === 1}
                  $isNotRealUser={userId === -1}
                >
                  <ProfileImg src={profileImg} alt="사용자 프로필 이미지" />
                </ProfileImgContainer>
                <ProfileName $winner={idx === 1} $isNotRealUser={userId === -1}>
                  {nickname}
                </ProfileName>
              </Member>
            );
          })}
        </MembersContainer>
      ) : (
        <NonePeopleContainer>
          <MotivationTextContainer>
            <MotivationText>오늘 문제를 푼 사용자가 아직 없어요</MotivationText>
            <MotivationText>가장 먼저 문제를 풀어보세요!</MotivationText>
          </MotivationTextContainer>

          <SolveBtn onClick={handleClickSolveBtn}>
            문제풀이 등록하러 가기
          </SolveBtn>
        </NonePeopleContainer>
      )}
    </Top3MembersContainer>
  );
};

export default Top3Members;

const Top3MembersContainer = styled.article`
  position: relative;

  width: 92.6rem;
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

const NonePeopleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin-top: 6.2rem;
`;

const MotivationTextContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MotivationText = styled.p`
  z-index: 1;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_medium_20};

  text-align: center;
`;

const SolveBtn = styled.button`
  z-index: 1;

  padding: 0.95rem 1.4rem;
  margin-top: 2.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const MembersContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin-bottom: 4.2rem;
`;

const Member = styled.div<{ $winner: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;

  ${({ $winner }) =>
    $winner
      ? css`
          margin: 3.6rem 17.9rem 0 17.7rem;
        `
      : css`
          margin-top: 9.8rem;
        `};
`;

const Ranking = styled.span<{ $winner: boolean }>`
  z-index: 1;

  margin-bottom: ${({ $winner }) => ($winner ? '-1rem' : '-0.2rem')};
`;

const ProfileImgContainer = styled.div<{
  $winner: boolean;
  $isNotRealUser: boolean;
}>`
  z-index: 1;

  ${({ $winner, $isNotRealUser, theme }) =>
    $winner
      ? css`
          width: 8.8rem;
          height: 8.459rem;
          padding: 0.459rem 0.6rem 0.4rem;

          border: 0.4rem solid
            ${$isNotRealUser
              ? theme.colors.gray400
              : theme.colors.codrive_green};
        `
      : css`
          width: 4.2rem;
          height: 4.024rem;
          padding: 0.3rem 0.4rem 0.324rem;

          border: 0.1rem solid
            ${$isNotRealUser
              ? theme.colors.gray400
              : theme.colors.codrive_green};
        `};

  border-radius: 50%;
  clip-path: polygon(0 0, 0 7%, 100% 7%, 100% 100%, 0 100%);
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.p<{ $winner: boolean; $isNotRealUser: boolean }>`
  position: absolute;
  top: ${({ $winner }) => ($winner ? '10.5rem' : '5.602rem')};
  z-index: 1;

  margin-top: 1rem;

  color: ${({ theme, $isNotRealUser }) =>
    $isNotRealUser ? theme.colors.gray400 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_18};

  white-space: nowrap;
`;
