import styled from 'styled-components';
import { IcWorkBookBlack } from '../../assets';
import home_Header from '../../assets/home_Header.svg';

const HomeHeader = () => {
  const todayDate = '7월1일 월요일';
  const nickname = '메링구';

  return (
    <Article>
      <Header>
        <Date>{todayDate}</Date>
        <NickNameContainer>
          안녕하세요,<NickName>{nickname} 님</NickName>
        </NickNameContainer>
        <PharseContainer>
          <Pharse>오늘도 문제 풀어 볼까요?</Pharse>

          <Button>
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

  /* height: 18.8rem; */

  border-radius: 1.2rem;

  max-width: 92.6rem;
  background-image: url(${home_Header});
`;

const Header = styled.header`
  /* background-color: red; */
  padding: 3.2rem 3.4rem 3.4rem 3.6rem;
`;

const Date = styled.p`
  margin-bottom: 2.9rem;

  /* background-color: red; */
  ${({ theme }) => theme.fonts.body_ligth_12}
  color: ${({ theme }) => theme.colors.white};
`;

const NickNameContainer = styled.div`
  display: flex;

  margin-bottom: 1.6rem;

  /* background-color: coral; */
  color: ${({ theme }) => theme.colors.white};
`;

const NickName = styled.p`
  margin-left: 0.6rem;

  /* background-color: aqua; */
  color: ${({ theme }) => theme.colors.codrive_green};
`;

const Pharse = styled.p`
  ${({ theme }) => theme.fonts.title_bold_24};
  /* margin-right: 41.9rem; */

  background-color: black;
  color: ${({ theme }) => theme.colors.white};
`;

const PharseContainer = styled.div`
  display: flex;
  gap: 41.9rem;

  /* background-color: brown; */
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  padding: 0.9rem 1.4rem;

  border-radius: 0.4rem;

  max-width: 20rem;

  background-color: ${({ theme }) => theme.colors.codrive_green};

  /* background-color: bisque; */
`;

const IcContainer = styled.div`
  margin-right: 0.6rem;

  /* background-color: cornflowerblue; */
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_14};
`;
