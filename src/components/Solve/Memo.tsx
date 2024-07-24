import { useState } from 'react';
import styled from 'styled-components';
import {
  IcArrowBottomGray,
  IcArrowTopGray,
  IcMemoGray,
  IcMemoWhite,
} from '../../assets';
import { MemoProps } from '../../types/Solve/solveTypes';

const Memo = ({ stringId, memo, handleChangeMemo }: MemoProps) => {
  const [isMemoOpen, setIsMemoOpen] = useState(false);

  const handleclickArrow = () => {
    setIsMemoOpen(!isMemoOpen);
  };

  return (
    <MemoContainer>
      <TopBar>
        <TitleContainer>
          {!isMemoOpen ? <IcMemoGray /> : <IcMemoWhite />}
          <Title $isClosed={!isMemoOpen}>메모장</Title>
        </TitleContainer>

        {isMemoOpen ? (
          <IcArrowTopGray onClick={handleclickArrow} />
        ) : (
          <IcArrowBottomGray onClick={handleclickArrow} />
        )}
      </TopBar>

      <TextareaContainer $isMemoOpen={isMemoOpen}>
        <Textarea
          id={stringId}
          name="memo"
          value={memo}
          onChange={handleChangeMemo}
        />
      </TextareaContainer>
    </MemoContainer>
  );
};

export default Memo;

const MemoContainer = styled.article`
  width: 100%;
  padding: 2.4rem 2.6rem 0 2.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 0.4rem 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
`;

const Title = styled.p<{ $isClosed: boolean }>`
  ${({ theme }) => theme.fonts.title_semiBold_18};
  color: ${({ theme, $isClosed }) =>
    $isClosed ? theme.colors.gray300 : theme.colors.white};
`;

const TextareaContainer = styled.article<{ $isMemoOpen: boolean }>`
  display: ${({ $isMemoOpen }) => ($isMemoOpen ? 'block' : 'none')};

  height: 29.2rem;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const Textarea = styled.textarea`
  overflow: hidden auto;

  width: calc(100% - 4rem);
  height: calc(100% - 4.6rem);
  margin: 2rem 0.6rem 2.6rem;

  border: none;
  outline: none;

  word-break: keep-all;

  ${({ theme }) => theme.fonts.body_medium_16};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
`;
