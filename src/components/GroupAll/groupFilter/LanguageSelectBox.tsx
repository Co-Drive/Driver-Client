import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray, IcFilter } from '../../../assets';
import CommonHashTag from '../../../common/CommonHashTag';
import { LanguageSectionProps } from '../../../types/GroupCreate/GroupCreateType';
import RangeSliderFilter from './RangeSlidrFilter';

const ALL_TAG = 'ALL';
const firstRowTags = ['Python', 'Java', 'JavaScript', 'C++', 'C', 'C#'];
const secondRowTags = ['Kotlin', 'Swift', 'Ruby', 'Scala', 'Go'];

const LanguageSelectBox = ({
  selectedTags,
  setSelectedTags,
}: LanguageSectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [minValue, setMinValue] = useState<number>(1);
  const [maxValue, setMaxValue] = useState<number>(50);

  const [tempMinValue, setTempMinValue] = useState<number>(1);
  const [tempMaxValue, setTempMaxValue] = useState<number>(50);

  // 변경: 값이 설정된 후에만 슬라이더 값을 표시
  const hasSelectedTagsOrRange =
    selectedTags.length > 0 || minValue !== 1 || maxValue !== 50;

  const toggleDropdown = () => {
    if (isDropdownOpen) {
      setMinValue(tempMinValue);
      setMaxValue(tempMaxValue);
    }
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
      }
    }
  };

  const removeTag = (tag: string) => {
    if (tag === ALL_TAG) {
      setSelectedTags([]);
    } else {
      const newTags = selectedTags.filter((t) => t !== tag);
      setSelectedTags(newTags);
    }
  };

  const selectAllTags = () => {
    const allTags = [...firstRowTags, ...secondRowTags];
    setSelectedTags(allTags);
  };

  return (
    <Section>
      <DropdownContainer onClick={toggleDropdown}>
        <SelectContainer>
          <FilterIconContainer>
            <IcFilter />
          </FilterIconContainer>
          <SelectedTagsContainer>
            {selectedTags.length ===
            firstRowTags.length + secondRowTags.length ? (
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
          </SelectedTagsContainer>
          <Borderline />
          {/* 변경: 슬라이더 값이 설정된 경우에만 표시 */}
          {hasSelectedTagsOrRange && (
            <RangeValue>
              {minValue}명 - {maxValue}명
            </RangeValue>
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
                $isSelected={
                  selectedTags.length ===
                  firstRowTags.length + secondRowTags.length
                }
                onClick={selectAllTags}
              >
                {ALL_TAG}
              </DropdownItem>
            </AllTagContainer>
          </TagContainer>
          <RangeSliderContainer>
            <RangeTitle>수용인원</RangeTitle>
            <RangeSliderFilter
              min={0}
              max={50}
              step={5}
              rangeMin={5}
              minValue={tempMinValue}
              maxValue={tempMaxValue}
              setMinValue={setTempMinValue}
              setMaxValue={setTempMaxValue}
            />
          </RangeSliderContainer>
        </DropdownItemContainer>
      )}
    </Section>
  );
};

export default LanguageSelectBox;

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

const SelectedTagsContainer = styled.div`
  width: 28.6rem;

  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray400};
`;

const SelectedTagContainer = styled.div`
  display: inline-flex;
`;

const RangeValue = styled.p`
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.white};
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
  height: 27.6rem;
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

const RangeSliderContainer = styled.div`
  margin-top: 3.4rem;
`;

const RangeTitle = styled.p`
  margin-bottom: 1.5rem;

  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.white};
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

  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray400};
`;

const AllTagContainer = styled.div`
  margin-left: 1.8rem;
`;
