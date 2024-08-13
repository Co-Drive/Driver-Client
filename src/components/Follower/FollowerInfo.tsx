// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  IcFollowingGray,
  IcGithubSmall,
  IcUnfollowingWhite,
} from '../../assets';
import { deleteFollower } from '../../libs/apis/Follower/deleteFollower';
import { postFollower } from '../../libs/apis/Follower/postFollower';
import { FollowerInfoProps } from '../../types/Follower/Personal/personalType';
import { handleClickLink } from '../../utils/handleClickLink';

const FollowerInfo = ({ info }: FollowerInfoProps) => {
  const {
    profileImg,
    nickname,
    isFollowed,
    introduce,
    language,
    github,
    // rate,
  } = info;

  const handleClickFollowBtn = async () => {
    try {
      isFollowed ? await deleteFollower('문주') : await postFollower('문주');

      // 추후 아래 코드로 변경할 예정
      // isFollowed ? await deleteFollower(nickname) : await postFollower(nickname);
    } catch (error) {
      console.log(error);

      // 추후 아래 코드로 변경할 예정
      // navigate('/error');
    }
  };

  return (
    <FollowerInfoContainer>
      <Language>{language}</Language>

      <ProfileContainer>
        <ProfileImg src={profileImg}></ProfileImg>

        <ProfileTextContainer>
          <NicknameContainer>
            <Nickname>{nickname}</Nickname>
            <NicknameText $isGithubExit={github}>님</NicknameText>
            {github && (
              <IcGithubSmall onClick={() => handleClickLink(github)} />
            )}
          </NicknameContainer>
          <Introduce>{introduce}</Introduce>
        </ProfileTextContainer>
      </ProfileContainer>

      <FollowingBtn
        type="button"
        onClick={handleClickFollowBtn}
        $isFollowed={isFollowed}
      >
        {isFollowed ? <IcFollowingGray /> : <IcUnfollowingWhite />}
        <Text $isFollowed={isFollowed}>
          {isFollowed ? `팔로잉` : `팔로우 추가`}
        </Text>
      </FollowingBtn>
    </FollowerInfoContainer>
  );
};

export default FollowerInfo;

const FollowerInfoContainer = styled.article`
  display: flex;
  flex-direction: column;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};

  min-width: 29.7rem;
`;

const Language = styled.p`
  padding: 0.6rem 1rem;
  margin: 1.6rem 19.9rem 0 1.6rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.fonts.body_eng_medium_12};
  text-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 3rem 0;
`;

const ProfileImg = styled.img`
  width: 11rem;
  height: 11rem;
  margin-bottom: 3rem;

  border-radius: 5rem;
`;

const ProfileTextContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 3.2rem;
`;

const NicknameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const NicknameText = styled.p<{ $isGithubExit?: string }>`
  margin-right: ${({ $isGithubExit }) => $isGithubExit && `1rem`};
  margin-left: 0.4rem;

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.title_medium_20};
`;

const Introduce = styled.p`
  max-width: 23.3rem;

  width: 100%;
  word-wrap: break-word;

  color: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.fonts.title_regular_14};
  text-align: center;
`;

const FollowingBtn = styled.button<{ $isFollowed: boolean }>`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1rem 0;
  border-bottom-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;

  background-color: ${({ theme, $isFollowed }) =>
    $isFollowed ? theme.color.gray700 : theme.colors.codrive_purple};
`;

const Text = styled.p<{ $isFollowed: boolean }>`
  color: ${({ theme, $isFollowed }) =>
    $isFollowed ? theme.color.gray100 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
