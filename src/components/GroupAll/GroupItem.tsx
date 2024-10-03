import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Groups from '../../common/Groups';
import { SORTING } from '../../constants/Follower/currentConst';
import useGetRoomsSort from '../../libs/hooks/GroupAll/useGetRoomSort';
import { removeSavedPage } from '../../utils/removeSavedPage';
import LanguageSelectBox from './groupFilter/LanguageSelectBox';
import SearchBar from './groupFilter/SearchBar';

const GroupItem = () => {
  const savedPage = sessionStorage.getItem('savedPage');

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [clickedPage, setClickedPage] = useState(
    savedPage ? parseInt(savedPage) : 1
  );
  const [searchResults, setSearchResults] = useState<any[]>([]); // 검색 결과 상태
  const [sliderValues, setSliderValues] = useState({ min: 0, max: 50 });
  const [filter, setFilter] = useState({
    sorting: '최신순',
  });

  const { sorting } = filter;

  const ALL_TAG = 'ALL';
  const firstRowTags = ['Python', 'Java', 'JavaScript', 'C++', 'C', 'C#'];
  const secondRowTags = ['Kotlin', 'Swift', 'Ruby', 'Scala', 'Go'];

  // useGetRoomsSort 훅에서 데이터를 가져옴
  const { data } = useGetRoomsSort({
    sortType: sorting,
    page: clickedPage - 1,
    request: {
      // 서버 요청 시에만 인코딩
      tags: selectedTags.includes(ALL_TAG)
        ? [...firstRowTags, ...secondRowTags].map((tag) =>
            encodeURIComponent(tag)
          )
        : selectedTags.map((tag) => encodeURIComponent(tag)),
      min: sliderValues.min,
      max: sliderValues.max,
    },
  });

  const { totalPage, rooms } = data?.data || {};
  const totalPageRef = useRef(totalPage || 1);

  // 필터링된 그룹 데이터를 반환하는 함수
  const filterGroups = (groups: any[]) => {
    return groups.filter((group) => {
      const isAllTagSelected = selectedTags.includes(ALL_TAG);
      const groupHasAllTag = group.tags.includes(ALL_TAG);

      const tagMatch =
        selectedTags.length === 0 ||
        (isAllTagSelected && groupHasAllTag) ||
        selectedTags.every((tag) => group.tags.includes(tag)); // 인코딩되지 않은 상태로 비교

      const sliderMatch =
        group.memberCount >= sliderValues.min &&
        group.capacity <= sliderValues.max;

      return tagMatch && sliderMatch;
    });
  };

  // useEffect로 필터링된 데이터를 처리
  useEffect(() => {
    if (rooms) {
      const filteredGroups = filterGroups(rooms);
      setSearchResults(filteredGroups);

      totalPageRef.current = totalPage || 1;
      setClickedPage((prevPage) => Math.min(prevPage, totalPageRef.current));
    }
  }, [rooms, sorting, clickedPage, selectedTags, sliderValues]);

  const handleClickSorting = (
    e:
      | React.MouseEvent<HTMLParagraphElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isSorting: boolean
  ) => {
    const { innerText } = e.currentTarget;

    isSorting;
    setFilter({
      ...filter,
      sorting: innerText,
    });
  };

  const handleChangeSearchBar = (filteredGroups: any[]) => {
    setSearchResults(filteredGroups);
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => prev - 1);
    removeSavedPage();
  };

  const handleClickPage = (page: number) => {
    setClickedPage(page);
    removeSavedPage();
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => prev + 1);
    removeSavedPage();
  };

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
            onClick={(e) => standard !== '|' && handleClickSorting(e, true)}
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
