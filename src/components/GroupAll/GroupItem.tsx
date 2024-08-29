import { useRef, useState } from 'react';
import styled from 'styled-components';
import Groups from '../../common/Groups';
import { SORTING } from '../../constants/Follower/currentConst';
import { GROUP_ALL_DUMMY } from '../../constants/GroupAll/groupAllConst';
import PageLayout from '../PageLayout/PageLayout';
import LanguageSelectBox from './groupFilter/LanguageSelectBox';
import SearchBar from './groupFilter/SearchBar';

const GroupItem = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [clickedPage, setClickedPage] = useState(1);
  const [sorting, setSorting] = useState('최신순');
  const [searchResults, setSearchResults] = useState(GROUP_ALL_DUMMY.group); // 필터링된 그룹 데이터를 위한 상태
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태

  const totalPage = 5; // 총 페이지 수
  const totalPageRef = useRef(totalPage);

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerText } = e.currentTarget;
    setSorting(innerText);
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => Math.max(prev - 1, 1)); // 첫 페이지 이하로 내려가지 않도록 처리
  };
  const handleClickPage = (page: number) => {
    setClickedPage(page);
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => Math.min(prev + 1, totalPageRef.current)); // 마지막 페이지 이상으로 올라가지 않도록 처리
  };

  // 검색어가 변경될 때마다 호출될 함수
  const handleSearch = (filteredGroups: any[]) => {
    setSearchResults(filteredGroups); // 필터링된 그룹 데이터를 상태로 설정
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
          <SearchBar onSearch={handleSearch} />
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
            group={searchResults}
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
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 0 4.2rem;
`;

const GroupTitle = styled.h1`
  margin: 0 0 3rem 0.2rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_24};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 3.4rem;

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
  justify-content: end;
  align-items: center;

  margin-bottom: 2.8rem;
`;

const Sorting = styled.p<{ $isClicked: boolean }>`
  color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.white : theme.colors.gray500};
  ${({ theme }) => theme.fonts.body_medium_14};
`;

export default GroupItem;
