import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray } from '../../assets';
import CommonHashTag from '../../common/CommonHashTag';

export interface SelectProps {
  isOpen: boolean;
}

const Select = ({ isOpen }: SelectProps) => {
  return (
    <SelectContainer>
      <HiddenInput />
      <SelectOptions>
        <CommonHashTag />
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

const ArrowToggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default Select;
