import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SelectBoxProps } from './../../types/Register/RegisterType';
import Options from './Options';
import Select from './Select';

const SelectBox = ({
  selectedTag: initialSelectedTag,
  handleChangeTag,
}: SelectBoxProps) => {
  const [selectedTag, setSelectedTag] = useState(initialSelectedTag);
  const [isOpen, setIsOpen] = useState(false);

  // 전달받은 값 올바르게 반영
  useEffect(() => {
    setSelectedTag(initialSelectedTag);
  }, [initialSelectedTag]);

  const handleToggleDropdown = (shouldClose: boolean) => {
    setIsOpen((prev) => (shouldClose ? false : !prev));
  };

  const handleChangeTagLocal = (value: string) => {
    setSelectedTag(value);
    handleChangeTag(value); // 부모 컴포넌트로 선택된 태그 값 전달
  };

  const handleClickOption = useCallback(
    (option: string) => {
      if (option !== selectedTag) {
        handleChangeTagLocal(option);
      }
      setIsOpen(false);
    },
    [handleChangeTagLocal, selectedTag]
  );

  return (
    <SelectBoxContainer>
      <Select
        inputValue={selectedTag}
        isOpen={isOpen}
        handleToggleDropdown={handleToggleDropdown}
        handleChangeTag={handleChangeTagLocal}
      />
      {isOpen && <Options onSelectOption={handleClickOption} />}
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  /* Only comments */
`;

export default SelectBox;
