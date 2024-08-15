import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray } from '../../assets';
import CommonHashTag from '../../common/CommonHashTag';
import { ALL_TAG, DUMMY } from '../../constants/GroupCreate/LanguageConst';
import { LanguageSectionProps } from '../../types/GroupCreate/GroupCreateType';

const LanguageSection = ({
  selectedTags,
  setSelectedTags,
}: LanguageSectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const addTag = (tag: string) => {
    if (selectedTags.length >= 5 && tag !== ALL_TAG) {
      return;
    }
    if (tag === ALL_TAG) {
      setIsAllSelected(true);
      setSelectedTags(DUMMY);
    } else {
      if (!selectedTags.includes(tag)) {
        // const newTags = selectedTags.includes(ALL_TAG)
        //   ? [...selectedTags.filter((t) => t !== ALL_TAG), tag]
        //   : [...selectedTags, tag];
        const newTags = [...selectedTags, tag];
        setSelectedTags(newTags);
        // onChangeTags(newTags);
        // !
        if (newTags.length >= 5) {
          toggleDropdown();
        }
      }
    }
  };

  const removeTag = (tag: string) => {
    if (tag === ALL_TAG) {
      setIsAllSelected(false);
      setSelectedTags([]);
      console.log(selectedTags);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  const selectAllTags = () => {
    setIsAllSelected(true);
    setSelectedTags(DUMMY);
    toggleDropdown(); // 드롭다운 닫기
  };

  return (
    <Section>
      <Label>
        사용 언어 <Essential>*</Essential>
      </Label>
      <DropdownContainer onClick={toggleDropdown}>
        <div>
          {isAllSelected ? (
            <SelectedTagContainer key={ALL_TAG}>
              <CommonHashTag
                selectedTag={ALL_TAG}
                removeTag={() => removeTag(ALL_TAG)}
              />
            </SelectedTagContainer>
          ) : selectedTags.length === 0 ? (
            <DropdownText>최대 5개까지 선택해 주세요</DropdownText>
          ) : (
            selectedTags.map((tag, index) => (
              <SelectedTagContainer key={index}>
                <CommonHashTag
                  selectedTag={tag}
                  removeTag={(e) => {
                    if (e) e.stopPropagation();
                    removeTag(tag);
                  }}
                />
              </SelectedTagContainer>
            ))
          )}
        </div>
        <IconContainer>
          <IcArrowBottomGray />
        </IconContainer>
      </DropdownContainer>
      {isDropdownOpen && (
        <DropdownItemContainer>
          <DropdownItem $isSelected={isAllSelected} onClick={selectAllTags}>
            {ALL_TAG}
          </DropdownItem>
          <Borderline />
          {DUMMY.map((tag) => (
            <PickTagContainer key={tag}>
              <DropdownItem
                $isSelected={selectedTags.includes(tag)}
                onClick={() => addTag(tag)}
              >
                {tag}
              </DropdownItem>
            </PickTagContainer>
          ))}
        </DropdownItemContainer>
      )}
    </Section>
  );
};

export default LanguageSection;

const Section = styled.section`
  position: relative;

  margin-top: 4rem;
`;

const Label = styled.label`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin-bottom: 1.8rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const PickTagContainer = styled.div`
  margin-bottom: 1rem;
`;

const SelectedTagContainer = styled.div`
  display: inline-flex;
`;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.5rem 2rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  cursor: pointer;
`;

const DropdownItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 61.1rem;
  padding: 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const Borderline = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 1.2rem 0;

  background-color: ${({ theme }) => theme.colors.gray500};
`;

const DropdownItem = styled.div<{ $isSelected: boolean }>`
  display: inline-flex;
  align-items: center;

  padding: 0.6rem 1rem;
  margin-right: 1rem;

  border-radius: 0.4rem;
  ${({ theme }) => theme.fonts.body_eng_medium_12};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.codrive_green : theme.colors.gray500};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.bg : theme.colors.gray200};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1.2rem;
`;

const DropdownText = styled.p`
  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.gray300};
`;
