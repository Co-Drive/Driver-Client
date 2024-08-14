import styled from 'styled-components';
import SavedSolutionList from '../../../common/SolutionList/SavedSolutionList';
import PageLayout from '../../PageLayout/PageLayout';
import { SolutionsProps } from './Solutions';

const TotalSolutions = ({ nickname }: SolutionsProps) => {
  return (
    <PageLayout category="문제풀이">
      <TotalSolutionsContainer>
        <TopContainer>
          <NicknameContainer>
            <Nickname>{nickname}</Nickname>
            <Text>님이 푼 문제</Text>
          </NicknameContainer>
        </TopContainer>

        <SavedSolutionList isSmallList={false} />
      </TotalSolutionsContainer>
    </PageLayout>
  );
};

export default TotalSolutions;

const TotalSolutionsContainer = styled.section`
  display: flex;
  gap: 5.9rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 6.8rem 25.7rem 16.4rem;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const NicknameContainer = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-left: 0.2rem;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;
