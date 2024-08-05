import { useState } from 'react';
import styled from 'styled-components';
import { IntroProps } from '../../types/Register/RegisterType';

const IntroInput = ({ value, onChange, maxLength = 30 }: IntroProps) => {
  const [hasError, setHasError] = useState(false);

  const regex =
    /^[ㄱ-ㅎ가-힣a-zA-Z0-9~!@#$%^&*()_+\-={}\[\]:;"'<>,.?|\/\\\s]*$/;

  const handleChangeIntro = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;

    if (!regex.test(inputValue) || inputValue.length > maxLength) {
      setHasError(true);
    } else {
      setHasError(false);
      onChange(inputValue);
    }
  };

  return (
    <IntroContainer>
      <Title>한 줄 소개</Title>
      <Info>최대 30자 이내로 입력해주세요</Info>
      <Intro
        value={value}
        onChange={handleChangeIntro}
        $hasError={hasError}
        placeholder="나를 소개하는 문구를 적어주세요."
      />
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

const Intro = styled.textarea<{ $hasError: boolean }>`
  width: 100%;
  padding: 1.5rem 2rem 3rem;
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

const Title = styled.h2`
  margin-bottom: 0.6rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const Info = styled.span`
  display: block;

  margin-bottom: 1.6rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

export default IntroInput;
