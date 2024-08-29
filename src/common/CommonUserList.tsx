import { useRef, useState } from 'react';
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
import useGetFollowerSummary from '../libs/hooks/Follower/useGetFollowerSummary';
import useGetMemberList from '../libs/hooks/GroupMember/useGetMemberList';
import {
  CommonUserListProps,
  UserType,
} from '../types/CommonUserList/userListType';

const CommonUserList = ({
  sorting,
  selectedGroupId,
  isFollowerList,
}: CommonUserListProps) => {
  const navigate = useNavigate();

  const [clickedPage, setClickedPage] = useState(1);
  const [clickedContents, setClickedContents] = useState({
    clickedId: 0,
    isClicked: false,
  });

  const { clickedId, isClicked } = clickedContents;
  //   const props = {
  //     page: clickedPage - 1,
  //     sortType: sorting,
  //     groupId: selectedGroupId,
  //   }

  const { data, isLoading } = isFollowerList
    ? useGetFollowerSummary({
        page: clickedPage - 1,
        sortType: sorting,
        groupId: selectedGroupId,
      })
    : useGetMemberList({
        page: clickedPage - 1,
        sortType: sorting,
        groupId: selectedGroupId,
      });
  const { totalPage, followings, members } = !isLoading && data.data;
  const users = isFollowerList ? followings : members;

  const totalPageRef = useRef(totalPage > 0 ? totalPage : 1);
  const pages = Array.from(
    { length: totalPageRef.current },
    (_, idx) => idx + 1
  );

  const handleClickContents = (id: number) => {
    setClickedContents({
      clickedId: id,
      isClicked: !isClicked,
    });
  };

  const handleClickUserInfo = (id: number) => {
    navigate(`/follower/${id}`);
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
        <ListHeader>
          <ProfileText>프로필</ProfileText>
          <WeeklyText>주간 성과율</WeeklyText>
          <RecentText>최근 푼 문제</RecentText>
        </ListHeader>

        {!isLoading && users.length !== 0 && (
          <List>
            {users.map((user: UserType) => {
              const {
                userId,
                nickname,
                profileImg,
                language,
                successRate,
                recentProblemTitle,
              } = user;
              const isExitAndClicked =
                clickedId === userId && isClicked && successRate !== 0;
              return (
                <ContentsContainer key={userId}>
                  <Contents
                    onClick={() => handleClickContents(userId)}
                    $isClicked={isExitAndClicked}
                  >
                    <ProfileImg
                      src={profileImg}
                      onClick={() => handleClickUserInfo(userId)}
                    />
                    <UserContainer onClick={() => handleClickUserInfo(userId)}>
                      <Nickname>{nickname}</Nickname>
                      <Language>{language}</Language>
                    </UserContainer>
                    <WeeklyCurrentGraph percentage={successRate} />

                    <Problem>{recentProblemTitle}</Problem>
                    {isExitAndClicked ? (
                      <IcArrowTopWhite />
                    ) : (
                      <IcArrowBottomWhite />
                    )}
                  </Contents>

                  {isExitAndClicked && (
                    <AdditionalProblemsModal userId={userId} />
                  )}
                </ContentsContainer>
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

      {!isLoading && users.length === 0 && <FollowerRecommendCard />}
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

const ListHeader = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 1.6rem 35.2rem 1.6rem 2.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray700};
`;

const ProfileText = styled.p`
  flex-grow: 1;

  margin-right: 26.3rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
`;

const WeeklyText = styled.p`
  flex-grow: 1;

  margin-right: 9.4rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
`;

const RecentText = styled.p`
  flex-grow: 2;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
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

const Contents = styled.div<{ $isClicked: boolean }>`
  display: flex;
  align-items: center;

  padding: 2.4rem 3.4rem 2rem 2.4rem;

  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;

  background-color: ${({ $isClicked, theme }) =>
    $isClicked && theme.colors.gray800};

  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 4.4rem;
  height: 4.4rem;

  border-radius: 0.8rem;
  object-fit: cover;

  cursor: pointer;
`;

const UserContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;

  width: 16rem;
  padding-left: 0.8rem;
  margin-right: 11.1rem;

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

const Problem = styled.p`
  flex-grow: 2;

  width: 29.7rem;
  margin-right: 7.5rem;
  overflow-x: hidden;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
  text-overflow: ellipsis;

  white-space: nowrap;
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
