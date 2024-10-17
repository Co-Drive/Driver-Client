import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonTextarea from '../../common/CommonTextarea';
import { ProgressSectionProps } from '../../types/GroupCreate/GroupCreateType';

const ProgressSection = ({
  progressValue,
  handleChangeTextarea,
}: ProgressSectionProps) => {
  const [charCount, setCharCount] = useState(0);
  const maxChar = `1,000`;

  useEffect(() => {
    if (progressValue) {
      setCharCount(progressValue.length);
    } else {
      setCharCount(0); // introValue가 undefined인 경우 0으로 설정
    }
  }, [progressValue]);

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
      <ChartContainer>
        <CharCount>
          {charCount}/{maxChar}
        </CharCount>
      </ChartContainer>
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

const ChartContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const CharCount = styled.span`
  margin: 0.8rem 0.2rem 0 0;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;
