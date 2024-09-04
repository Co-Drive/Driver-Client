import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  IcArrowBottomWhite,
  IcArrowLeftSmallGray,
  IcArrowRightSmallGray,
  IcArrowTopWhite,
} from '../assets';
import AdditionalProblemsModal from '../components/Follower/Current/AdditionalProblemsModal';
import WeeklyCurrentGraph from '../components/Follower/Current/WeeklyCurrentGraph';
import FollowerRecommendCard from '../components/Follower/Personal/FollowerRecommendCard';
import useDeleteMember from '../libs/hooks/Admin/useDeleteMember';
import useGetParticipantsList from '../libs/hooks/Admin/useGetParticipantsList';
import usePatchApprove from '../libs/hooks/Admin/usePatchApprove';
import useGetFollowerSummary from '../libs/hooks/Follower/useGetFollowerSummary';
import useGetMemberList from '../libs/hooks/GroupMember/useGetMemberList';
import {
  CommonUserListProps,
  MutationType,
  ParticipantType,
  UserType,
} from '../types/CommonUserList/userListType';
import WarningModal from './Modal/WarningModal/WarningModal';

const CommonUserList = ({
  roomId,
  sorting,
  selectedGroupId,
  isFollowerList,
  isAdmin,
}: CommonUserListProps) => {
  const navigate = useNavigate();

  const [modalOn, setModalOn] = useState(false);
  const [clickedPage, setClickedPage] = useState(1);
  const [clickedContents, setClickedContents] = useState({
    clickedId: 0,
    isClicked: false,
  });

  const { clickedId, isClicked } = clickedContents;
  const props = {
    page: clickedPage - 1,
    sortType: sorting,
    groupId: selectedGroupId,
  };
  const getData = isAdmin
    ? useGetParticipantsList(props)
    : isFollowerList
      ? useGetFollowerSummary(props)
      : useGetMemberList(props);

  const { data, isLoading } = getData;
  const { totalPage, followings, members, participants } =
    !isLoading && data.data;
  const users = isAdmin ? participants : isFollowerList ? followings : members;

  const totalPageRef = useRef(totalPage > 0 ? totalPage : 1);
  const pages = Array.from(
    { length: totalPageRef.current },
    (_, idx) => idx + 1
  );

  const { patchMutation } = usePatchApprove();
  const { deleteMutation } = useDeleteMember();

  const handleClickContents = (id: number) => {
    setClickedContents({
      clickedId: id,
      isClicked: !isClicked,
    });
  };

  const handleClickUserInfo = (id: number) => {
    navigate(`/follower/${id}`);
  };

  const handleClickStatusBtn = ({ status, requestId }: MutationType) => {
    if (roomId) {
      switch (status) {
        case 'REQUESTED':
          return patchMutation({ roomId, requestId });

        case 'JOINED':
          return setModalOn(true);

        case 'WAITING':
          return;
      }
    }
  };

  const handleClickModalBtn = (userId: number) => {
    if (roomId) {
      deleteMutation({ roomId, userId });
      setModalOn(false);
    }
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => prev - 1);
  };

  const handleClickPageNumber = (page: number) => {
    setClickedPage(page);
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => prev + 1);
  };

  return (
    <>
      <ListContainer>
        <ListHeader $isAdmin={isAdmin}>
          <ProfileText $isAdmin={isAdmin}>프로필</ProfileText>
          <WeeklyText $isAdmin={isAdmin}>주간 성과율</WeeklyText>
          <RecentText>최근 푼 문제</RecentText>
          {isAdmin && <Management>관리</Management>}
        </ListHeader>

        {!isLoading && users.length !== 0 && (
          <List>
            {users.map((info: UserType | ParticipantType, idx: number) => {
              const isAdminInfo = 'user' in info;
              const adminMode = 'status' in info;
              const {
                userId,
                nickname,
                profileImg,
                language,
                successRate,
                recentProblemTitle,
              } = isAdminInfo ? info.user : info;

              const statusToKR =
                adminMode &&
                (info.status === 'WAITING'
                  ? '대기 중'
                  : info.status === 'REQUESTED'
                    ? '승인하기'
                    : '내보내기');

              const isExitAndClicked =
                clickedId === userId && isClicked && successRate !== 0;
              return (
                <React.Fragment key={userId}>
                  <ContentsContainer>
                    <Contents
                      onClick={() => handleClickContents(userId)}
                      $isClicked={isExitAndClicked}
                      $isAdmin={isAdmin}
                    >
                      {isAdmin && <UserIdx>{idx + 1}</UserIdx>}
                      <ProfileImg
                        src={profileImg}
                        onClick={() => handleClickUserInfo(userId)}
                      />
                      <UserContainer
                        $isAdmin={isAdmin}
                        onClick={() => handleClickUserInfo(userId)}
                      >
                        <Nickname>{nickname}</Nickname>
                        <Language>{language}</Language>
                      </UserContainer>
                      <WeeklyCurrentGraph percentage={successRate} />

                      <Problem $isAdmin={isAdmin}>{recentProblemTitle}</Problem>
                      {isExitAndClicked ? (
                        <IcArrowTopWhite />
                      ) : (
                        <IcArrowBottomWhite />
                      )}

                      {isAdmin && adminMode && (
                        <StatusBtnContainer>
                          <StatusBtn
                            type="button"
                            $status={statusToKR}
                            onClick={() =>
                              handleClickStatusBtn({
                                status: info.status,
                                requestId: info.requestId,
                                userId,
                              })
                            }
                          >
                            {statusToKR}
                          </StatusBtn>
                        </StatusBtnContainer>
                      )}
                    </Contents>

                    {isExitAndClicked && (
                      <AdditionalProblemsModal userId={userId} />
                    )}
                  </ContentsContainer>

                  {isAdmin && modalOn && (
                    <WarningModal
                      data={nickname}
                      isGroupStatusModal={false}
                      onClose={() => setModalOn(false)}
                      handleClickContinueBtn={() => handleClickModalBtn(userId)}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </List>
        )}
      </ListContainer>

      <PageNationBar $isEmpty={totalPage === 0}>
        <IcArrowLeftSmallGray
          onClick={() => clickedPage !== 1 && handleClickPrevBtn()}
        />
        {pages.map((_, idx) => {
          const page = idx + 1;
          return (
            <PageNumber
              key={page}
              $isClicked={totalPage > 0 && clickedPage === page}
              onClick={() => handleClickPageNumber(page)}
            >
              {page}
            </PageNumber>
          );
        })}
        <IcArrowRightSmallGray
          onClick={() =>
            clickedPage !== totalPageRef.current && handleClickNextBtn()
          }
        />
      </PageNationBar>

      {!isLoading && !isAdmin && users.length === 0 && (
        <FollowerRecommendCard />
      )}
    </>
  );
};

export default CommonUserList;

const ListContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;

const ListHeader = styled.header<{ $isAdmin?: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  padding: ${({ $isAdmin }) =>
    $isAdmin ? `1.6rem 5.8rem 1.6rem 6.4rem` : `1.6rem 35.2rem 1.6rem 2.4rem`};

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray700};
`;

const ProfileText = styled.p<{ $isAdmin?: boolean }>`
  flex-grow: 1;

  margin-right: ${({ $isAdmin }) => ($isAdmin ? `19.6rem` : `26.3rem`)};

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
`;

const WeeklyText = styled.p<{ $isAdmin?: boolean }>`
  flex-grow: 1;

  margin-right: ${({ $isAdmin }) => ($isAdmin ? `5.8rem` : `9.4rem`)};

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
`;

const RecentText = styled.p`
  flex-grow: 2;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
`;

const Management = styled.p`
  flex-grow: 1;

  margin-left: 32.9rem;

  color: ${({ theme }) => theme.colors.gray300};

  ${({ theme }) => theme.fonts.body_eng_medium_16};
  text-align: right;
`;

const List = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ContentsContainer = styled.div`
  position: relative;

  width: 100%;
`;

const Contents = styled.div<{ $isClicked: boolean; $isAdmin?: boolean }>`
  display: flex;
  align-items: center;

  padding: ${({ $isAdmin }) =>
    $isAdmin ? `2.4rem 2.4rem 2rem 2.4rem` : `2.4rem 3.4rem 2rem 2.4rem`};

  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;

  background-color: ${({ $isClicked, theme }) =>
    $isClicked && theme.colors.gray800};

  cursor: pointer;
`;

const UserIdx = styled.p`
  width: 2.2rem;
  margin-right: 1.8rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.body_medium_16};
  text-align: left;
`;

const ProfileImg = styled.img`
  width: 4.4rem;
  height: 4.4rem;

  border-radius: 0.8rem;
  object-fit: cover;

  cursor: pointer;
`;

const UserContainer = styled.div<{ $isAdmin?: boolean }>`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;

  width: 16rem;
  padding-left: 0.8rem;
  margin-right: ${({ $isAdmin }) => ($isAdmin ? `4.4rem` : `11.1rem`)};

  cursor: pointer;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Language = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.body_eng_regular_14};
`;

const Problem = styled.p<{ $isAdmin?: boolean }>`
  flex-grow: 2;

  width: 29.7rem;

  ${({ $isAdmin }) =>
    $isAdmin
      ? css`
          margin-right: 1rem;
          margin-left: 6.8rem;
        `
      : css`
          margin-right: 7.5rem;
          margin-left: 11.1rem;
        `};

  overflow-x: hidden;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
  text-overflow: ellipsis;

  white-space: nowrap;
`;

const StatusBtnContainer = styled.div`
  flex-grow: 1;

  margin-left: 4.2rem;

  text-align: end;
`;

const StatusBtn = styled.button<{ $status: string | boolean }>`
  border-radius: 0.8rem;

  ${({ $status, theme }) => {
    switch ($status) {
      case '대기 중':
        return `
          padding: 1rem 2.5rem;
          background-color:${theme.colors.gray600};
          color: ${theme.colors.gray100};
        `;
      case '승인하기':
        return `
          padding: 1rem 2rem;
          background-color:${theme.colors.codrive_green};
          color: ${theme.colors.gray900};
        `;
      case '내보내기':
        return `
          padding: 1rem 2rem;
          background-color:${theme.colors.alert};
          color: ${theme.colors.white};
        `;
    }
  }};
`;

const PageNationBar = styled.div<{ $isEmpty: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: ${({ $isEmpty }) => ($isEmpty ? `8.8rem` : `4.8rem`)};
`;

const PageNumber = styled.p<{ $isClicked: boolean }>`
  padding: 0.4rem 1rem;

  border-radius: 0.4rem;
  ${({ theme, $isClicked }) =>
    $isClicked
      ? css`
          background-color: ${theme.colors.gray700};
          color: ${theme.colors.white};
        `
      : css`
          background-color: transparent;
          color: ${theme.colors.gray200};
        `};
  ${({ theme }) => theme.fonts.body_medium_16};
`;
