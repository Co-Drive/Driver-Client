import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Groups from '../../common/Groups';
import { SORTING } from '../../constants/Follower/currentConst';
import { getRoomSort } from '../../libs/apis/GroupAll/getRoomSort';
import { removeSavedPage } from '../../utils/removeSavedPage';
import LanguageSelectBox from './groupFilter/LanguageSelectBox';
import SearchBar from './groupFilter/SearchBar';

const GroupItem = () => {
  const savedPage = sessionStorage.getItem('savedPage');

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [clickedPage, setClickedPage] = useState(
    savedPage ? parseInt(savedPage) : 1
  );
  const [sorting, setSorting] = useState('최신순');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [sliderValues, setSliderValues] = useState({ min: 0, max: 50 });

  const groupsPerPage = 9;
  const totalPageRef = useRef(0);

  // 필터링된 그룹 데이터를 반환하는 함수
  const filterGroups = (groups: any[]) => {
    return groups.filter((group) => {
      const isAllTagSelected = selectedTags.includes('ALL_TAG');
      const groupHasAllTag = group.tags.includes('ALL_TAG');

      const tagMatch =
        selectedTags.length === 0 ||
        (isAllTagSelected && groupHasAllTag) ||
        selectedTags.every((tag) => group.tags.includes(tag));

      const sliderMatch =
        group.memberCount >= sliderValues.min &&
        group.capacity <= sliderValues.max;

      return tagMatch && sliderMatch;
    });
  };

  useEffect(() => {
    const fetchGroups = async () => {
      const sortType = sorting === '최신순' ? 'NEW' : 'DICT';
      const response = await getRoomSort(sortType, clickedPage - 1);

      if (response && response.data && response.data.rooms) {
        const filteredGroups = filterGroups(response.data.rooms);
        setSearchResults(filteredGroups);

        totalPageRef.current = response.data.totalPage;
        setClickedPage(Math.min(clickedPage, totalPageRef.current));
      }
    };

    fetchGroups();
  }, [sorting, clickedPage, selectedTags, sliderValues]);

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerText } = e.currentTarget;
    setSorting(innerText);
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => Math.max(prev - 1, 1));
    removeSavedPage();
  };

  const handleClickPage = (page: number) => {
    setClickedPage(page);
    removeSavedPage();
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => Math.min(prev + 1, totalPageRef.current));
    removeSavedPage();
  };

  const handleChangeSearchBar = (filteredGroups: any[]) => {
    const updatedGroups = filterGroups(filteredGroups);
    setSearchResults(updatedGroups);
    setClickedPage(1);
  };

  const startIdx = (clickedPage - 1) * groupsPerPage;
  const endIdx = startIdx + groupsPerPage;
  const currentGroups = searchResults.slice(startIdx, endIdx);

  return (
    <GroupContainer>
      <GroupTitle>그룹 전체 보기</GroupTitle>
      <TopContainer>
        <LanguageSelectBox
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          sliderValues={sliderValues}
          setSliderValues={setSliderValues}
        />
        <SearchBar handleChangeSearchBar={handleChangeSearchBar} />
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
          group={currentGroups}
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
  );
};

const GroupContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
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
