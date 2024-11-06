import { TooltipProps } from 'recharts';
import styled, { css } from 'styled-components';

// 리차트에서 제공되는 tooltip 사용
// number와 string은 각각 chartData 에서 주는데, name : string, value : number
const CustomToolTip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const successRate = payload[0].payload.successRate;

    return (
      <Container $successRate={successRate}>
        <TooltipContainer>{`${successRate}%`}</TooltipContainer>
      </Container>
    );
  }
};

export default CustomToolTip;

const Container = styled.div<{ $successRate: number }>`
  position: absolute;

  ${({ $successRate }) => {
    switch ($successRate) {
      case 15:
        return css`
          top: -1rem;
          left: 11rem;
        `;
      case 30:
        return css`
          top: 0.8rem;
          left: 12rem;
        `;
      case 45:
        return css`
          top: 10rem;
          left: 12.8rem;
        `;
      case 60:
        return css`
          top: 13rem;
          left: 10rem;
        `;
      case 75:
        return css`
          top: 9.8rem;
          left: -2rem;
        `;
      case 90:
        return css`
          top: 3rem;
          left: -2rem;
        `;
      case 100:
        return css`
          top: 14rem;
          left: 5rem;
        `;
    }
  }};
`;

const TooltipContainer = styled.div`
  padding: 0.6rem 1rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.detail_regular_12};
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.codrive_purple};
  color: ${({ theme }) => theme.colors.white};

  box-shadow: 0 0.4rem 0.8rem rgb(#0b0c0f4d / 30%);
`;
