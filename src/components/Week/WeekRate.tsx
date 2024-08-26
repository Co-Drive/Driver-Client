import { Cell, Pie, PieChart } from 'recharts';
import styled from 'styled-components';

const WeekRate = () => {
  const maxProblems = 7;
  const solvedProblems = 6;

  const percentage =
    maxProblems && solvedProblems ? (solvedProblems / maxProblems) * 100 : 10;
  const chartData = [{ name: 'Solved', value: percentage }];
  const endAngle = 180 - (percentage / 100) * 180;
  return (
    <Container>
      <Header>주간 성과율</Header>
      <ChartContainer>
        <PieChart width={227} height={113}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="100%" stopColor="#CA73FF" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <Pie
            data={chartData}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            innerRadius={65}
            outerRadius={85}
            stroke="none"
            cornerRadius={10}
            paddingAngle={0} // 빈틈 없애기
            cy={96}
            cx="50%"
            fill="#34363C"
          />
          <Pie
            dataKey="value"
            data={chartData}
            startAngle={180}
            endAngle={endAngle}
            innerRadius={65}
            outerRadius={85}
            stroke="none"
            cornerRadius={10}
            paddingAngle={0}
            cx="50%"
            cy={96}
          >
            <Cell
              key={`cell-1`}
              fill={
                maxProblems && solvedProblems
                  ? 'url(#colorGradient)'
                  : '#B2B4BA'
              }
            />
          </Pie>
        </PieChart>

        {/* <p>축하해요! 지난 주보다 1문제 더 풀었어요!</p> */}
      </ChartContainer>
    </Container>
  );
};

export default WeekRate;

const Container = styled.div`
  /* display: flex; */

  /* flex-direction: column; */

  width: 45.4rem;
  max-width: 45.4rem;

  padding: 3.6rem 3.4rem;

  background-color: pink;
`;

const Header = styled.header`
  ${({ theme }) => theme.fonts.title_bold_20};
  color: ${({ theme }) => theme.colors.white};
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: beige;
`;
