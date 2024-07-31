import styled from 'styled-components';
import { PLACEHOLDER } from '../../constants/CommonTextarea/textareaConst';

const ProgressSection = () => {
  return (
    <Section>
      <Label>
        진행 방식 <Essential>*</Essential>
      </Label>
      <ProgressText maxLength={1000} placeholder={PLACEHOLDER[1]} />
    </Section>
  );
};

export default ProgressSection;

const Section = styled.section`
  margin-top: 4.8rem;
`;

const ProgressText = styled.textarea`
  display: flex;
  align-items: center;

  width: 100%;
  height: 26rem;
  padding: 1.5rem 2rem 1.4rem;
  resize: none;

  border: none;
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
