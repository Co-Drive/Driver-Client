import { Cell, Pie, PieChart } from 'recharts';
import styled from 'styled-components';

interface CurrentGraphProps {
  percentage: number;
}

const COLORS = ['#BF57FF', '#494B53'];

const CurrentGraph = ({ percentage }: CurrentGraphProps) => {
  const process = [{ name: 'Progress', value: percentage }];

  const remaining = [{ name: 'Remaining', value: 100 - percentage }];

  return (
    <GraphContainer>
      <PieChart width={53} height={53}>
        <Pie
          data={remaining}
          cx="50%"
          cy="50%"
          cornerRadius={0}
          innerRadius={20}
          outerRadius={26}
          startAngle={-(60 + (percentage / 100) * 360)}
          endAngle={480}
          isAnimationActive={false}
          dataKey="value"
          stroke="none"
        >
          <Cell fill={COLORS[1]} />
        </Pie>
        <Pie
          data={process}
          cx="50%"
          cy="50%"
          cornerRadius={50}
          innerRadius={20}
          outerRadius={26}
          startAngle={90}
          endAngle={-(-90 + (percentage / 100) * 360)}
          isAnimationActive={false}
          dataKey="value"
          stroke="none"
        >
          <Cell fill={COLORS[0]} />
        </Pie>

        <Rate>{`${percentage}%`}</Rate>
      </PieChart>
    </GraphContainer>
  );
};

export default CurrentGraph;

const GraphContainer = styled.div`
  flex-grow: 1;

  margin-right: 10.4rem;
`;

const Rate = styled.p`
  padding: 1.8rem 1rem 1.8rem 1.1rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_14};
`;
