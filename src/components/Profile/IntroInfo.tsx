import { useState } from 'react';
import styled from 'styled-components';
import { IntroInfoProps } from '../../types/Profile/ProfileType';
import { handleInput } from '../../utils/handleInput';

const IntroInfo = ({ value, onChange }: IntroInfoProps) => {
  const [hasError, setHasError] = useState(false);
  const maxLength = 30;

  const handleChangeIntro = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInput(e, 'intro');
    const { value } = e.target;
    value.length > maxLength ? setHasError(true) : setHasError(false);
    onChange(e);
  };

  return (
    <IntroInfoContainer>
      <IntroTitle>한 줄 소개</IntroTitle>
      <Intro
        value={value}
        onChange={handleChangeIntro}
        $hasError={hasError}
        placeholder="나를 소개하는 문구를 적어주세요."
      />
    </IntroInfoContainer>
  );
};

const IntroInfoContainer = styled.section`
  display: flex;
  align-items: center;

  padding-bottom: 1.4rem;
  margin-bottom: 3.2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const IntroTitle = styled.h2`
  margin-right: 5.9rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Intro = styled.textarea<{ $hasError: boolean }>`
  width: 29.6rem;
  padding: 1.5rem 2rem;
  resize: none;

  ${({ theme }) => theme.fonts.body_ligth_16};
  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.alert : theme.colors.gray700};
  border-radius: 0.8rem;
  outline: none;

  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    ${({ theme }) => theme.fonts.body_ligth_16};
  }
`;

export default IntroInfo;
