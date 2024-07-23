import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowBottomGray, IcArrowTopGray, IcLinkGray } from '../../../assets';

const LISTS = [
  {
    category: 'tag',
    placeholder: '유형을 선택해주세요 (복수선택 가능)',
    list: [
      '해시',
      '스택/큐',
      '힙 (Heap)',
      '정렬',
      '완전탐색',
      '탐욕법 (Greedy)',
      '동적계획법 (Dynamic Programming)',
      '깊이 우선탐색 (DFS)',
      '너비 우선 탐색 (BFS)',
      '이분탐색',
      '그래프',
      '트리',
      '투포인터',
    ],
  },
  {
    category: 'platform',
    placeholder: '플랫폼을 선택해주세요',
    list: ['백준', '프로그래머스', 'SWEA', '리트코드', '해커링크', '기타'],
  },
];

const HeaderBottom = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleClickArrowBtn = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  return (
    <HeaderBottomContainer>
      {LISTS.map((contents) => {
        const { category, placeholder, list } = contents;
        const isTagCategory = category === 'tag';
        return (
          <SelectContainer key={category}>
            <InputContainer $isTagCategory={isTagCategory}>
              <Input
                readOnly={true}
                placeholder={placeholder}
                $isTagCategory={isTagCategory}
              />
              {isOptionOpen ? (
                <IcArrowTopGray onClick={handleClickArrowBtn} />
              ) : (
                <IcArrowBottomGray onClick={handleClickArrowBtn} />
              )}
            </InputContainer>

            <Ul $hidden={!isOptionOpen} $isTagCategory={isTagCategory}>
              {list.map((v) => {
                return <List key={v}>{v}</List>;
              })}
            </Ul>
          </SelectContainer>
        );
      })}

      <LinkInputContainer>
        <IcLinkGray />
        <LinkInput placeholder="링크를 첨부해주세요" />
      </LinkInputContainer>
    </HeaderBottomContainer>
  );
};

export default HeaderBottom;

const HeaderBottomContainer = styled.section`
  display: flex;
  gap: 1.9rem;
  align-items: center;
  justify-self: center;

  width: 100%;
`;

const SelectContainer = styled.article`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div<{ $isTagCategory: boolean }>`
  display: flex;
  gap: ${({ $isTagCategory }) => ($isTagCategory ? `1.2rem` : `0.8rem`)};
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 1.2rem 1.2rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Input = styled.input<{ $isTagCategory: boolean }>`
  width: ${({ $isTagCategory }) => ($isTagCategory ? `31.7rem` : `14.2rem`)};

  outline: none;

  border: none;
  background-color: transparent;
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const Ul = styled.ul<{ $hidden: boolean; $isTagCategory: boolean }>`
  display: ${({ $hidden }) => ($hidden ? 'none' : 'block')};
  position: absolute;
  top: 25rem;
  z-index: 10;

  width: ${({ $isTagCategory }) => ($isTagCategory ? `38.5rem` : `20.6rem`)};
  padding: 0.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};

  text-align: center;
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const List = styled.li`
  width: 100%;
  padding: 1.2rem 0 0.7rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.gray100};

  &:hover {
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.gray700};
  }
`;

const LinkInputContainer = styled.article`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: 1.2rem 1.6rem 1.2rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const LinkInput = styled.input`
  width: 100%;

  outline: none;

  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
