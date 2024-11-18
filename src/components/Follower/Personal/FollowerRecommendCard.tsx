import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  IcFollowingGray,
  IcGithubLogoSmall,
  IcInformation,
  IcUnfollowingWhite,
} from '../../../assets';
import InformationTooltip from '../../../common/InformationTooltip';
import ErrorModal from '../../../common/Modal/ErrorModal/ErrorModal';
import useGetFollowerRecommend from '../../../libs/hooks/Follower/useGetFollowerRecommend';
import useUpdateFollower from '../../../libs/hooks/Follower/useUpdateFollower';

const FollowerRecommendCard = () => {
  const myNickname = sessionStorage.getItem('nickname');
  const navigate = useNavigate();

  const { data, isLoading } = useGetFollowerRecommend();
  const { mutation, updateFollowerErr } = useUpdateFollower();
  const { users } = !isLoading && data.data;
  const isError = updateFollowerErr.length > 0;

  const [errModalOn, setErrModalOn] = useState(isError);
  const [followingBtn, setFollowingBtn] = useState({
    isClicked: false,
    clickedNickname: [''],
  });

  const { isClicked, clickedNickname } = followingBtn;

  const handleClickProfile = (userId: number) => {
    navigate(`/follower/${userId}`);
    window.location.reload();
  };

  const handleClickFollowerBtn = (nickname: string) => {
    let newNicknameArr;
    if (clickedNickname.includes(nickname)) {
      const isDelete = true;
      newNicknameArr = clickedNickname.filter(
        (clickedValue) => clickedValue !== nickname
      );
      setFollowingBtn({
        isClicked: !isClicked,
        clickedNickname: newNicknameArr,
      });
      mutation({ nickname, isDelete });
    } else {
      const isDelete = false;
      setFollowingBtn((prev) => ({
        isClicked: !isClicked,
        clickedNickname: [...prev.clickedNickname, nickname],
      }));
      mutation({ nickname, isDelete });
    }
  };

  return (
    <>
      {!isLoading && users.length > 0 && (
        <RecommendCardContainer>
          <TitleContainer>
            <MyNickname>{myNickname}</MyNickname>
            <Title>님을 위한 추천</Title>

            <InformaitonContainer>
              <IcInformation />
              <InformationTooltip
                myNickname={`${myNickname}`}
                topContents="님 만을 위해"
                bottomContents="하루에 6명씩 랜덤으로 개발자를 추천해드려요"
              />
            </InformaitonContainer>
          </TitleContainer>

          <RecommendCard>
            {users.map(
              (
                user: {
                  userId: number;
                  profileImg: string;
                  nickname: string;
                  language: string;
                  githubUrl: string;
                },
                idx: number
              ) => {
                const { userId, profileImg, nickname, language, githubUrl } =
                  user;
                const isClickedBtn = clickedNickname.includes(nickname);
                return (
                  <PersonalCard key={userId} $addHr={idx < 4}>
                    <ProfileImgContainer>
                      <ProfileImg
                        src={profileImg}
                        $isGithubExit={githubUrl?.length !== 0}
                        onClick={() => handleClickProfile(userId)}
                      />
                      {githubUrl && (
                        <IcContainer>
                          <IcGithubLogoSmall />
                        </IcContainer>
                      )}
                    </ProfileImgContainer>

                    <ProfileInfo onClick={() => handleClickProfile(userId)}>
                      <Nickname>{nickname}</Nickname>
                      <Language>{`#${language}`}</Language>
                    </ProfileInfo>

                    <FollowingBtn
                      type="button"
                      $isFollowed={isClickedBtn}
                      onClick={() => handleClickFollowerBtn(nickname)}
                    >
                      {isClickedBtn ? (
                        <IcFollowingGray />
                      ) : (
                        <IcUnfollowingWhite />
                      )}
                      <FollowingText $isFollowed={isClickedBtn}>
                        {isClickedBtn ? `팔로잉` : `팔로우`}
                      </FollowingText>
                    </FollowingBtn>
                  </PersonalCard>
                );
              }
            )}
          </RecommendCard>

          {errModalOn && (
            <ErrorModal
              onClose={() => setErrModalOn(false)}
              errMsg={updateFollowerErr}
            />
          )}
        </RecommendCardContainer>
      )}
    </>
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

  ${({ theme }) => theme.fonts.title_bold_24};
  color: ${({ theme }) => theme.colors.codrive_green};
`;

const Title = styled.p`
  margin-right: 2.4rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const InformaitonContainer = styled.div`
  position: relative;

  &:hover > div {
    visibility: visible;

    margin: -0.3rem 0 0 -0.2rem;
    opacity: 1;
  }
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

const ProfileImgContainer = styled.div`
  position: relative;
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
  top: 4.8rem;
  left: 5.1rem;
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
