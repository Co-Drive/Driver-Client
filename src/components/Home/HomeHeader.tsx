import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import img_home_banner from '../../../img_home_banner.png';
import { IcWorkBookBlack } from '../../assets';
import { DAYS } from '../../constants/Home/day';
import useLoadImg from '../../libs/hooks/utils/useLoadImg';

const HomeHeader = () => {
  const nickname = sessionStorage.getItem('nickname');
  const navigate = useNavigate();

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfWeek = today.getDay();
  const currentDay = DAYS[dayOfWeek];

  const imgRef = useRef<HTMLImageElement>(null);
  const isImgLoaded = useLoadImg({ imgRef, imgSrc: img_home_banner });

  const handleRegister = () => {
    navigate('/solve');
  };

  return (
    <Article>
      <BgImg alt="홈 배너 배경 이미지" src={img_home_banner} ref={imgRef} />

      {isImgLoaded ? (
        <Header>
          <DateText>
            {month}월 {day}일 {currentDay}
          </DateText>
          <NickNameContainer>
            안녕하세요,<NickName>{nickname}</NickName>{' '}
            <NickNameSub>님!</NickNameSub>
          </NickNameContainer>
          <PharseContainer>
            <Pharse>오늘도 문제 풀어 볼까요?</Pharse>
            <Button onClick={handleRegister}>
              <IcContainer>
                <IcWorkBookBlack />
              </IcContainer>
              <Title>문제풀이 등록하러 가기</Title>
            </Button>
          </PharseContainer>
        </Header>
      ) : (
        <Skeleton />
      )}
    </Article>
  );
};

export default HomeHeader;

const Article = styled.article`
  position: relative;

  width: 100%;
  margin-top: 6.4rem;

  border-radius: 1.2rem;

  max-width: 92.6rem;
`;

const Skeleton = styled.div`
  width: 100%;
  height: 18.85rem;

  border-radius: 1.2rem;
  box-shadow: 0 0 10px 10px rgb(255 255 255 / 5%);

  background-color: ${({ theme }) => theme.colors.gray700};

  @keyframes skeleton-gradient {
    0% {
      opacity: 0.3;
    }

    50% {
      opacity: 0.6;
    }

    100% {
      opacity: 0.3;
    }
  }

  -webkit-animation: skeleton-gradient 2.5s infinite ease-in-out;
  animation: skeleton-gradient 2.5s infinite ease-in-out;
`;

const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 18.85rem;

  border-radius: 1.2rem;
`;

const Header = styled.header`
  position: relative;
  z-index: 1;

  padding: 3.2rem 3.6rem 3.4rem;
`;

const DateText = styled.p`
  margin-bottom: 2.9rem;

  ${({ theme }) => theme.fonts.body_ligth_12}
  color: ${({ theme }) => theme.colors.white};
`;

const NickNameContainer = styled.div`
  display: flex;

  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_medium_20};
`;

const NickName = styled.p`
  margin: 0 0.4rem 0 0.6rem;

  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const NickNameSub = styled.p`
  ${({ theme }) => theme.fonts.title_medium_20};
  color: ${({ theme }) => theme.colors.codrive_green};
`;

const Pharse = styled.p`
  ${({ theme }) => theme.fonts.title_bold_24};
  margin-right: 41.5rem;

  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;
`;

const PharseContainer = styled.div`
  display: flex;

  text-align: center;
`;

const Button = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  width: 19.8rem;
  padding: 0.95rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  cursor: pointer;
`;

const IcContainer = styled.div`
  align-items: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray900};

  white-space: nowrap;

  ${({ theme }) => theme.fonts.title_bold_16};
`;
