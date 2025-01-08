import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcWorkBookBlack } from '../../assets';
import ic_home_banner_bg from '../../assets/icon/ic_home_banner_bg.svg';
import { DAYS } from '../../constants/Home/day';

const HomeHeader = () => {
  const nickname = sessionStorage.getItem('nickname');
  const navigate = useNavigate();

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfWeek = today.getDay();
  const currentDay = DAYS[dayOfWeek];
  
  const handleRegister = () => {
    navigate('/solve');
  };

  return (
    <Article>
      <BgImg alt="홈 배너 배경 이미지" src={ic_home_banner_bg} />

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
const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: auto;

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
