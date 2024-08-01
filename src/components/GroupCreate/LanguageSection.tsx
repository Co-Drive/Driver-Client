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

interface LanguageSectionProps {
  removeTag: (tag: string) => void;
}

const LanguageSection = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log('토글다운');

    setIsDropdownOpen((prev) => !prev);
  };

  const addTag = (tag: string) => {
    if (selectedTags.length < 5 && !selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <Section>
      <Label>
        사용 언어 <Essential>*</Essential>
      </Label>
      <div>
        <DropdownContainer onClick={toggleDropdown}>
          <div>
            {selectedTags.length === 0 ? (
              <DropdownText>최대 5개까지 선택해 주세요</DropdownText>
            ) : (
              selectedTags.map((tag, index) => (
                <CommonHashTag
                  key={index}
                  selectedTag={tag}
                  removeTag={() => removeTag(tag)}
                />
              ))
            )}
          </div>
          <IconContainer>
            <IcArrowBottomGray />
          </IconContainer>
        </DropdownContainer>
      </div>
      {isDropdownOpen && (
        <DropdownItemContainer>
          {DUMMY.map((tag) => (
            <DropdownItem
              key={tag}
              $isSelected={selectedTags.includes(tag)}
              onClick={() => addTag(tag)}
            >
              {tag}
            </DropdownItem>
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

const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 61.1rem;
  height: 4.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  /* background-color: pink; */
  cursor: pointer;
`;

const DropdownHeader = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_16};
`;

const DropdownItemContainer = styled.div`
  display: flex;

  padding: 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  cursor: pointer;
`;

const DropdownItem = styled.div<{ $isSelected: boolean }>`
  display: inline-flex;
  align-items: center;

  padding: 0.6rem 1rem;
  margin-right: 1rem;

  border-radius: 0.4rem;
  ${({ theme }) => theme.fonts.body_eng_medium_12};
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.bg};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1.2rem;

  /* background-color: blue; */
`;

const DropdownText = styled.p`
  padding: 1.5rem 2rem 1.4rem;

  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.gray300};
`;

const Label = styled.label`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  margin-bottom: 1.8rem;

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
`;
