import { TooltipProps } from 'recharts';
import styled from 'styled-components';

// 리차트에서 제공되는 tooltip 사용
// number와 string은 각각 chartData 에서 주는데, name : string, value : number
const CustomToolTip = ({
  active,
  payload,
  coordinate,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length && coordinate) {
    const { x = 0, y = 0 } = coordinate;
    const tooltipWidth = 47; // 툴팁 너비
    const tooltipHeight = 26; // 툴팁 높이
    const successRate = payload[0].payload.successRate;

    return (
      <Container
        style={{
          transform: `translate(${x - tooltipWidth / 2}px, ${
            y - tooltipHeight / 2
          }px)`,
        }}
      >
        <TooltipContainer>{`${successRate}%`}</TooltipContainer>
      </Container>
    );
  }
};

export default CustomToolTip;

const Container = styled.div`
  position: absolute;
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
