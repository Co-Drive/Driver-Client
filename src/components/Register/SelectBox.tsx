import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Options from './Options';
import Select from './Select';

const SelectBox = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // 드롭다운 토글
  const handleToggleDropdown = (e: React.MouseEvent<HTMLDivElement> | null) => {
    if (e) e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // 선택된 태그 값 업데이트
  const handleChangeTag = (value: string) => {
    setSelectedTag(value);
    setInputValue(value);
  };

  // 옵션을 클릭했을 때 호출되는 함수
  // 선택한 옵션이 현재 선택된 태그와 다를 경우 태그를 변경하고 드롭다운을 닫음
  const handleClickOption = useCallback(
    (option: string) => {
      if (option !== selectedTag) {
        handleChangeTag(option);
      }
      setIsOpen(false);
    },
    [handleChangeTag, selectedTag]
  );

  return (
    <SelectBoxContainer>
      <CustomSelect>
        <Select
          inputValue={inputValue}
          selectedTag={selectedTag}
          isOpen={isOpen}
          onToggleDropdown={handleToggleDropdown}
          onTagChange={handleChangeTag}
        />
        {isOpen && <Options onSelectOption={handleClickOption} />}
      </CustomSelect>
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

const CustomSelect = styled.div`
  position: relative;
`;

export default SelectBox;
