import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonTextarea from '../../common/CommonTextarea';
import { IntroSectionProps } from '../../types/GroupCreate/GroupCreateType';

const IntroSection = ({
  introValue,
  handleChangeTextarea,
}: IntroSectionProps) => {
  const [charCount, setCharCount] = useState(0);
  const maxChar = 60;

  useEffect(() => {
    setCharCount(introValue.length);
  });

  return (
    <Section>
      <Label>
        <TitleContainer>
          한 줄 소개 <Essential>*</Essential>
        </TitleContainer>
      </Label>

      <CommonTextarea
        category="intro"
        value={introValue}
        handleChangeTextarea={handleChangeTextarea}
      />
      <CharCount>
        {charCount}/{maxChar}
      </CharCount>
    </Section>
  );
};

export default IntroSection;

const Section = styled.section`
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

const Essential = styled.span`
  margin-left: 0.6rem;

  color: ${({ theme }) => theme.colors.codrive_purple};

  ${({ theme }) => theme.fonts.title_medium_20};
`;

const CharCount = styled.span`
  display: flex;
  justify-content: end;

  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;
