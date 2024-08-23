import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowRightSmallGray } from '../../assets';
import ApplicationModal from './ApplicationModal';

const GroupInfo = () => {
  const GROUP_DUMMY = {
    profileImg:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeGuevFy9rZ5UgkOzwzBGknwv6pObqnsLRw&s',
    nickname: '일이삼사오육칠팔구십',
    currentNum: 14,
    totalNum: 50,
    intro:
      '포폴 쌓으랴 코테 공부하랴 … CS공부는 제쳐두고 계셨나요? \n이제는 더이상 물러날 곳이 없습니다...',
    rules:
      '▶️ CS란? \n= Computer Science 프론트엔드/백엔드, 웹/앱과 무관하게 모든 개발자가 알아야 할 컴퓨터공학 전공 지식입니다. \n(네트워크, 운영체제, 데이터베이스 등)\n\n▶️ CS공부를 왜 해야하나요?\n개발자가 비즈니스 로직을 구축하는데에 기초가 되는 상식이기 때문! \n하지만 이런 이유 외에 좀 더 피부에 와닿는 이유는 \n[ 개발자 채용 과정 중 `기술 면접`에서 요구하는 지식이기 때문입니다 ]  \n포폴 쌓으랴 코테 공부하랴 … CS공부는 제쳐두고 계셨나요? 이제는 더이상 물러날 곳이 없습니다...\nㅇㅇㅇㅇㅇ',
  };

  const { profileImg, nickname, currentNum, totalNum, intro, rules } =
    GROUP_DUMMY;

  const [modalOn, setModalOn] = useState(false);

  return (
    <GroupInfoContainer>
      <TopInfo>
        <Host>
          <ProfileImg src={profileImg} />
          <Nickname>{nickname} 님</Nickname>
          <IcArrowRightSmallGray />
        </Host>

        <ApplicationStatus onClick={() => setModalOn(true)}>
          <Category>신청 현황</Category>
          <Status>
            <CurrentNum>{currentNum}</CurrentNum>
            <Text>/</Text>
            <TotalNum>{totalNum}</TotalNum>
            <Text>명</Text>
          </Status>
        </ApplicationStatus>
      </TopInfo>

      <Rules>
        <Rule>
          <Title>한 줄 소개</Title>
          <Description>{intro}</Description>
        </Rule>
        <Rule>
          <Title>진행 방식</Title>
          <Description>{rules}</Description>
        </Rule>
      </Rules>

      {modalOn && <ApplicationModal />}
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

  border-radius: 1.6rem;
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
`;
