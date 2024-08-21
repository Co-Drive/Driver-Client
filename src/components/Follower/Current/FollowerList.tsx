import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  IcArrowBottomWhite,
  IcArrowLeftSmallGray,
  IcArrowRightSmallGray,
  IcArrowTopWhite,
} from '../../../assets';
import { DUMMY } from '../../../constants/Follower/currentConst';
import FollowerRecommendCard from '../Personal/FollowerRecommendCard';
import AdditionalProblemsModal from './AdditionalProblemsModal';
import CurrentGraph from './CurrentGraph';
import FollowerFilter from './FollowerFilter';

const FollowerList = () => {
  const { followers } = DUMMY;

  const navigate = useNavigate();
  // 현재는 임시로 전체 페이지 수 넣어둠, 추후 서버에서 받아온 값으로 전체 페이지 수 업데이트하는 함수 추가 예정
  const totalPageRef = useRef(1);
  const pages = Array.from(
    { length: totalPageRef.current },
    (_, idx) => idx + 1
  );

  const [clickedPage, setClickedPage] = useState(1);
  const [clickedContents, setClickedContents] = useState({
    clickedId: 0,
    isClicked: false,
  });

  const { clickedId, isClicked } = clickedContents;

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
    <FollowerListContainer>
      <FollowerFilter />

      <ListContainer>
        <ListHeader>
          <ProfileText>프로필</ProfileText>
          <WeeklyText>주간 성과율</WeeklyText>
          <RecentText>최근 푼 문제</RecentText>
        </ListHeader>

        <List>
          {followers.map((follower) => {
            const { id, imgSrc, nickname, language, rate, problem } = follower;
            return (
              <ContentsContainer key={id}>
                <Contents
                  onClick={() => handleClickContents(id)}
                  $isClicked={clickedId === id && isClicked}
                >
                  <ProfileImg
                    src={imgSrc}
                    onClick={() => handleClickUserInfo(id)}
                  />
                  <UserContainer onClick={() => handleClickUserInfo(id)}>
                    <Nickname>{nickname}</Nickname>
                    <Language>{language}</Language>
                  </UserContainer>
                  <CurrentGraph percentage={rate} />

                  <Problem>{problem}</Problem>
                  {clickedId === id && isClicked ? (
                    <IcArrowTopWhite />
                  ) : (
                    <IcArrowBottomWhite />
                  )}
                </Contents>

                {clickedId === id && isClicked && <AdditionalProblemsModal />}
              </ContentsContainer>
            );
          })}
        </List>
      </ListContainer>

      <PageNationBar>
        <IcArrowLeftSmallGray
          onClick={() => clickedPage !== 1 && handleClickPrevBtn()}
        />
        {pages.map((_, idx) => {
          const page = idx + 1;
          return (
            <PageNumber
              key={page}
              $isClicked={clickedPage === page}
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

      {followers.length === 0 && <FollowerRecommendCard />}
    </FollowerListContainer>
  );
};

export default FollowerList;

const FollowerListContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

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
`;

const ProfileImg = styled.img`
  width: 4.4rem;
  height: 4.4rem;

  border-radius: 0.8rem;
  object-fit: cover;
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

const PageNationBar = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 4.8rem;
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
