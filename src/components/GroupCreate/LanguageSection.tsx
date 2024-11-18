import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray } from '../../assets';
import CommonHashTag from '../../common/CommonHashTag';
import { ALL_TAG, LANGUAGE } from '../../constants/GroupCreate/LanguageConst';
import { LanguageSectionProps } from '../../types/GroupCreate/GroupCreateType';

const LanguageSection = ({
  selectedTags,
  setSelectedTags,
}: LanguageSectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(
    selectedTags.length === 11
  );

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const addTag = (tag: string) => {
    if (selectedTags.length >= 5 && tag !== ALL_TAG) {
      return;
    }
    if (tag === ALL_TAG) {
      setIsAllSelected(true);
      setSelectedTags(LANGUAGE);
    } else {
      if (!selectedTags.includes(tag)) {
        const newTags = [...selectedTags, tag];
        setSelectedTags(newTags);
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
    setSelectedTags(LANGUAGE);
    toggleDropdown();
  };

  return (
    <Section>
      <Label>
        <TitleContainer>
          사용 언어 <Essential>*</Essential>
        </TitleContainer>
      </Label>
      <DropdownContainer
        $hasSelectedTags={selectedTags.length > 0}
        onClick={toggleDropdown}
      >
        <div>
          {isAllSelected ? (
            <SelectedTagContainer key={ALL_TAG}>
              <CommonHashTag
                selectedTag={ALL_TAG}
                removeTag={() => removeTag(ALL_TAG)}
              />
            </SelectedTagContainer>
          ) : selectedTags.length === 0 ? (
            <DropdownText>
              {isDropdownOpen ? '최대 5개까지 선택해주세요' : '복수선택 가능'}
            </DropdownText>
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
          {isDropdownOpen ? <IcArrowTopGray /> : <IcArrowBottomGray />}
        </IconContainer>
      </DropdownContainer>
      {isDropdownOpen && (
        <DropdownItemContainer>
          <DropdownItem $isSelected={isAllSelected} onClick={selectAllTags}>
            {ALL_TAG}
          </DropdownItem>
          <Borderline />
          {LANGUAGE.map((tag) => (
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
`;

const TitleContainer = styled.div`
  display: flex;

  margin-left: 0.2rem;

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
  margin-left: 0.6rem;
  ${({ theme }) => theme.fonts.title_medium_20};

  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const DropdownContainer = styled.div<{ $hasSelectedTags: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding: ${({ $hasSelectedTags }) =>
    $hasSelectedTags
      ? '1.1rem 1.2rem 1.1rem 1.1rem'
      : '1.2rem 1.2rem 1.2rem 2rem'};
  margin-bottom: 0.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  cursor: pointer;
`;

const DropdownItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  box-shadow: 0 1rem 2rem #0b0c0f99;

  width: 61.1rem;
  padding: 1.6rem 1.6rem 0.6rem;

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
`;

const DropdownText = styled.p`
  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.gray300};
`;
