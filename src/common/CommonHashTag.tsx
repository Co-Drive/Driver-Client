import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray, IcCancelSmall } from '../assets';

const CommonHashTag = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState('');
  const [inputValue, setInputValue] = useState('');

  /* 드롭다운 */
  const toggleOptions = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  /* 옵션 선택 시 값 저장 */
  const handleOptionClick = (option) => {
    setSelectedTag(option);
    setInputValue(option);
    setIsOpen(false);
  };

  /* 값 삭제 */
  const removeTag = () => {
    setSelectedTag('');
    setInputValue('');
  };

  /* 상태 업데이트 */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <CommonHashTagWrapper>
      <Select>
        <CustomSelect>
          <SelectBox>
            <Input hidden value={inputValue} onChange={handleInputChange} />
            <SelectedOptions>
              {selectedTag === '' ? (
                <Placeholder>자주 사용하는 언어를 선택해주세요</Placeholder>
              ) : (
                <Tag>
                  {selectedTag}
                  <IcCancelSmall onClick={removeTag} />
                </Tag>
              )}
            </SelectedOptions>
            <Arrow onClick={toggleOptions}>
              {isOpen ? <IcArrowTopGray /> : <IcArrowBottomGray />}
            </Arrow>
          </SelectBox>
          {isOpen && (
            <Options>
              {['Python', 'Java', 'Javascript', 'C++', 'C', 'C#', 'Kotlin'].map(
                (option) => (
                  <Option
                    key={option}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </Option>
                )
              )}
            </Options>
          )}
        </CustomSelect>
      </Select>
    </CommonHashTagWrapper>
  );
};

const CommonHashTagWrapper = styled.div`
  /* Only comments */
`;

const Select = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

const CustomSelect = styled.div`
  position: relative;

  width: 29.6rem;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.8rem;
  padding: 1.5rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const Input = styled.input`
  /* Only comments */
`;

const SelectedOptions = styled.div`
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

const Tag = styled.span`
  display: flex;
  align-items: center;

  padding: 0.4rem 0.6rem;
  margin-right: 1rem;

  border-radius: 0.4rem;
  ${({ theme }) => theme.fonts.body_eng_medium_12};
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.bg};
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Options = styled.div`
  position: absolute;
  z-index: 1;

  width: 100%;
  margin-top: 0.6rem;

  border-radius: 0.8rem;
  border-top: none;
  background-color: ${({ theme }) => theme.colors.gray700};

  text-align: center;
  max-height: 34.8rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Option = styled.div`
  padding: 1.2rem;
  margin: 0.6rem 0.8rem;

  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.body_eng_medium_16};
  cursor: pointer;

  &:hover {
    border-radius: 0.6rem;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;

export default CommonHashTag;
