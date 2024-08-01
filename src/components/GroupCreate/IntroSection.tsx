import styled from 'styled-components';
import CommonTextarea from '../../common/CommonTextarea';

interface IntroSectionProps {
  introValue: string;
  handleIntroValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const IntroSection = ({ introValue, handleIntroValue }: IntroSectionProps) => {
  return (
    <Section>
      <Label>
        한 줄 소개 <Essential>*</Essential>
      </Label>
      <CommonTextarea
        category="intro"
        value={introValue}
        handleChangeTextarea={handleIntroValue}
      />
    </Section>
  );
};

export default IntroSection;

const Section = styled.section`
  margin-top: 4rem;
`;

const IntroTextarea = styled.textarea`
  display: flex;
  align-items: center;

  width: 100%;
  height: 10rem;
  padding: 1.5rem 2rem 1.4rem;

  border: none;

  resize: none;

  border-radius: 0.8rem;
  ${({ theme }) => theme.fonts.body_ligth_16};
  background-color: ${({ theme }) => theme.colors.gray700};
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
