import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Options from './Options';
import Select from './Select';

const SelectBox = () => {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectBoxRef = useRef<HTMLDivElement>(null);

  /* 드롭다운 토글 */
  const handleToggleDropdown = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | null) => {
      if (e) e.stopPropagation();
      setIsOpen((prev) => !prev);
    },
    []
  );

  const handleChangeTag = useCallback((value: string) => {
    setSelectedTag(value);
    setInputValue(value);
    console.log(`Updated selectedTag: ${value}`);
    console.log(`Updated setInputValue: ${value}`);
  }, []);

  const handleClickOption = useCallback(
    (option: string) => {
      if (option !== selectedTag) {
        handleChangeTag(option);
      }
      setIsOpen(false); // 옵션 선택 시 드롭다운 닫기
    },
    [handleChangeTag, selectedTag]
  );

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      selectBoxRef.current &&
      !selectBoxRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <SelectBoxContainer ref={selectBoxRef}>
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
