import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray, IcFilter } from '../../../assets';
import CommonHashTag from '../../../common/CommonHashTag';
import { LanguageSectionProps } from '../../../types/GroupCreate/GroupCreateType';

const ALL_TAG = 'ALL';

const LanguageSelectBox = ({
  selectedTags,
  setSelectedTags,
}: LanguageSectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const addTag = (tag: string) => {
    if (selectedTags.length >= 3 && tag !== ALL_TAG) {
      return;
    }
    if (tag === ALL_TAG) {
      selectAllTags();
    } else {
      if (!selectedTags.includes(tag)) {
        const newTags = selectedTags.includes(ALL_TAG)
          ? [...selectedTags.filter((t) => t !== ALL_TAG), tag]
          : [...selectedTags, tag];
        setSelectedTags(newTags);

        if (newTags.length >= 3) {
          toggleDropdown();
        }
      }
    }
  };

  const removeTag = (tag: string) => {
    if (tag === ALL_TAG) {
      setSelectedTags([]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  const selectAllTags = () => {
    const allTags = [...firstRowTags, ...secondRowTags, ALL_TAG];
    setSelectedTags(allTags);
    toggleDropdown();
  };

  // 언어를 두 줄로 나누기 위한 설정
  const firstRowTags = ['Python', 'Java', 'JavaScript', 'C++', 'C', 'C#'];
  const secondRowTags = ['Kotlin', 'Swift', 'Ruby', 'Scala', 'Go'];

  return (
    <Section>
      <DropdownContainer onClick={toggleDropdown}>
        <SelectContainer>
          <FilterIconContainer>
            <IcFilter />
          </FilterIconContainer>
          {selectedTags.includes(ALL_TAG) ? (
            <SelectedTagContainer key={ALL_TAG}>
              <CommonHashTag
                selectedTag={ALL_TAG}
                removeTag={() => removeTag(ALL_TAG)}
              />
            </SelectedTagContainer>
          ) : selectedTags.length === 0 ? (
            <DropdownText>그룹 필터</DropdownText>
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
        </SelectContainer>
        <IconContainer>
          {isDropdownOpen ? <IcArrowTopGray /> : <IcArrowBottomGray />}
        </IconContainer>
      </DropdownContainer>
      {isDropdownOpen && (
        <DropdownItemContainer>
          <DropdownTitle>
            <Title>사용언어</Title>
            <Info>최대 3개까지 선택 가능합니다</Info>
          </DropdownTitle>
          <TagContainer>
            <LanguageItemsContainer>
              <DropdownItems>
                {firstRowTags.map((tag) => (
                  <PickTagContainer key={tag}>
                    <DropdownItem
                      $isSelected={selectedTags.includes(tag)}
                      onClick={() => addTag(tag)}
                    >
                      {tag}
                    </DropdownItem>
                  </PickTagContainer>
                ))}
              </DropdownItems>
              <DropdownItems>
                {secondRowTags.map((tag) => (
                  <PickTagContainer key={tag}>
                    <DropdownItem
                      $isSelected={selectedTags.includes(tag)}
                      onClick={() => addTag(tag)}
                    >
                      {tag}
                    </DropdownItem>
                  </PickTagContainer>
                ))}
              </DropdownItems>
            </LanguageItemsContainer>
            <Borderline />
            <AllTagContainer>
              <DropdownItem
                $isSelected={selectedTags.includes(ALL_TAG)}
                onClick={selectAllTags}
              >
                {ALL_TAG}
              </DropdownItem>
            </AllTagContainer>
          </TagContainer>
        </DropdownItemContainer>
      )}
    </Section>
  );
};

export default LanguageSelectBox;

// 스타일 컴포넌트는 기존 코드와 동일하게 유지
const Section = styled.section`
  position: relative;

  margin-top: 4rem;
`;

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.5rem 2rem 1.4rem;
  margin-bottom: 0.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FilterIconContainer = styled.p`
  margin-right: 1.2rem;
`;

const SelectedTagContainer = styled.div`
  display: inline-flex;
`;

const DropdownText = styled.p`
  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.gray300};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1.2rem;
`;

const DropdownItemContainer = styled.div`
  width: 100%;
  padding: 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const DropdownTitle = styled.div`
  margin-bottom: 1.8rem;
`;

const Title = styled.p`
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.white};
`;

const Info = styled.p`
  ${({ theme }) => theme.fonts.detail_regular_12};
  color: ${({ theme }) => theme.colors.gray200};
`;

const TagContainer = styled.div`
  display: flex;
`;

const LanguageItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropdownItems = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const PickTagContainer = styled.div`
  margin-bottom: 0.8rem;
`;

const DropdownItem = styled.div<{ $isSelected: boolean }>`
  display: inline-flex;
  align-items: center;

  padding: 0.6rem 1rem;

  border-radius: 0.4rem;
  ${({ theme }) => theme.fonts.body_eng_medium_12};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.codrive_green : theme.colors.gray500};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.bg : theme.colors.gray200};
`;

const Borderline = styled.div`
  margin-left: 1.8rem;

  border-right: 1px solid ${({ theme }) => theme.colors.gray600};
`;

const AllTagContainer = styled.div`
  margin-left: 1.8rem;
`;
