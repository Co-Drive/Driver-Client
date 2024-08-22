import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { FollowerCurrentGraphProps } from '../../../types/Follower/Current/currentType';

const FollowerCurrentGraph = ({ users }: FollowerCurrentGraphProps) => {
  const data = users.map((user) => {
    const { nickname, problemNum } = user;
    const height = problemNum * 10 + 10;

    return {
      name: nickname,
      problemNum: problemNum,
      height: height,
    };
  });

  const filledData = Array(15)
    .fill(0)
    .map((_, index) => {
      return data[index] || { name: '', problemNum: 0, height: 50 };
    });

  const barArr = data.length >= 15 ? data : filledData;

  const getColor = (problemNum: number) => {
    switch (problemNum) {
      case 0:
        return '#292A2F';
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
        width={data.length > 15 ? data.length * 40 : '100%'}
        height="100%"
      >
        <BarChart data={barArr} barSize={18} barCategoryGap={30} barGap={18}>
          <Bar
            dataKey="height"
            radius={[30, 30, 0, 0]}
            isAnimationActive={false}
          >
            {barArr.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.problemNum)} />
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

  min-width: 57rem;

  height: 100%;
  margin: 0 2.4rem;
`;
