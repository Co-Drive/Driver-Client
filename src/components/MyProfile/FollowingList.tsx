import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  IcFollowingGray,
  IcGithubLogoSmall,
  IcUnfollowingWhite,
} from '../../assets';
import ErrorModal from '../../common/Modal/ErrorModal/ErrorModal';
import useUpdateFollower from '../../libs/hooks/Follower/useUpdateFollower';
import useDeleteUser from '../../libs/hooks/MyProfile/useDeleteUser';
import useGetFollowList from '../../libs/hooks/MyProfile/useGetFollowList';
import { UpdateFollowerProps } from '../../types/Follower/Personal/personalType';
import { UserType } from '../../types/MyProfile/MyProfileType';

const FollowingList = () => {
  const [isFollowerSelected, setIsFollowerSelected] = useState(true); // 팔로워/팔로잉 탭 선택 상태
  const [updatedUsers, setUpdatedUsers] = useState<UserType[]>([]); // 업데이트된 사용자 리스트
  const [isFirstLoad, setIsFirstLoad] = useState(true); // 최초 로드 여부 체크
  const navigate = useNavigate();

  const { mutation, updateFollowerErr } = useUpdateFollower();
  const { deleteMutation, deleteUserErr } = useDeleteUser();
  const { followData, isLoading } = useGetFollowList(isFollowerSelected); // API로 팔로워/팔로잉 리스트 불러오기
  const isError = deleteUserErr.length > 0 || updateFollowerErr.length > 0;

  const [onErrModal, setOnErrModal] = useState(isError);

  // API 호출로 얻은 데이터를 updatedUsers에 저장 (최초 로드 시에만)
  useEffect(() => {
    if (!isLoading && followData && isFirstLoad) {
      setUpdatedUsers(followData.data.users); // 최초 리스트 설정
      setIsFirstLoad(false); // 첫 로드 이후에는 더 이상 업데이트하지 않도록 설정
    }
  }, [followData, isLoading, isFirstLoad]);

  // 팔로우/언팔로우 버튼 클릭 시 상태 업데이트
  const handleClickFollowerBtn = ({
    nickname,
    isDelete,
  }: UpdateFollowerProps) => {
    mutation(
      { nickname, isDelete },
      {
        onSuccess: () => {
          // API 성공 후, 팔로우 상태만 반전시키기 (리스트에서 제거하지 않음)
          setUpdatedUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.nickname === nickname
                ? { ...user, isFollowing: !isDelete } // 팔로우 상태 반전
                : user
            )
          );
        },
      }
    );
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        '지금 탈퇴하시면 더 이상 서비스를 이용할 수 없습니다. 탈퇴하시겠습니까?'
      )
    )
      deleteMutation();
  };

  const handleClickProfile = (userId: number) => {
    navigate(`/follower/${userId}`);
    window.location.reload(); // 페이지 새로고침
  };

  // 오류 모달 제어
  useEffect(() => {
    setOnErrModal(isError);
  }, [isError]);

  return (
    <div>
      <HeaderContainer>
        <TitleContainer>
          <Title>친구 목록</Title>
          <FriendCount>{updatedUsers.length} 명</FriendCount>{' '}
          {/* 업데이트된 사용자 수 */}
        </TitleContainer>
        <TabContainer>
          <Tab
            $selected={isFollowerSelected}
            onClick={() => {
              setIsFollowerSelected(true);
              setIsFirstLoad(true); // 탭 전환 시에도 리스트 새로고침 허용
            }}
          >
            팔로워
          </Tab>
          <Divider>|</Divider>
          <Tab
            $selected={!isFollowerSelected}
            onClick={() => {
              setIsFollowerSelected(false);
              setIsFirstLoad(true); // 탭 전환 시에도 리스트 새로고침 허용
            }}
          >
            팔로잉
          </Tab>
        </TabContainer>
      </HeaderContainer>
      <RecommendCard>
        {!isLoading &&
          updatedUsers.map((user: UserType) => {
            const {
              userId,
              profileImg,
              nickname,
              language,
              githubUrl,
              isFollowing,
            } = user;
            return (
              <PersonalCard key={userId} $addHr={true}>
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

                <ProfileInfo onClick={() => handleClickProfile(userId)}>
                  <Nickname>{nickname}</Nickname>
                  <Language>{`#${language}`}</Language>
                </ProfileInfo>

                <FollowingBtn
                  type="button"
                  $isFollowed={isFollowing}
                  onClick={() =>
                    handleClickFollowerBtn({
                      nickname,
                      isDelete: isFollowing,
                    })
                  }
                >
                  {isFollowing ? <IcFollowingGray /> : <IcUnfollowingWhite />}
                  <FollowingText $isFollowed={isFollowing}>
                    {isFollowing ? `팔로잉` : `팔로우`}
                  </FollowingText>
                </FollowingBtn>
              </PersonalCard>
            );
          })}
      </RecommendCard>
      <DeleteIdContainer>
        <DeleteText>코드라이브를 더 이상 이용하지 않는다면</DeleteText>
        <DeleteBtn onClick={handleDeleteAccount}>회원탈퇴</DeleteBtn>
      </DeleteIdContainer>

      {onErrModal && (
        <ErrorModal
          onClose={() => setOnErrModal(false)}
          errMsg={deleteUserErr ? deleteUserErr : updateFollowerErr}
        />
      )}
    </div>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.8rem;
`;

const TitleContainer = styled.div`
  display: ruby;

  margin-left: 0.2rem;
`;

const Title = styled.h2`
  margin-right: 1.6rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_24};
`;

const FriendCount = styled.span`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Tab = styled.p<{ $selected: boolean }>`
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.white : theme.colors.gray500};
  ${({ theme }) => theme.fonts.body_medium_14};

  cursor: pointer;
`;

const Divider = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
`;

const RecommendCard = styled.article`
  display: grid;
  gap: 0.4rem 1.8rem;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  padding: 2rem;
  margin-bottom: 5.6rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};

  overflow-y: auto;
  max-height: 44rem;

  &::-webkit-scrollbar {
    display: none;
  }
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
  top: 5.8rem;
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

const DeleteIdContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const DeleteText = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const DeleteBtn = styled.button`
  margin-left: 0.6rem;

  color: ${({ theme }) => theme.colors.codrive_purple};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;
export default FollowingList;
