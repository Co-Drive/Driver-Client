import { Cell, Label, Pie, PieChart } from 'recharts';
import styled from 'styled-components';

interface CustomLabelProps {
  viewBox: {
    cx: number;
    cy: number;
  };
  value: string | number;
}

const CustomLabel = ({ viewBox, value }: CustomLabelProps) => {
  const { cx, cy } = viewBox;

  return (
    <>
      <StyledText
        x={cx}
        y={cy - 10}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {value}
      </StyledText>
    </>
  );
};
const WeekRate = () => {
  const maxProblems = 5;
  const solvedProblems = 3;

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
          >
            <Label
              position="center"
              content={
                <CustomLabel
                  value={
                    maxProblems && solvedProblems
                      ? `${percentage.toFixed(0)}%`
                      : `${0}%`
                  }
                  viewBox={{ cx: 0, cy: 100 }}
                />
              }
            />
          </Pie>
          <Pie
            data={chartData}
            dataKey="value"
            startAngle={180}
            endAngle={endAngle}
            innerRadius={65}
            outerRadius={85}
            stroke="none"
            cornerRadius={10}
            paddingAngle={0}
            cy={96}
            cx="50%"
          >
            <Cell
              key="cell-1"
              fill={
                maxProblems && solvedProblems
                  ? 'url(#colorGradient)'
                  : '#B2B4BA'
              }
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <MessageContainer>
        <Message>축하해요!</Message>
        <Message>지난 주보다 {solvedProblems}문제 더 풀었어요!</Message>
      </MessageContainer>
    </Container>
  );
};

export default WeekRate;

const Container = styled.div`
  width: 45.4rem;
  padding: 3.6rem 3.4rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  max-width: 45.4rem;
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

  /* background-color: beige; */
`;

const StyledText = styled.text`
  fill: #fff;

  ${({ theme }) => theme.fonts.title_bold_32};
  background-color: pink;
`;

const Message = styled.p`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.fonts.title_semiBold_18};
  color: ${({ theme }) => theme.colors.white};
`;

const MessageContainer = styled.div`
  margin-top: 1.6rem;
`;
