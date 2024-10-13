import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { IcSecretWhite, IcSuccess } from '../assets';
import { ERROR_MSG } from '../constants/CommonInput/inputConst';
import { CommonInputProps } from '../types/CommonInput/inputType';
import { handleInput } from '../utils/handleInput';

const CommonInput = ({
  isClickedCheckBtn,
  category,
  value,
  isExitedNickname,
  isNotMatchedPW,
  isExitedRepositories,
  isClickedCheckRepositoriesBtn,
  handleChangeInputs,
}: CommonInputProps) => {
  const isError =
    ((category === 'title' ||
      category === 'password' ||
      category === 'secretKey') &&
      value.length > 20) ||
    (category === 'num' && parseInt(value) > 50) ||
    (category === 'nickname' &&
      (value.length > 10 || (isExitedNickname && isClickedCheckBtn))) ||
    (category === 'password' && isNotMatchedPW) ||
    (category === 'repositories' &&
      isExitedRepositories &&
      isClickedCheckRepositoriesBtn);

  const isNicknameSuccess =
    category === 'nickname' &&
    isClickedCheckBtn &&
    !isExitedNickname &&
    value.length !== 0;

  const isRepositoriesSuccess =
    category === 'repositories' &&
    isClickedCheckRepositoriesBtn &&
    !isExitedRepositories;

  const [placeholder, setPlaceholder] = useState('');

  const handlePlaceholder = () => {
    switch (category) {
      case 'title':
        setPlaceholder('제목');
        break;
      case 'num':
        setPlaceholder('00');
        break;
      case 'nickname':
        setPlaceholder('닉네임을 입력해주세요');
        break;
      case 'github':
        setPlaceholder('');
        break;
      case 'password':
        setPlaceholder('비밀번호를 입력하세요');
        break;
      case 'secretKey':
        setPlaceholder('비밀번호를 입력해주세요');
        break;
      case 'repositories':
        setPlaceholder('리포지토리 이름을 입력해주세요');
        break;
      default:
        setPlaceholder('');
    }
  };

  useEffect(() => {
    handlePlaceholder();
  }, []);

  return (
    <CommonInputWrapper $category={category}>
      <InputWrapper $category={category} $isError={isError}>
        {category === 'secretKey' && (
          <CategoryWrapper>
            <IcSecretWhite />
            <Text>비밀그룹</Text>
            <Divider>|</Divider>
          </CategoryWrapper>
        )}
        {category === 'github' && (
          <GithubURL $disabledGithubURL={value.length === 0}>
            https://github.com/
          </GithubURL>
        )}
        <label>
          <Input
            type="text"
            name={category}
            placeholder={placeholder}
            $category={category}
            value={value}
            onChange={handleChangeInputs}
            onInput={(e) => handleInput(e, category)}
          />
        </label>
        {category === 'num' && <Num>명</Num>}
        {isNicknameSuccess && !isError && (
          <IcWrapper $isNicknameSuccess={isNicknameSuccess}>
            <IcSuccess />
          </IcWrapper>
        )}
        {isRepositoriesSuccess && !isError && (
          <IcWrapper $isRepositoriesSuccess={isRepositoriesSuccess}>
            <IcSuccess />
          </IcWrapper>
        )}
      </InputWrapper>

      {category === 'secretKey' && (
        <Notice $excessLength={value.length > 20}>
          최대 20자 이내로 입력해주세요
        </Notice>
      )}

      {(isNotMatchedPW ||
        (isExitedNickname && isClickedCheckBtn) ||
        (isExitedRepositories && isClickedCheckRepositoriesBtn)) && (
        <ErrorMessage $isPW={category === 'password'}>
          {ERROR_MSG[category as keyof typeof ERROR_MSG]}
        </ErrorMessage>
      )}
    </CommonInputWrapper>
  );
};

export default CommonInput;

const CommonInputWrapper = styled.article<{ $category: string }>`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;

  width: ${({ $category }) => {
    switch ($category) {
      case 'title':
        return `45.3rem`;
      case 'num':
        return `13.9rem`;
      case 'password':
        return `35rem`;
      case 'secretKey':
        return `40.5rem`;
      case 'nickname':
        return `22.2rem`;
      case 'repositories':
        return `22.2rem`;
      default:
        return `29.6rem`;
    }
  }};
`;

