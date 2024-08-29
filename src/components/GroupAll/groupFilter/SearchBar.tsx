import styled from 'styled-components';
import { IcSearch } from '../../../assets';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Icon>
        <IcSearch />
      </Icon>
      <Input type="text" placeholder="검색어를 입력하세요" />
    </SearchBarContainer>
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
