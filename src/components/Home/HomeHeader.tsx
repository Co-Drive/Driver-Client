import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcWorkBookBlack } from '../../assets';
import home_Header from '../../assets/home_Header.svg';

const HomeHeader = () => {
  const nickname = '메링구';
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
          안녕하세요,<NickName>{nickname} 님</NickName>
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

  border-radius: 1.2rem;

  max-width: 92.6rem;
  background-image: url(${home_Header});
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
  margin-left: 0.6rem;

  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_medium_20};
`;

const Pharse = styled.p`
  ${({ theme }) => theme.fonts.title_bold_24};
  color: ${({ theme }) => theme.colors.white};
`;

const PharseContainer = styled.div`
  display: flex;

  /* 여기 질문 */

  /* gap: 41.9rem; */
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  padding: 0.9rem 1.4rem;

  border-radius: 0.4rem;

  max-width: 20rem;

  background-color: ${({ theme }) => theme.colors.codrive_green};
`;

const IcContainer = styled.div`
  margin-right: 0.6rem;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_14};
`;
