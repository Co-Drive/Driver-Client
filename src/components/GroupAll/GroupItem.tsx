import { useRef, useState } from 'react';
import styled from 'styled-components';
import Groups from '../../common/Groups';
import { SORTING } from '../../constants/Follower/currentConst';
import { GROUP_ALL_DUMMY } from '../../constants/GroupAll/groupAllConst';
import PageLayout from '../PageLayout/PageLayout';
import LanguageSelectBox from './groupFilter/LanguageSelectBox';

const GroupItem = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [clickedPage, setClickedPage] = useState(1);
  const [sorting, setSorting] = useState('최신순');

  const group = GROUP_ALL_DUMMY.group;

  const totalPage = 5; // 총 페이지 수

  const totalPageRef = useRef(totalPage);

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerText } = e.currentTarget;
    setSorting(innerText);
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => prev - 1);
  };

  const handleClickPage = (page: number) => {
    setClickedPage(page);
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => prev + 1);
  };

  return (
    <PageLayout category="{그룹}">
      <GroupContainer>
        <GroupTitle>그룹 전체 보기</GroupTitle>
        <TopContainer>
          <LanguageSelectBox
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </TopContainer>
        <SortContainer>
          {SORTING.map((standard) => (
            <Sorting
              key={standard}
              onClick={handleClickSorting}
              $isClicked={sorting === standard}
            >
              {standard}
            </Sorting>
          ))}
        </SortContainer>
        <GroupsItemContainer>
          <Groups
            group={group}
            totalPage={totalPageRef.current}
            clickedPage={clickedPage}
            handleClickPages={{
              handleClickPrevBtn: handleClickPrevBtn,
              handleClickPage: handleClickPage,
              handleClickNextBtn: handleClickNextBtn,
            }}
          />
        </GroupsItemContainer>
      </GroupContainer>
    </PageLayout>
  );
};

const GroupContainer = styled.article`
  margin-top: 0.5rem;
`;

const GroupTitle = styled.h1`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_24};
`;

const TopContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const GroupsItemContainer = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const SortContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  background-color: antiquewhite;
`;

const Sorting = styled.p<{ $isClicked: boolean }>`
  color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.white : theme.colors.gray500};
  ${({ theme }) => theme.fonts.body_medium_14};
`;

export default GroupItem;
