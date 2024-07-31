// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowLeftFill, IcArrowRightFill } from '../../assets';

interface FollowerRecommendCardProps {
  recommend: Array<{
    profileImg: string;
    nickname: string;
    language: string;
    isFollowed: boolean;
  }>;
}

const FollowerRecommendCard = ({ recommend }: FollowerRecommendCardProps) => {
  const myNickname = sessionStorage.getItem('nickname');
  const [transparency, setTransparency] = useState({
    left: true,
    right: false,
  });
  //   const navigate = useNavigate();

  const handleClickIcLeft = () => {
    const cardsContainer = document.getElementById('cardsContainer');
    if (cardsContainer)
      cardsContainer.scrollTo({ left: 0, behavior: 'smooth' });
    setTransparency({
      left: true,
      right: false,
    });
  };

  const handleClickContents = (nickname: string) => {
    // 라우팅 저장 후 콘솔 지우고 해당 코드로 변경 예정 !!
    // navigate(`/follower/${nickname}`);

    console.log(nickname);
  };

  const handleClickFollowBtn = () => {
    // 서버와 통신하는 코드로 대체할 예정
    console.log('click!');
  };

  const handleClickIcRight = () => {
    const cardsContainer = document.getElementById('cardsContainer');
    if (cardsContainer) {
      // 최대 너비 구하기
      const maxWidth = cardsContainer.scrollWidth - cardsContainer.clientWidth;
      cardsContainer.scrollTo({ left: maxWidth, behavior: 'smooth' });
      setTransparency({
        left: false,
        right: true,
      });
    }
  };

  return (
    <RecommendCardContainer>
      <TitleContainer>
        <MyNickname>{myNickname}</MyNickname>
        <Title>님을 위한 추천</Title>
      </TitleContainer>

      <IcLeftContainer
        onClick={handleClickIcLeft}
        $transparency={transparency.left}
      >
        <IcArrowLeftFill />
      </IcLeftContainer>
      <CardsContainer id="cardsContainer">
        {recommend.map((info) => {
          const { profileImg, nickname, language, isFollowed } = info;
          return (
            <CardContainer key={nickname}>
              <Contents onClick={() => handleClickContents(nickname)}>
                <ProfileImg src={profileImg} />
                <Nickname>{nickname}</Nickname>
                <Language>{`#${language}`}</Language>
              </Contents>
              <FollowBtn type="button" onClick={handleClickFollowBtn}>
                {isFollowed ? '팔로잉' : '팔로우'}
              </FollowBtn>
            </CardContainer>
          );
        })}
      </CardsContainer>

      <IcRightContainer
        onClick={handleClickIcRight}
        $transparency={transparency.right}
      >
        <IcArrowRightFill />
      </IcRightContainer>
    </RecommendCardContainer>
  );
};

export default FollowerRecommendCard;

const RecommendCardContainer = styled.article`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;
  position: relative;

  width: 100%;
  margin-top: 9.6rem;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  margin-left: 0.3rem;
`;

const MyNickname = styled.p`
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.codrive_green};
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const IcLeftContainer = styled.div<{ $transparency: boolean }>`
  position: absolute;
  top: 14.8rem;
  left: -4.2rem;

  opacity: ${({ $transparency }) => ($transparency ? 0 : 100)};
`;

const CardsContainer = styled.article`
  display: flex;
  gap: 2.2rem;
  align-items: center;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none;
  }

  min-width: 92.3rem;

  width: 100%;
  overflow-x: auto;
`;

const CardContainer = styled.article`
  min-width: 18.9rem;

  padding-top: 2.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileImg = styled.img`
  width: 4.9rem;
  height: 4.9rem;
  margin-bottom: 1.6rem;

  border-radius: 5rem;
`;

const Nickname = styled.p`
  margin-bottom: 0.8rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const Language = styled.p`
  margin-bottom: 2.8rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_regular_14};
`;

const FollowBtn = styled.button`
  padding: 1.6rem 7.6rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray700};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.codrive_purple};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const IcRightContainer = styled.div<{ $transparency: boolean }>`
  position: absolute;
  top: 14.8rem;
  right: -3.9rem;

  opacity: ${({ $transparency }) => ($transparency ? 0 : 100)};
`;