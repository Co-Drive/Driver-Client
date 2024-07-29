import styled, { css } from 'styled-components';

interface FollowerInfoProps {
  info: {
    profileImg: string;
    nickname: string;
    isFollowed: boolean;
    introduce: string;
    github: string;
  };
}

const FollowerInfo = ({ info }: FollowerInfoProps) => {
  const { profileImg, nickname, isFollowed, introduce, github } = info;

  return (
    <FollowerContainer>
      <Img src={profileImg} />
      <InfoContainer>
        <TopInfoContainer>
          <Nickname>{nickname}</Nickname>
          <FollowBtn type="button" $isFollowed={isFollowed}>
            {isFollowed ? '팔로잉' : '팔로우'}
          </FollowBtn>
        </TopInfoContainer>
        <Introduce>{introduce}</Introduce>
        <GithubContainer>
          <Github>{github}</Github>
        </GithubContainer>
      </InfoContainer>
    </FollowerContainer>
  );
};

export default FollowerInfo;

const FollowerContainer = styled.article`
  display: flex;
  gap: 4.3rem;
  align-items: center;

  min-width: 92.4rem;

  width: 100%;
  padding-bottom: 4.3rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;
const Img = styled.img`
  width: 12.8rem;
  height: 12.8rem;

  border-radius: 2rem;

  object-fit: cover;
`;

const InfoContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TopInfoContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  margin: 0.1rem 0 1.6rem;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const FollowBtn = styled.button<{ $isFollowed: boolean }>`
  padding: 0.6rem 1.6rem;

  border-radius: 0.6rem;

  ${({ $isFollowed, theme }) =>
    $isFollowed
      ? css`
          background-color: ${theme.colors.gray700};
          color: ${theme.colors.gray300};
        `
      : css`
          background-color: ${theme.colors.codrive_purple};
          color: ${theme.colors.white};
        `};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Introduce = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_medium_20};
`;

const GithubContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  margin-top: 2rem;
`;

const Github = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_eng_regular_14};
`;
