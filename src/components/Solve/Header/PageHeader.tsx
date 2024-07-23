import styled from 'styled-components';

const PageHeader = () => {
  return (
    <PageHeaderContainer>
      <Text>오늘 푼 문제 등록하기</Text>

      <BtnContainer>
        <Button type="submit">임시저장</Button>
        <Button type="submit">등록하기</Button>
      </BtnContainer>
    </PageHeaderContainer>
  );
};

export default PageHeader;

const PageHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: end;

  width: 100%;
`;

const Text = styled.p`
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.title_bold_26};
  color: ${({ theme }) => theme.colors.white};
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_ligth_16};
`;
