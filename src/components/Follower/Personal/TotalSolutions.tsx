import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcFollowingGray, IcUnfollowingWhite } from '../../../assets';
import SavedSolutionList from '../../../common/SolutionList/SavedSolutionList';
import PageLayout from '../../PageLayout/PageLayout';

const TotalSolutions = () => {
  const { state } = useLocation();
  const { nickname, isFollowed } = state;
  const { id } = useParams();
  if (!id) return;
  const userId = parseInt(id);

  return (
    <PageLayout category="문제풀이">
      <TotalSolutionsContainer>
        <TopContainer>
          <NicknameContainer>
            <Nickname>{nickname}</Nickname>
            <Text>님이 푼 문제</Text>
          </NicknameContainer>

          <FollowingBtn type="button" $isFollowed={isFollowed}>
            {isFollowed ? <IcFollowingGray /> : <IcUnfollowingWhite />}
            <FollowingText $isFollowed={isFollowed}>
              {isFollowed ? `팔로잉` : `팔로우`}
            </FollowingText>
          </FollowingBtn>
        </TopContainer>

        <SavedSolutionList userId={userId} isSmallList={false} />
      </TotalSolutionsContainer>
    </PageLayout>
  );
};

export default TotalSolutions;

const TotalSolutionsContainer = styled.section`
  display: flex;
  gap: 5.1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 6.8rem 25.7rem 16.4rem;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

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

const FollowingBtn = styled.button<{ $isFollowed: boolean }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.8rem;

  border-radius: 9.9rem;
  background-color: ${({ theme, $isFollowed }) =>
    $isFollowed ? theme.colors.gray700 : theme.colors.codrive_purple};
`;

const FollowingText = styled.p<{ $isFollowed: boolean }>`
  color: ${({ theme, $isFollowed }) =>
    $isFollowed ? theme.colors.gray100 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
