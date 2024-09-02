import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Groups from '../../common/Groups';
import { SORTING } from '../../constants/Follower/currentConst';
import { GROUP_ALL_DUMMY } from '../../constants/GroupAll/groupAllConst';
import LanguageSelectBox from './groupFilter/LanguageSelectBox';
import SearchBar from './groupFilter/SearchBar';

const GroupItem = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [clickedPage, setClickedPage] = useState(1);
  const [sorting, setSorting] = useState('최신순');
  const [searchResults, setSearchResults] = useState(GROUP_ALL_DUMMY.group);
  const [sliderValues, setSliderValues] = useState({ min: 0, max: 50 }); // 슬라이드 값 상태 추가

  const groupsPerPage = 9;
  const totalPage = Math.ceil(searchResults.length / groupsPerPage);
  const totalPageRef = useRef(totalPage);

  // 필터링된 그룹 데이터를 반환하는 함수
  const filterGroups = () => {
    return GROUP_ALL_DUMMY.group.filter((group) => {
      // 태그 필터링
      const tagMatch =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => group.tags.includes(tag));

      // 슬라이드 필터링
      const sliderMatch =
        group.memberCount >= sliderValues.min &&
        group.capacity <= sliderValues.max;

      // 태그와 슬라이드 조건 모두 만족하는 그룹만 반환
      return tagMatch && sliderMatch;
    });
  };

  useEffect(() => {
    // 선택된 태그가 변경될 때마다 필터링 적용
    const filteredGroups = filterGroups();
    setSearchResults(filteredGroups);
    setClickedPage(1); // 태그 필터링 시 첫 페이지로 이동
  }, [selectedTags]);

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerText } = e.currentTarget;
    setSorting(innerText);
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => Math.max(prev - 1, 1));
  };
  const handleClickPage = (page: number) => {
    setClickedPage(page);
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => Math.min(prev + 1, totalPageRef.current));
  };

  // 검색어가 변경될 때마다 호출될 함수
  const handleSearch = (filteredGroups: any[]) => {
    setSearchResults(filteredGroups); // 필터링된 그룹 데이터를 상태로 설정
    setClickedPage(1); // 검색 시 첫 페이지로 이동
  };

  // 현재 페이지에 해당하는 그룹 데이터를 계산하는 로직 추가
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
