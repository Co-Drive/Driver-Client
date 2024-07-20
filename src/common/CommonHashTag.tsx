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
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 1.5rem 1.2rem 1.5rem 2rem;

  border-radius: 0.8rem;
  background-color: #292a2f;
  color: wheat;
  cursor: pointer;
`;

const Input = styled.input`
  color: wheat;
`;

const SelectedOptions = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 0;

  color: wheat;
`;

const Placeholder = styled.div`
  color: #d8d9dd;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;

  padding: 0.4rem 0.6rem;
  margin-right: 1rem;

  border-radius: 0.4rem;
  background-color: #08ff3f;
  color: black;
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
  background-color: #292a2f;

  text-align: center;
  max-height: 34.8rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Option = styled.div`
  padding: 1.2rem;

  color: #d8d9dd;
  cursor: pointer;
`;

export default CommonHashTag;
