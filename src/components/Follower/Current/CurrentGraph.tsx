import { Cell, Pie, PieChart } from 'recharts';
import styled from 'styled-components';
import { GRAPH_COLORS } from '../../../constants/Follower/currentConst';
import { CurrentGraphProps } from '../../../types/Follower/Current/currentType';

const CurrentGraph = ({ percentage }: CurrentGraphProps) => {
  const process = [{ name: 'Progress', value: percentage }];

  const remaining = [{ name: 'Remaining', value: 100 - percentage }];

  return (
    <GraphContainer>
      <PieChart width={55} height={55}>
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
          <Cell fill={GRAPH_COLORS[1]} />
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
          <Cell fill={GRAPH_COLORS[0]} />
        </Pie>
      </PieChart>
      <Rate>{`${percentage}%`}</Rate>
    </GraphContainer>
  );
};

export default CurrentGraph;

const GraphContainer = styled.div`
  flex-grow: 1;
  position: relative;

  width: 5.5rem;
  height: 5.5rem;
  margin-right: 10.4rem;
`;

const Rate = styled.p`
  position: absolute;
  top: 0;

  width: 5.5rem;
  padding: 1.8rem 1rem 1.8rem 1.1rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_14};
  text-align: center;
`;
