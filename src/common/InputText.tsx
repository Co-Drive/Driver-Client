import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface InputTextProps {
  category: string;
}

const InputText = ({ category }: InputTextProps) => {
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
      case 'secret-key':
        setPlaceholder('비밀번호를 입력해주세요');
        break;
      default:
        setPlaceholder('');
    }
  };

  useEffect(() => {
    handlePlaceholder();
  }, []);

  return (
    <InputTextWrapper $category={category}>
      {category === 'secret-key' && (
        <CategoryWrapper>
          {/* 여기 아이콘이 들어갈 예정 */}
          <Text>비밀 그룹</Text>
          <Divider>|</Divider>
        </CategoryWrapper>
      )}
      {category === 'github' && <GithubURL>https://github.com/</GithubURL>}
      <label>
        <Input
          type="text"
          name={category}
          placeholder={placeholder}
          $category={category}
        />
      </label>
      {category === 'num' && <Num>명</Num>}
      {/* category === "nickname"일 때 체크 아이콘 들어올 예정 */}
    </InputTextWrapper>
  );
};

export default InputText;

const InputTextWrapper = styled.div<{ $category: string }>`
  display: flex;
  justify-content: ${({ $category }) => {
    switch ($category) {
      case 'num':
        return `end`;
      case 'nickname':
        return `space-between`;
      case 'password':
        return `center`;
      default:
        return `start`;
    }
  }};
  align-items: center;

  width: ${({ $category }) => {
    switch ($category) {
      case 'title':
        return `45.3rem`;
      case 'num':
        return `13.9rem`;
      case 'password':
        return `35rem`;
      case 'secret-key':
        return `40.5rem`;
      default:
        return `29.6rem`;
    }
  }};
  padding: 1rem 0;

  /* 나중에 없애기 */
  margin-left: 5rem;

  border-radius: 0.8rem;
  background-color: ${({ theme, $category }) =>
    $category === 'secret-key' ? theme.colors.gray500 : theme.colors.gray700};
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

const GithubURL = styled.p`
  margin-left: 2rem;

  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.white};
`;

const Input = styled.input<{ $category: string }>`
  width: ${({ $category }) => {
    switch ($category) {
      case 'title':
        return `41.3rem`;
      case 'num':
        return `2.5rem`;
      case 'nickname':
        return `14.2rem`;
      case 'github':
        return `12.3rem`;
      default:
        return `29.1rem`;
    }
  }};
  padding: 0.5rem 0 0.4rem;
  margin-left: ${({ $category }) => {
    switch ($category) {
      case 'title':
        return `2rem`;
      case 'nickname':
        return `2rem`;
      case 'secret-key':
        return `0.8rem`;
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
    $category === 'secret-key' ? theme.colors.gray500 : theme.colors.gray700};
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
`;

const Num = styled.p`
  padding-right: 2rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_16};
`;
