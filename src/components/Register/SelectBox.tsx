import { useCallback, useState } from 'react';
import styled from 'styled-components';
import Select from './Select';

const SelectBox = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // 드롭다운 토글
  const handleToggleDropdown = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | null) => {
      if (e) e.stopPropagation();
      setIsOpen((prev) => !prev);
    },
    []
  );

  // 선택된 태그 값 업데이트
  const handleChangeTag = useCallback((value: string) => {
    setSelectedTag(value);
    setInputValue(value);
  }, []);

  <SelectBoxContainer>
    <Select
      inputValue={inputValue}
      selectedTag={selectedTag}
      isOpen={isOpen}
      onToggleDropdown={handleToggleDropdown}
      onTagChange={handleChangeTag}
    />
  </SelectBoxContainer>;
};

const SelectBoxContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

export default SelectBox;
