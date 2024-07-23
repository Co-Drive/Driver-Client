import styled from 'styled-components';
import { IcArrowTopGray, IcMemoWhite } from '../../assets';
import { MemoProps } from '../../types/Solve/solveTypes';

const Memo = ({ stringId, memo, handleChangeMemo }: MemoProps) => {
  return (
    <MemoContainer>
      <TopBar>
        <TitleContainer>
          <IcMemoWhite />
          <Title>메모장</Title>
        </TitleContainer>

        <IcArrowTopGray />
      </TopBar>

      <Textarea
        id={stringId}
        name="memo"
        value={memo}
        onChange={handleChangeMemo}
      />
    </MemoContainer>
  );
};

export default Memo;

const MemoContainer = styled.article`
  width: 100%;
  padding: 2.4rem 2.2rem 2.6rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 0.4rem 2rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.title_semiBold_18};
  color: ${({ theme }) => theme.colors.white};
`;

const Textarea = styled.textarea`
  overflow: hidden auto;

  width: calc(100% - 4rem);
  height: 21.4rem;
  margin: 2rem;

  border: none;
  outline: none;

  ${({ theme }) => theme.fonts.body_medium_16};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
`;
