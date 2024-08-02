import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray } from '../../assets';
import CommonHashTag from '../../common/CommonHashTag';
const DUMMY = [
  'Python',
  'Java',
  'C',
  'C++',
  'C#',
  'Javascript',
  'Kotlin',
  'Ruby',
  'Swift',
  'Scala',
  'Go',
];

const ALL_TAG = 'All';

interface LanguageSectionProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}
const LanguageSection = ({
  selectedTags,
  setSelectedTags,
}: LanguageSectionProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log('토글다운');

    setIsDropdownOpen((prev) => !prev);
  };

  const addTag = (tag: string) => {
    if (selectedTags.length >= 5 && tag !== ALL_TAG) {
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
        console.log('태그 추가 :', newTags);

        if (newTags.length >= 5) {
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
    // setSelectedTags([...DUMMY, ALL_TAG]);
    // console.log([...DUMMY, ALL_TAG]);
    const allTags = [...DUMMY, ALL_TAG];
    setSelectedTags(allTags);
    console.log('ALL 태그 모두 선택:', allTags);
    toggleDropdown(); // 드롭다운 닫기
  };

  return (
    <Section>
      <Label>
        사용 언어 <Essential>*</Essential>
      </Label>
      <DropdownContainer onClick={toggleDropdown}>
        <div>
          {selectedTags.includes(ALL_TAG) ? (
            <SelectedTagContainer>
              <CommonHashTag
                selectedTag={ALL_TAG}
                removeTag={() => removeTag(ALL_TAG)}
              />
            </SelectedTagContainer>
          ) : selectedTags.length === 0 ? (
            <DropdownText>최대 5개까지 선택해 주세요</DropdownText>
          ) : (
            selectedTags.map((tag, index) => (
              <SelectedTagContainer>
                <CommonHashTag
                  key={index}
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
          <DropdownItem
            $isSelected={selectedTags.includes(ALL_TAG)}
            onClick={selectAllTags}
          >
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

  background-color: blue;
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const PickTagContainer = styled.div`
  margin-bottom: 1rem;
`;

const SelectedTagContainer = styled.div`
  display: inline-flex;

  margin-left: 1.1rem;

  background-color: blue;
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

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  cursor: pointer;
`;

// const DropdownHeader = styled.div`
//   /* background-color: pink; */
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   color: ${({ theme }) => theme.colors.gray300};
//   ${({ theme }) => theme.fonts.body_ligth_16};
// `;

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
  padding: 1.5rem 2rem 1.4rem;

  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.gray300};
`;
