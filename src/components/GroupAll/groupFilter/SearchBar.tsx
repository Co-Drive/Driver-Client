import { useState } from 'react';
import styled from 'styled-components';
import { IcSearch } from '../../../assets';
import { GROUP_ALL_DUMMY } from '../../../constants/GroupAll/groupAllConst';

const SearchBar = () => {
  const [searchData, setSearchData] = useState('');
  const GROUPS = GROUP_ALL_DUMMY.group;

  const filteredGroups = GROUPS.filter(
    (group) =>
      group.title.includes(searchData) ||
      group.introduce.includes(searchData) ||
      group.owner.nickname.includes(searchData) ||
      group.tags.some((tag) => tag.includes(searchData))
  );

  return (
    <div>
      <SearchBarContainer>
        <Icon>
          <IcSearch />
        </Icon>
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
      </SearchBarContainer>

      {/* 검색 결과를 렌더링 */}
      {filteredGroups.length > 0 ? (
        filteredGroups.map((group) => (
          <GroupItem key={group.roomId}>
            <h2>{group.title}</h2>
            <p>{group.introduce}</p>
            <p>방장: {group.owner.nickname}</p>
            <p>태그: {group.tags.join(', ')}</p>
            <p>
              멤버 수: {group.memberCount} / {group.capacity}
            </p>
            <img src={group.imageSrc} alt={group.title} />
          </GroupItem>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
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

const GroupItem = styled.div`
  padding: 1rem;
  margin-top: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.gray700};
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

export default SearchBar;
