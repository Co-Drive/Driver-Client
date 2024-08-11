import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
import TempSave from '../components/Solution/List/TempSave';
import SavedSolutionList from '../components/Solution/List/SavedSolutionList';

const SolutionListPage = () => {
  const nickname = sessionStorage.getItem('nickname');
  return (
    <PageLayout category="문제풀이">
      <ListPageContainer>
        <TitleContainer>
          <Nickname>{nickname}</Nickname>
          <Title>님이 푼 문제</Title>
        </TitleContainer>

        <TempSave />

        <SavedSolutionList />
      </ListPageContainer>
    </PageLayout>
  );
};

export default SolutionListPage;

const ListPageContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 6.4rem 25.7rem 18rem;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;
