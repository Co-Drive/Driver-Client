import styled, { css } from 'styled-components';
import {
  IcFollowingGray,
  IcGithubLogoSmall,
  IcInformation,
  IcUnfollowingWhite,
} from '../../../assets';
import { FollowerRecommendCardProps } from '../../../types/Follower/Personal/personalType';

const FollowerRecommendCard = ({ recommend }: FollowerRecommendCardProps) => {
  const myNickname = sessionStorage.getItem('nickname');

  return (
    <RecommendCardContainer>
      <TitleContainer>
        <MyNickname>{myNickname}</MyNickname>
        <Title>님을 위한 추천</Title>
        <IcInformation />
      </TitleContainer>

      <RecommendCard>
        {recommend.map((randomFollower, idx) => {
          const { id, profileImg, nickname, language, github, isFollowed } =
            randomFollower;
          return (
            <PersonalCard key={id} $addHr={idx < 4}>
              <ProfileImg
                src={profileImg}
                $isGithubExit={github?.length !== 0}
              />
              {github && (
                <IcContainer>
                  <IcGithubLogoSmall />
                </IcContainer>
              )}

              <ProfileInfo>
                <Nickname>{nickname}</Nickname>
                <Language>{`#${language}`}</Language>
              </ProfileInfo>

              <FollowingBtn type="button" $isFollowed={isFollowed}>
                {isFollowed ? <IcFollowingGray /> : <IcUnfollowingWhite />}
                <FollowingText $isFollowed={isFollowed}>
                  {isFollowed ? `팔로잉` : `팔로우`}
                </FollowingText>
              </FollowingBtn>
            </PersonalCard>
          );
        })}
      </RecommendCard>
    </RecommendCardContainer>
  );
};

export default FollowerRecommendCard;

const RecommendCardContainer = styled.article`
  display: flex;
  gap: 3.8rem;
  justify-content: center;
  flex-direction: column;
  position: relative;

  width: 100%;
  margin-top: 9.8rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: 0.3rem;
`;

const MyNickname = styled.p`
  margin-right: 0.4rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.codrive_green};
`;

const Title = styled.p`
  margin-right: 2.4rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const RecommendCard = styled.article`
  display: grid;
  gap: 0.4rem 1.8rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  width: 100%;
  padding: 2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const PersonalCard = styled.article<{ $addHr: boolean }>`
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  padding: 1.4rem 1rem;

  ${({ $addHr, theme }) =>
    $addHr &&
    css`
      width: calc(100% - 2rem);
      padding: 1.4rem 0 1.8rem;
      margin: 0 1rem;

      border-bottom: 0.1rem solid ${theme.colors.gray600};
    `};
`;

const ProfileImg = styled.img<{ $isGithubExit: boolean }>`
  width: 6.8rem;
  height: 6.8rem;
  margin-right: ${({ $isGithubExit }) => ($isGithubExit ? `1.5rem` : `1.8rem`)};

  border-radius: 5rem;
  object-fit: cover;
`;

const IcContainer = styled.span`
  position: absolute;
  top: 6.2rem;
  left: 6.1rem;
`;

const ProfileInfo = styled.div`
  display: flex;
  gap: 1.4rem;
  justify-content: center;
  flex-direction: column;

  margin-right: 6.2rem;

  min-width: 15.6rem;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_18};
`;

const Language = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
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
