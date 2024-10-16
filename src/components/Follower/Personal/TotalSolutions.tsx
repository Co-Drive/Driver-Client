import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcFollowingGray, IcUnfollowingWhite } from '../../../assets';
import ErrorModal from '../../../common/Modal/ErrorModal/ErrorModal';
import SavedSolutionList from '../../../common/SolutionList/SavedSolutionList';
import useGetUserProfile from '../../../libs/hooks/Follower/useGetUserProfile';
import useUpdateFollower from '../../../libs/hooks/Follower/useUpdateFollower';
import PageLayout from '../../PageLayout/PageLayout';

const TotalSolutions = () => {
  const { state } = useLocation();
  const { nickname } = state;
  const { id } = useParams();
  if (!id) return;
  const userId = parseInt(id);
  const { data, isLoading } = useGetUserProfile(parseInt(id)) || {};
  const { isFollowing } = !isLoading && data?.data;
  const { mutation, updateFollowerErr } = useUpdateFollower();
  const isError = updateFollowerErr.length > 0;

  const [errModalOn, setErrModalOn] = useState(isError);
  const [isClickedFollowBtn, setIsClickedFollowBtn] = useState(false);

  const handleClickFollowBtn = () => {
    setIsClickedFollowBtn(true);
    mutation({
      isDelete: isFollowing,
      nickname: nickname,
    });
  };

  useEffect(() => {
    setErrModalOn(isError);
    if (isError) setIsClickedFollowBtn(false);
  }, [isError, isClickedFollowBtn]);

  return (
    <PageLayout category="문제풀이">
      <TotalSolutionsContainer>
        <TopContainer>
          <NicknameContainer>
            <Nickname>{nickname}</Nickname>
            <Text>님이 푼 문제</Text>
          </NicknameContainer>

          {!isLoading && (
            <FollowingBtn
              type="button"
              $isFollowing={isFollowing}
              onClick={handleClickFollowBtn}
            >
              {isFollowing ? <IcFollowingGray /> : <IcUnfollowingWhite />}
              <FollowingText $isFollowing={isFollowing}>
                {isFollowing ? `팔로잉` : `팔로우`}
              </FollowingText>
            </FollowingBtn>
          )}
        </TopContainer>

        <SavedSolutionList userId={userId} isSmallList={false} />
      </TotalSolutionsContainer>

      {errModalOn && !isClickedFollowBtn && (
        <ErrorModal
          onClose={() => setErrModalOn(false)}
          errMsg={updateFollowerErr}
        />
      )}
    </PageLayout>
  );
};

export default TotalSolutions;

const TotalSolutionsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 92.6rem;
  padding: 6.8rem 0 16.4rem;
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

const FollowingBtn = styled.button<{ $isFollowing: boolean }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: 1rem 1.8rem;

  border-radius: 9.9rem;
  background-color: ${({ theme, $isFollowing }) =>
    $isFollowing ? theme.colors.gray700 : theme.colors.codrive_purple};
`;

const FollowingText = styled.p<{ $isFollowing: boolean }>`
  color: ${({ theme, $isFollowing }) =>
    $isFollowing ? theme.colors.gray100 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
