import styled from 'styled-components';

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
          <button>문제풀이 등록하러 가기</button>
        </PharseContainer>
      </Header>
    </Article>
  );
};

export default HomeHeader;

const Article = styled.article`
  width: 100%;
  height: 18.8rem;

  border-radius: 1.2rem;
  background-color: purple;

  max-width: 92.6rem;
`;

const Header = styled.header`
  background-color: red;
`;

const Date = styled.p`
  ${({ theme }) => theme.fonts.body_ligth_12};
  color: ${({ theme }) => theme.colors.white};
`;

const NickNameContainer = styled.div`
  display: flex;

  /* margin-right: 0.6rem; */

  background-color: coral;
  color: ${({ theme }) => theme.colors.white};
`;

const NickName = styled.p`
  margin-left: 0.6rem;

  /* background-color: aqua; */
  color: ${({ theme }) => theme.colors.codrive_green};
`;

const Pharse = styled.p`
  ${({ theme }) => theme.fonts.title_bold_24};
  color: ${({ theme }) => theme.colors.white};
`;

const PharseContainer = styled.div`
  display: flex;

  background-color: brown;
`;
