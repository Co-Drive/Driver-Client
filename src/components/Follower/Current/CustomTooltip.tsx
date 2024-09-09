import { TooltipProps } from 'recharts';
import styled from 'styled-components';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (payload && payload.length && active) {
    const { name, count } = payload[0].payload;

    return (
      <>
        {name && (
          <ToolTipContainer $nameLength={name.length}>
            <Name $length={name.length}>{name}</Name>
            <ProblemNum>{`${count} 문제`}</ProblemNum>
          </ToolTipContainer>
        )}
      </>
    );
  }
};

export default CustomTooltip;

const ToolTipContainer = styled.div<{ $nameLength: number }>`
  display: flex;
  gap: 1.3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transform: ${({ $nameLength }) => {
    switch ($nameLength) {
      case 1:
        return `translate(-2.8rem, -8.5rem)`;
      case 2:
        return `translate(-3.3rem, -8.5rem)`;
      case 3:
        return `translate(-3.8rem, -8.5rem)`;
      case 4:
        return `translate(-4.5rem, -8.5rem)`;
      case 5:
        return `translate(-5.3rem, -8.5rem)`;
      case 6:
        return `translate(-5.8rem, -8.5rem)`;
      case 7:
        return `translate(-6.3rem, -8.5rem)`;
      case 8:
        return `translate(-5rem, -8.5rem)`;
      case 9:
        return `translate(-6.8rem, -8.5rem)`;
      case 10:
        return `translate(-6rem, -8.5rem)`;
    }
  }};
`;

const Name = styled.p<{ $length: number }>`
  padding: 1rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};

  &::after {
    position: absolute;
    top: 3.3rem;
    right: ${({ $length }) => {
      switch ($length) {
        case 1:
          return `calc(100% / 5)`;
        case 2:
          return `calc(100% / 4)`;
        case 3:
          return `calc(100% / 3)`;
        case 4:
          return `calc(100% / 3)`;
        case 5:
          return `calc(100% / 3)`;
        case 6:
          return `calc(100% / 2.6)`;
        case 7:
          return `calc(100% / 2.5)`;
        case 8:
          return `calc(100% / 2.7)`;
        case 9:
          return `calc(100% / 2.6)`;
        case 10:
          return `calc(100% / 2.5)`;
      }
    }};

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
