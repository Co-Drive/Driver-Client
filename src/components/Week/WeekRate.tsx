import { Pie, PieChart } from 'recharts';
import styled from 'styled-components';

const WeekRate = () => {
  const chartData = [{ name: 'Solved', value: 90 }];
  return (
    <Container>
      <Header>주간 성과율</Header>
      <ChartContainer>
        <PieChart width={227} height={113}>
          <Pie
            dataKey="value"
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={65}
            outerRadius={85}
            stroke="none"
            cornerRadius={10}
            paddingAngle={0}
            cx="50%"
            cy={96}
          ></Pie>
        </PieChart>
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

  /* width: 22.8rem; */
`;
