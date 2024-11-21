import styled from 'styled-components';
import SavedSolutionList from '../common/SolutionList/SavedSolutionList';
import PageLayout from '../components/PageLayout/PageLayout';
import TempSave from '../components/Solution/List/TempSave';

const SolutionListPage = () => {
  const nickname = sessionStorage.getItem('nickname');
  const id = sessionStorage.getItem('user');
  if (!id) return;
  const userId = parseInt(id);

  return (
    <PageLayout category="문제풀이">
      <ListPageContainer>
        <TitleContainer>
          <Nickname>{nickname}</Nickname>
          <Title>님이 푼 문제</Title>
        </TitleContainer>

        <TempSave />

        <SavedSolutionList userId={userId} isSmallList={false} />
      </ListPageContainer>
    </PageLayout>
  );
};

export default SolutionListPage;

const ListPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 11.5rem);

  width: 92.6rem;
  padding: 6.4rem 0 33.2rem;
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
