import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray } from '../../../assets';
import {
  GROUPS,
  SORTING,
} from '../../../constants/FollowerCurrent/currentConst';

interface HeaderProps {
  filter: {
    clickedGroup: string;
    isOptionOpen: boolean;
    sorting: string;
  };
  handleClickInput: () => void;
  handleClickOption: (selectedGroup: string) => void;
  handleClickSorting: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

const Header = ({
  filter,
  handleClickInput,
  handleClickOption,
  handleClickSorting,
}: HeaderProps) => {
  const { clickedGroup, isOptionOpen, sorting } = filter;
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>팔로워 현황</Title>
        <WeeklyBoard>7월 15일 - 21일 주간 보드</WeeklyBoard>
      </TitleContainer>

      <FilterContainer>
        <SelectContainer>
          <InputContainer onClick={handleClickInput}>
            <Input
              readOnly={true}
              placeholder="그룹 별 보기"
              value={clickedGroup}
            />
            {isOptionOpen ? <IcArrowTopGray /> : <IcArrowBottomGray />}
          </InputContainer>

          <OptionContainer $hidden={!isOptionOpen}>
            {GROUPS.map((group: string) => {
              return (
                <Option
                  key={group}
                  onClick={() => {
                    handleClickOption(group);
                  }}
                  $isClickedList={clickedGroup === group}
                >
                  {group}
                </Option>
              );
            })}
          </OptionContainer>
        </SelectContainer>

        <SortContainer>
          {SORTING.map((standard) => {
            return (
              <Sorting
                key={standard}
                onClick={(e) => standard !== '|' && handleClickSorting(e)}
                $isClicked={sorting === standard}
              >
                {standard}
              </Sorting>
            );
          })}
        </SortContainer>
      </FilterContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  gap: 4.4rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-bottom: 2.4rem;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: end;

  width: 100%;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const WeeklyBoard = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 28rem;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const SelectContainer = styled.article`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 1.2rem 1.2rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Input = styled.input`
  width: 15.3rem;

  outline: none;

  border: none;
  background-color: transparent;
  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const OptionContainer = styled.ul<{ $hidden: boolean }>`
  display: ${({ $hidden }) => ($hidden ? 'none' : 'block')};
  position: absolute;
  top: 5.8rem;
  z-index: 1;

  width: 100%;
  padding: 0.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  text-align: center;
  ${({ theme }) => theme.fonts.body_ligth_16};
`;

const Option = styled.li<{ $isClickedList: boolean }>`
  width: 100%;
  padding: 0.8rem;

  border-radius: 0.4rem;
  background-color: ${({ theme, $isClickedList }) =>
    $isClickedList ? theme.colors.gray500 : theme.colors.gray700};
  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;

  &:hover {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.gray700};
  }
`;

const SortContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Sorting = styled.p<{ $isClicked: boolean }>`
  color: ${({ $isClicked, theme }) =>
    $isClicked ? theme.colors.white : theme.colors.gray500};
  ${({ theme }) => theme.fonts.body_medium_14};
`;
