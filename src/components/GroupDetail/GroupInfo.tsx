import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowRightSmallGray } from '../../assets';
import { GroupInfoProps } from '../../types/GroupDetail/groupDetailType';
import ApplicationModal from './ApplicationModal';

const GroupInfo = ({
  id,
  owner,
  requestedCount,
  capacity,
  introduce,
  information,
}: GroupInfoProps) => {
  const { userId, nickname, profileImg } = owner;
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);

  const handleClickApplicationStatus = () => {
    setModalOn(true);
  };

  const handleClickHost = () => {
    navigate(`/follower/${userId}`);
  };

  return (
    <GroupInfoContainer>
      <TopInfo>
        <Host onClick={handleClickHost}>
          <ProfileImg src={profileImg} alt="사용자 프로필 이미지" />
          <Nickname>{nickname} 님</Nickname>
          <IcArrowRightSmallGray />
        </Host>

        <ApplicationStatus onClick={handleClickApplicationStatus}>
          <Category>신청 현황</Category>
          <Status>
            <CurrentNum>{requestedCount}</CurrentNum>
            <Text>/</Text>
            <TotalNum>{capacity}</TotalNum>
            <Text>명</Text>
          </Status>
        </ApplicationStatus>
      </TopInfo>

      <Rules>
        <Rule>
          <Title>한 줄 소개</Title>
          <Description>{introduce}</Description>
        </Rule>
        <Rule>
          <Title>진행 방식</Title>
          <Description>{information}</Description>
        </Rule>
      </Rules>

      {modalOn && (
        <ApplicationModal id={id} onClose={() => setModalOn(false)} />
      )}
    </GroupInfoContainer>
  );
};

export default GroupInfo;

const GroupInfoContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding-bottom: 2.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const Host = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;

  border-radius: 5rem;
  object-fit: cover;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;

const ApplicationStatus = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  padding: 1.2rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Category = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_ligth_16};
`;

const Status = styled.div`
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
`;

const CurrentNum = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const TotalNum = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Rules = styled.div`
  display: flex;
  gap: 6.4rem;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;

  width: 100%;
  margin: 4.4rem 0.1rem 0;
`;

const Rule = styled.div`
  display: flex;
  gap: 2.2rem;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.fonts.body_medium_20};
  white-space: pre-wrap;
`;
