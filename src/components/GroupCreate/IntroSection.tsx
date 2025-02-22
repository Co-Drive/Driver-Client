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
    if (introValue) {
      setCharCount(introValue.length);
    } else {
      setCharCount(0); // introValue가 undefined인 경우 0으로 설정
    }
  }, [introValue]);

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
      <ChartCountContainer>
        <CharCount>
          {charCount}/{maxChar}
        </CharCount>
      </ChartCountContainer>
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

const ChartCountContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const CharCount = styled.span`
  display: flex;

  margin: 0.8rem 0.2rem 0 0;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;
