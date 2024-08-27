import { TooltipProps } from 'recharts';
import styled from 'styled-components';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (payload && payload.length && active) {
    const { name, count } = payload[0].payload;

    return (
      <>
        {name && (
          <ToolTipContainer>
            <Name>{name}</Name>
            <ProblemNum>{`${count} 문제`}</ProblemNum>
          </ToolTipContainer>
        )}
      </>
    );
  }
};

export default CustomTooltip;

const ToolTipContainer = styled.div`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transform: translate(-4rem, -8.5rem);
`;

const Name = styled.p`
  position: relative;

  padding: 1rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};

  &::after {
    position: absolute;
    top: 3.6rem;
    left: calc(100% / 3);

    width: 0;

    border-top: 1rem solid ${({ theme }) => theme.colors.gray500};
    border-right: 1rem solid transparent;
    border-left: 1rem solid transparent;

    content: '';
  }
`;

const ProblemNum = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;
