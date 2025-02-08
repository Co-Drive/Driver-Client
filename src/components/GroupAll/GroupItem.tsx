import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Groups from '../../common/Groups';
import { SORTING } from '../../constants/Follower/currentConst';
import useGetRoomsSort from '../../libs/hooks/GroupAll/useGetRoomSort';
import { GroupsItemProps } from '../../types/GroupItem/groupItemType';
import {
  ALL_TAG,
  FIRST_TAGS,
  SECOND_TAGS,
} from './../../constants/GroupAll/TagsConst';
import LanguageSelectBox from './groupFilter/LanguageSelectBox';
import SearchBar from './groupFilter/SearchBar';

const GroupItem = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const clickedPage = Number(searchParams.get('page'));
  const savedSorting = sessionStorage.getItem('savedSorting');

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<any[]>([]); // 검색 결과 상태
  const [sliderValues, setSliderValues] = useState({ min: 0, max: 50 });
  const [sorting, setSorting] = useState(savedSorting || '최신순');

  // useGetRoomsSort 훅에서 데이터를 가져옴
  const { data } = useGetRoomsSort({
    sortType: sorting,
    page: clickedPage - 1,
    request: {
      // 서버 요청 시에만 인코딩
      tags: selectedTags.includes(ALL_TAG)
        ? [...FIRST_TAGS, ...SECOND_TAGS] // 태그를 인코딩하지 않고 그대로 전달
        : selectedTags.map((tag) => tag), // 인코딩되지 않은 상태로 유지
      min: sliderValues.min,
      max: sliderValues.max,
    },
  });

  const { totalPage, rooms } = data?.data || {};
  const totalPageRef = useRef(totalPage || 1);

  // 필터링된 그룹 데이터를 반환하는 함수
  const filterGroups = (groups: GroupsItemProps[]) => {
    const isAllTagSelected = selectedTags.includes(ALL_TAG);

    return groups.filter((group) => {
      // ALL_TAG가 선택된 경우, 태그 필터링을 건너뛰고 모든 그룹을 반환
      if (isAllTagSelected) {
        return true; // 모든 그룹 반환
      }

      // ALL_TAG가 선택되지 않았을 경우, 태그와 매칭된 그룹만 반환
      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => group.tags.includes(tag));

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
      const page = Math.min(clickedPage, totalPageRef.current).toString();
      setSearchResults(filteredGroups);

      totalPageRef.current = totalPage || 1;
      setSearchParams({ page: page });
    }
  }, [rooms, sorting, clickedPage, selectedTags, sliderValues]);

  const handleClickSorting = (
    e:
      | React.MouseEvent<HTMLParagraphElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { innerText } = e.currentTarget;
    setSorting(innerText);

    sessionStorage.setItem('savedSorting', innerText);
  };

  const handleChangeSearchBar = (filteredGroups: any[]) => {
    setSearchResults(filteredGroups);
  };

  const handleClickPrevBtn = () => {
    const prevPage = (clickedPage - 1).toString();
    setSearchParams({ page: prevPage });
  };

  const handleClickPage = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  const handleClickNextBtn = () => {
    const nextPage = (clickedPage + 1).toString();
    setSearchParams({ page: nextPage });
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
            onClick={(e) => standard !== '|' && handleClickSorting(e)}
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
  cursor: pointer;
`;

export default GroupItem;
