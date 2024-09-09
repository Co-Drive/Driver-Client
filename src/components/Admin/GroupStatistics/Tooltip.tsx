import styled from 'styled-components';

interface TooltipProps {
  approvedCount: number;
  requestedCount: number;
}

const Tooltip = ({ approvedCount, requestedCount }: TooltipProps) => {
  return (
    <TooltipContainer>
      <Contents>
        <Category>승인</Category>
        <Num>{approvedCount}</Num>
        <Text>명</Text>
      </Contents>
      <Contents>
        <Category>신청</Category>
        <Num>{requestedCount}</Num>
        <Text>명</Text>
      </Contents>
    </TooltipContainer>
  );
};

export default Tooltip;

const TooltipContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  position: absolute;
  top: 2.8rem;
  visibility: hidden;

  max-width: 10.4rem;

  width: fit-content;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.gray600};

  transform: translate(-2.5%);
  transition: opacity 0.3s ease-in-out;

  &::after {
    position: absolute;
    right: 0.8rem;
    bottom: 100%;

    border-color: transparent transparent ${({ theme }) => theme.colors.gray600};
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
`;

const Category = styled.p`
  padding-right: 0.8rem;

  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.fonts.title_regular_14};
  white-space: nowrap;
`;

const Num = styled.p`
  margin-left: 0.8rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const Text = styled.p`
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_regular_14};
`;
