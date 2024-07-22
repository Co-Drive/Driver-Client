import styled from 'styled-components';

const Memo = () => {
  return (
    <MemoContainer>
      <TitleContainer>
        {/* 아이콘 들어올 자리 */}
        <Title>메모장</Title>
      </TitleContainer>
    </MemoContainer>
  );
};

export default Memo;

const MemoContainer = styled.article`
  width: 92.6rem;
  height: 29.8rem;
  margin-top: 2.4rem;

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
