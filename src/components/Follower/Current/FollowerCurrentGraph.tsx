import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styled from 'styled-components';
import { FollowerCurrentGraphProps } from '../../../types/Follower/Current/currentType';
import CustomTooltip from './CustomTooltip';

const FollowerCurrentGraph = ({ users }: FollowerCurrentGraphProps) => {
  const data = users.map((user) => {
    const { nickname, count } = user;
    const height = count === 0 ? 10 : count * 10 + 10;

    return {
      name: nickname,
      count: count,
      height: height,
    };
  });

  const filledData = Array(15)
    .fill(0)
    .map((_, index) => {
      return data[index] || { name: '', count: -1, height: 10 };
    });

  const barArr = data.length >= 15 ? data : filledData;

  const getColor = (count: number) => {
    switch (count) {
      case -1:
        return '#292A2F';
      case 0:
        return '#646875';
      case 1:
      case 2:
      case 3:
        return '#DCFFE4';
      case 4:
      case 5:
      case 6:
        return '#B7FFC7';
      case 7:
      case 8:
      case 9:
        return '#7DFF99';
      case 10:
      case 11:
      case 12:
        return '#59FF7E';
      case 13:
        return '#08FF3F';
      default:
        return '#08FF3F';
    }
  };

  return (
    <GraphContainer>
      <ResponsiveContainer
        //   데이터의 길이가 15보다 클 경우, 그래프를 보여주는 컨테이너 너비를 늘림
        width={data.length > 15 ? data.length * 38 : '100%'}
        height="100%"
      >
        <BarChart data={barArr} barSize={18} barCategoryGap={30} barGap={18}>
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: 'transparent' }}
            allowEscapeViewBox={{ x: true, y: true }}
          />
          <Bar
            dataKey="height"
            radius={[30, 30, 0, 0]}
            isAnimationActive={false}
          >
            {barArr.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.count)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default FollowerCurrentGraph;

const GraphContainer = styled.div`
  overflow: auto hidden;

  height: 100%;
  padding: 7.6rem 2.4rem 0;

  min-width: 57rem;
`;
