import styled from 'styled-components';
import CommonTextarea from '../../common/CommonTextarea';

interface IntroSectionProps {
  introValue: string;
  handleChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const IntroSection = ({
  introValue,
  handleChangeTextarea,
}: IntroSectionProps) => {
  return (
    <Section>
      <Label>
        한 줄 소개 <Essential>*</Essential>
      </Label>
      <CommonTextarea
        category="intro"
        value={introValue}
        handleChangeTextarea={handleChangeTextarea}
      />
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

  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const Essential = styled.span`
  color: ${({ theme }) => theme.colors.codrive_purple};
`;
