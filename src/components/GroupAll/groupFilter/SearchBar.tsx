import { useState } from 'react';
import styled from 'styled-components';
import { IcSearch } from '../../../assets';
import { GROUP_ALL_DUMMY } from '../../../constants/GroupAll/groupAllConst';

const SearchBar = ({
  handleChangeSearchBar,
}: {
  handleChangeSearchBar: (filteredGroups: any[]) => void;
}) => {
  const [searchData, setSearchData] = useState('');
  const GROUPS = GROUP_ALL_DUMMY.group;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchData(newValue);

    if (newValue.trim() === '') {
      // 입력창이 비워지면 모든 그룹 데이터를 반환
      handleChangeSearchBar(GROUPS);
      return;
    }

    // 입력된 검색어에 따라 필터링
    const searchKeywords = newValue
      .split(',')
      .map((keyword) => keyword.trim().toLowerCase());

    const filteredGroups = GROUPS.filter((group) => {
      const groupTitle = group.title.toLowerCase();
      const groupIntroduce = group.introduce.toLowerCase();
      const groupOwnerNickname = group.owner.nickname.toLowerCase();
      const groupTagsLower = group.tags.map((tag) => tag.toLowerCase());

      // 숫자 검색어를 찾기 위해 모든 검색어를 숫자로 변환 시도
      const numericKeywords = searchKeywords
        .map((keyword) => parseFloat(keyword))
        .filter((num) => !isNaN(num));

      // 검색어가 그룹 제목, 소개, 소유자 닉네임, 태그에 포함되는지 확인
      const matchesText = searchKeywords.some(
        (keyword) =>
          groupTitle.includes(keyword) ||
          groupIntroduce.includes(keyword) ||
          groupOwnerNickname.includes(keyword) ||
          groupTagsLower.some((tag) => tag.includes(keyword))
      );

      // 검색어가 memberCount 또는 capacity와 일치하는지 확인
      const matchesNumber = numericKeywords.some(
        (num) => group.memberCount === num || group.capacity === num
      );

      // 텍스트 매칭과 숫자 매칭 중 하나라도 true면 포함
      return matchesText || matchesNumber;
    });

    handleChangeSearchBar(filteredGroups); // 필터링된 그룹 데이터를 전달
  };

  return (
    <div>
      <SearchBarContainer>
        <Icon>
          <IcSearch />
        </Icon>
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchData}
          onChange={handleSearchChange}
        />
      </SearchBarContainer>
    </div>
  );
};

const SearchBarContainer = styled.article`
  display: flex;
  align-items: center;

  width: 29.7rem;
  height: 4.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    ${({ theme }) => theme.fonts.body_ligth_16};
  }
`;

const Icon = styled.p`
  display: flex;

  margin: 0 1.2rem 0 1.8rem;
`;

export default SearchBar;
