import { Cell, Pie, PieChart } from 'recharts';
import styled from 'styled-components';
import { GRAPH_COLORS } from '../../../constants/Follower/currentConst';
import { WeeklyCurrentGraphProps } from '../../../types/Follower/Current/currentType';

const WeeklyCurrentGraph = ({ percentage }: WeeklyCurrentGraphProps) => {
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
          innerRadius={22}
          outerRadius={27}
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
          innerRadius={22}
          outerRadius={27}
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

export default WeeklyCurrentGraph;

const GraphContainer = styled.div`
  position: relative;

  width: 5.5rem;
  height: 5.5rem;
`;

const Rate = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;

  width: 5.5rem;
  padding: 1.8rem 1rem 1.8rem 1.1rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_14};
`;
