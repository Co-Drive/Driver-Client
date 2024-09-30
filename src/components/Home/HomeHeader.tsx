import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcWorkBookBlack } from '../../assets';
import ic_home_Header from '../../assets/icon/ic_home_Header.svg';

const HomeHeader = () => {
  const nickname = sessionStorage.getItem('nickname');
  const navigate = useNavigate();

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfWeek = today.getDay();
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const currentDay = days[dayOfWeek];
  const handleRegister = () => {
    navigate('/solve');
  };

  return (
    <Article>
      <Header>
        <DateText>
          {month}월 {day}일 {currentDay}
        </DateText>
        <NickNameContainer>
          안녕하세요,<NickName>{nickname}</NickName>님!
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
  width: 100%;
  margin-top: 6.4rem;

  border-radius: 1.2rem;

  max-width: 92.6rem;
  background-image: url(${ic_home_Header});
`;

const Header = styled.header`
  padding: 3.2rem 3.4rem 4.4rem 3.6rem;
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

const Pharse = styled.p`
  ${({ theme }) => theme.fonts.title_bold_24};
  color: ${({ theme }) => theme.colors.white};
`;

const PharseContainer = styled.div`
  display: flex;
  justify-content: space-between;

  /* align-items: center; */
`;

const Button = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  cursor: pointer;

  position: relative;
  top: 1rem;

  padding: 0.9rem 1.4rem;

  /* margin-top: 1.2rem; */

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};

  max-width: 20rem;
`;

const IcContainer = styled.div`
  align-items: center;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray900};

  white-space: nowrap;

  ${({ theme }) => theme.fonts.title_bold_16};
`;