const InputWrapper = styled.div<{
  $category: string;
  $isError?: boolean;
}>`
  display: flex;
  justify-content: ${({ $category }) => {
    switch ($category) {
      case 'num':
        return `end`;
      case 'nickname':
        return `space-between`;
      case 'password':
        return `center`;
      case 'repositories':
        return `space-between`;
      default:
        return `start`;
    }
  }};
  align-items: center;

  padding: 1rem 0;

  border-radius: 0.8rem;
  background-color: ${({ theme, $category }) =>
    $category === 'secretKey' ? theme.colors.gray500 : theme.colors.gray700};
  ${({ $isError, theme }) =>
    $isError &&
    css`
      box-shadow: 0 0 0 0.1rem ${theme.colors.alert};
    `};

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.gray700}
      inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    caret-color: white;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 1.6rem;
`;

const Text = styled.p`
  margin-right: 0.8rem;
  margin-left: 0.6rem;

  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.white};
`;

const Divider = styled.p`
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.white};
`;

const GithubURL = styled.p<{ $disabledGithubURL: boolean }>`
  margin-left: 2rem;

  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme, $disabledGithubURL }) =>
    $disabledGithubURL ? theme.colors.gray300 : theme.colors.white};
`;

const Input = styled.input<{ $category: string }>`
  display: flex;

  width: ${({ $category }) => {
    switch ($category) {
      case 'title':
        return `41.3rem`;
      case 'num':
        return `7.5rem`;
      case 'nickname':
        return `15.5rem`;
      case 'github':
        return `12.3rem`;
      case `repositories`:
        return `18.1rem`;
      default:
        return `20.1rem`;
    }
  }};
  padding: ${({ $category }) => {
    switch ($category) {
      case 'title':
        return `0.2rem 0`;
      case 'num':
        return `0.2rem 0`;
      case `nickname`:
        return `0.2rem 0 0.2rem`;
      case `repositories`:
        return `0.2rem 0 0.2rem`;
      default:
        return `0.5rem 0 0.4rem`;
    }
  }};
  margin-left: ${({ $category }) => {
    switch ($category) {
      case 'title':
        return `2rem`;
      case 'nickname':
        return `2rem`;
      case 'secretKey':
        return `0.8rem`;
      case `repositories`:
        return `2rem`;
      default:
        return 0;
    }
  }};

  ${({ $category }) =>
    $category === 'num' &&
    css`
      margin-right: 0.8rem;
    `};

  outline: none;

  border: none;
  background-color: ${({ theme, $category }) =>
    $category === 'secretKey' ? theme.colors.gray500 : theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme, $category }) =>
    $category === 'github'
      ? theme.fonts.body_ligth_16
      : theme.fonts.body_medium_16};

  text-align: ${({ $category }) => {
    switch ($category) {
      case 'num':
        return `right`;
      case 'password':
        return `center`;
      default:
        return `left`;
    }
  }};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
    ${({ theme }) => theme.fonts.body_ligth_16};
  }
`;

const Num = styled.p`
  padding-right: 2rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const IcWrapper = styled.div<{
  $isNicknameSuccess?: boolean;
  $isRepositoriesSuccess?: boolean;
}>`
  ${({ $isNicknameSuccess, $isRepositoriesSuccess }) =>
    ($isNicknameSuccess || $isRepositoriesSuccess) &&
    css`
      margin-right: 1.2rem;
    `};
`;

const Notice = styled.p<{ $excessLength: boolean }>`
  margin-left: 1.8rem;

  color: ${({ theme, $excessLength }) =>
    $excessLength ? theme.colors.alert : theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const ErrorMessage = styled.p<{ $isPW: boolean }>`
  ${({ theme }) => theme.fonts.body_ligth_10};
  color: ${({ theme }) => theme.colors.alert};

  ${({ $isPW }) =>
    $isPW
      ? css`
          text-align: center;
        `
      : css`
          margin-left: 1.8rem;
        `};
`;
