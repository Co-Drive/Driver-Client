import styled from 'styled-components';

interface MemoProps {
  memo: string;
  handleChangeMemo: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// 디자인 확정된 후 전반적으로 마진/패딩/폰트 손 보기
const Memo = ({ memo, handleChangeMemo }: MemoProps) => {
  return (
    <MemoContainer>
      <TitleContainer>
        {/* 아이콘 들어올 자리 */}
        <Title>메모장</Title>
      </TitleContainer>

      <Textarea name="memo" value={memo} onChange={handleChangeMemo} />
    </MemoContainer>
  );
};

export default Memo;

const MemoContainer = styled.article`
  width: 92.6rem;
  height: 29.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  padding-top: 2.2rem;
  padding-left: 2.2rem;
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
