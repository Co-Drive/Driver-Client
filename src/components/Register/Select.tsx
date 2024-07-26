import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray } from '../../assets';
import CommonHashTag from '../../common/CommonHashTag';

export interface SelectProps {
  isOpen: boolean;
  selectedTag: string;
}

const Select = ({ isOpen, selectedTag }: SelectProps) => {
  return (
    <SelectContainer>
      <HiddenInput />
      <SelectOptions>
        {selectedTag === '' ? (
          <Placeholder>자주 사용하는 언어를 선택해주세요</Placeholder>
        ) : (
          <CommonHashTag selectedTag={selectedTag} />
        )}
      </SelectOptions>
      <ArrowToggle>
        {isOpen ? <IcArrowTopGray /> : <IcArrowBottomGray />}
      </ArrowToggle>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 29.6rem;
  height: 4.8rem;
  padding: 1.5rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const SelectOptions = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 0;
`;

const Placeholder = styled.div`
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: 300;
  font-size: 1rem;

  ${({ theme }) => theme.fonts.body_ligth_16};
  text-align: center;
`;

const ArrowToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default Select;
