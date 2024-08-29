import { useState } from 'react';
import styled from 'styled-components';
import { IcSearch } from '../../../assets';
import { GROUP_ALL_DUMMY } from '../../../constants/GroupAll/groupAllConst';

const SearchBar = ({
  onSearch,
}: {
  onSearch: (filteredGroups: any[]) => void;
}) => {
  const [searchData, setSearchData] = useState('');
  const GROUPS = GROUP_ALL_DUMMY.group;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchData(newValue);

    if (newValue.trim() === '') {
      // 입력창이 비워지면 모든 그룹 데이터를 반환
      onSearch(GROUPS);
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

      return (
        searchKeywords.some((keyword) => groupTitle.includes(keyword)) ||
        searchKeywords.some((keyword) => groupIntroduce.includes(keyword)) ||
        searchKeywords.some((keyword) =>
          groupOwnerNickname.includes(keyword)
        ) ||
        searchKeywords.some((keyword) =>
          groupTagsLower.some((tag) => tag.includes(keyword))
        )
      );
    });

    onSearch(filteredGroups); // 필터링된 그룹 데이터를 전달
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
