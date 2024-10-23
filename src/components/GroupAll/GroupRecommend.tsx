import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IcBtnInformation } from '../../assets';
import RecommendCard from '../../common/RecommendCard';
import { getRoomRecommend } from '../../libs/apis/GroupAll/getRoomRecommend';

const GroupRecommend = () => {
  const nickname = sessionStorage.getItem('nickname');
  const [groupData, setGroupData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRoomRecommend();

      if (response.code === 200) {
        const data = response.data;

        if (data && data.rooms) {
          const limitedRooms = data.rooms.slice(0, 6);
          setGroupData(limitedRooms);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <GroupRecommendContainer>
      <TitleContainer>
        <Nickname>{nickname}</Nickname>님을 위한 오늘의 추천 그룹
        <Notic>
          <IcBtnInformation />
          <Tooltip>
            <Text>
              <TooUser>{nickname}</TooUser> 님 만을 위해
            </Text>
            <Text>6개씩 랜덤으로 그룹을 추천해드려요</Text>
          </Tooltip>
        </Notic>
      </TitleContainer>
      <RecommendCard group={groupData} isLongPage={true} />
    </GroupRecommendContainer>
  );
};

const GroupRecommendContainer = styled.article`
  margin-bottom: 10.2rem;
`;

const TitleContainer = styled.header`
  display: flex;
  align-items: center;

  margin: 0 0 3rem 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Nickname = styled.p`
  margin-right: 0.4rem;

  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Notic = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  margin-left: 2.5rem;

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  display: block;
  position: absolute;
  top: 3rem;
  visibility: hidden;
  z-index: 10;

  width: 19.3rem;
  height: auto;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: nowrap;

  opacity: 0;
  transform: translateX(-5%);
  transition: opacity 0.3s ease-in-out;

  &::after {
    position: absolute;
    bottom: 100%;
    left: 1.7rem;

    margin-left: -0.1rem;

    border-color: transparent transparent ${({ theme }) => theme.colors.gray600};
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;

const TooUser = styled.span`
  display: inline-flex;

  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_12};
  line-height: 1.8rem;
`;

export default GroupRecommend;
