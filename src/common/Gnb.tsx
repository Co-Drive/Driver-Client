import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import useDeleteNotification from '../libs/hooks/SSE/useDeleteNotification';

interface GnbProps {
  category: string;
  handleOpenGnb: (open: boolean) => void;
}

const Gnb = ({ category, handleOpenGnb }: GnbProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const username = sessionStorage.getItem('name');

  const GNB_LIST = {
    solve: ['오늘 푼 문제 등록하기', '등록한 문제 다시 보기'],
    group: ['그룹 참여하기', '그룹 생성하기', '내 그룹'],
    profile: ['내 프로필', '로그아웃'],
  };
  const { solve, group, profile } = GNB_LIST;
  const { deleteNotification } = useDeleteNotification();
  const solveGnb = category === '문제풀이';
  const profileGnb = category === 'profile';
  const gnbList = solveGnb ? solve : profileGnb ? profile : group;
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const [clickedList, setClickedList] = useState('');

  const handleClickLogout = () => {
    deleteNotification();
  };

  const navigateClickedPage = (clickedTab: string) => {
    switch (clickedTab) {
      case solve[0]:
        return navigate('/solve');
      case solve[1]:
        return navigate(`/solution?page=1&year=${year}&month=${month}`);
      case group[0]:
        return navigate('/group?page=1');
      case group[1]:
        return navigate('/group-new');
      case group[2]:
        return navigate('/my-group?page=1');
      case profile[0]:
        return navigate(`/${username}`);
      case profile[1]:
        return handleClickLogout();
    }
  };

  const handleClickGnbTab = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const { innerText } = e.currentTarget;
    setClickedList(innerText);
    navigateClickedPage(innerText);
  };

  useEffect(() => {
    switch (pathname) {
      case '/solve':
        return setClickedList(solve[0]);
      case '/solution':
        return setClickedList(solve[1]);
      case '/group':
        return setClickedList(group[0]);
      case '/group-new':
        return setClickedList(group[1]);
      case '/my-group':
        return setClickedList(group[2]);
      case `/${username}`:
        return setClickedList(profile[0]);
      default:
        setClickedList('');
    }
  }, []);

  return (
    <GnbContainer
      $isProfileGnb={profileGnb}
      onMouseEnter={() => handleOpenGnb(true)}
      onMouseLeave={() => handleOpenGnb(false)}
    >
      {gnbList.map((list) => {
        return (
          <GnbTab
            key={list}
            onClick={handleClickGnbTab}
            $isClickedList={clickedList === list}
            $isSolveGnb={solveGnb}
          >
            {list}
          </GnbTab>
        );
      })}
    </GnbContainer>
  );
};

export default Gnb;

const GnbContainer = styled.ul<{ $isProfileGnb: boolean }>`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  flex-direction: column;
  position: absolute;

  ${({ $isProfileGnb }) =>
    $isProfileGnb
      ? css`
          top: 4.4rem;
          right: -2rem;
        `
      : css`
          top: 3.4rem;
          left: -0.2rem;
        `};

  padding: 1.6rem 0;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const GnbTab = styled.li<{ $isClickedList?: boolean; $isSolveGnb: boolean }>`
  width: 100%;
  padding: ${({ $isSolveGnb }) =>
    $isSolveGnb ? `0.6rem 1.8rem` : `0.6rem  1.9rem 0.6rem 1.8rem`};

  ${({ $isClickedList, theme }) =>
    $isClickedList
      ? css`
          background-color: ${theme.colors.gray500};
          color: ${theme.colors.white};

          ${theme.fonts.title_semiBold_14};
        `
      : css`
          color: ${theme.colors.gray300};
          ${theme.fonts.title_regular_14};
        `};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray500};
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.title_semiBold_14};
  }

  white-space: nowrap;
  cursor: pointer;
`;
