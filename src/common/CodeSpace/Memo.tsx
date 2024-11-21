import { useState } from 'react';
import styled from 'styled-components';
import {
  IcArrowBottomGray,
  IcArrowTopGray,
  IcMemoGray,
  IcMemoWhite,
} from '../../assets';
import { MemoProps } from '../../types/Solve/solveTypes';

const Memo = ({ isReadOnly, stringId, memo, handleChangeMemo }: MemoProps) => {
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const isMemoDisabled = !isMemoOpen && !memo.length;

  const handleclickArrow = () => {
    setIsMemoOpen(!isMemoOpen);
  };

  return (
    <MemoContainer>
      <TopBar onClick={handleclickArrow}>
        <TitleContainer>
          {isMemoDisabled ? <IcMemoGray /> : <IcMemoWhite />}
          <Title $isDisabled={isMemoDisabled}>메모장</Title>
        </TitleContainer>

        {isMemoOpen ? <IcArrowTopGray /> : <IcArrowBottomGray />}
      </TopBar>

      <TextareaContainer $isMemoOpen={isMemoOpen}>
        <Textarea
          id={stringId}
          name="memo"
          value={memo}
          readOnly={isReadOnly}
          onChange={(e) => {
            if (!isReadOnly && handleChangeMemo) handleChangeMemo(e);
          }}
        />
      </TextareaContainer>
    </MemoContainer>
  );
};

export default Memo;

const MemoContainer = styled.article`
  width: 100%;
  min-width: 92.6rem;

  padding: 2.4rem 2.6rem 0 2.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 0.4rem 2.4rem;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
`;

const Title = styled.p<{ $isDisabled: boolean }>`
  ${({ theme }) => theme.fonts.title_semiBold_18};
  color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.colors.gray300 : theme.colors.white};
`;

const TextareaContainer = styled.article<{ $isMemoOpen: boolean }>`
  display: ${({ $isMemoOpen }) => ($isMemoOpen ? 'block' : 'none')};

  height: 29.2rem;
  padding: 2rem 0.4rem 2.6rem 0.6rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const Textarea = styled.textarea`
  overflow: hidden auto;

  width: 100%;
  height: 100%;

  border: none;
  outline: none;

  word-break: keep-all;
  resize: none;

  ${({ theme }) => theme.fonts.body_medium_16};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  scrollbar-color: ${({ theme }) => theme.colors.gray500};

  /* 스크롤바 굵기 설정 */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* 스크롤바 막대 설정 */
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;
