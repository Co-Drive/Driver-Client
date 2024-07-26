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

  <SelectBoxContainer>
    <Select
      inputValue={inputValue}
      selectedTag={selectedTag}
      isOpen={isOpen}
      onToggleDropdown={handleToggleDropdown}
      onTagChange={}
    />
  </SelectBoxContainer>;
};

const SelectBoxContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

export default SelectBox;
