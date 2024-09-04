import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonTextarea from '../../common/CommonTextarea';
import { ProgressSectionProps } from '../../types/GroupCreate/GroupCreateType';

const ProgressSection = ({
  progressValue,
  handleChangeTextarea,
}: ProgressSectionProps) => {
  const [charCount, setCharCount] = useState(0);
  const maxChar = 1000;

  useEffect(() => {
    setCharCount(progressValue.length);
  });

  return (
    <Section>
      <Label>
        <TitleContainer>
          진행 방식 <Essential>*</Essential>
        </TitleContainer>
      </Label>
      <CommonTextarea
        category="group"
        value={progressValue}
        handleChangeTextarea={handleChangeTextarea}
      />
      <CharCount>
        {charCount}/{maxChar}
      </CharCount>
    </Section>
  );
};

export default ProgressSection;

const Section = styled.section`
  margin-top: 4.8rem;
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

const Essential = styled.span`
  margin-left: 0.6rem;

  color: ${({ theme }) => theme.colors.codrive_purple};
  ${({ theme }) => theme.fonts.body_medium_20};
`;

const CharCount = styled.span`
  display: flex;
  justify-content: end;

  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;
