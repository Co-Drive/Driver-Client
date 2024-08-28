import { Cell, Label, Pie, PieChart } from 'recharts';
import styled from 'styled-components';
import { WeekRateProps } from '../../types/Week/weekRateTypes';

const CustomLabel = ({ viewBox, value }: WeekRateProps) => {
  const { cx, cy } = viewBox;

  return (
    <>
      <StyledText
        x={cx}
        y={cy - 20}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {value}
      </StyledText>
    </>
  );
};
const WeekRate = () => {
  const maxProblems = 0;
  const solvedProblems = 0;

  const percentage =
    maxProblems && solvedProblems ? (solvedProblems / maxProblems) * 100 : 10;
  const chartData = [{ name: 'Solved', value: percentage }];
  const endAngle = 180 - (percentage / 100) * 180;
  return (
    <Container>
      <Header>주간 성과율</Header>
      <ChartContainer>
        <PieChart width={300} height={140}>
          <defs>
            <linearGradient id="linear" x1="0" y1="0" x2="1" y2="1">
              <stop offset="100%" stopColor="#CA73FF" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <Pie
            data={chartData}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            innerRadius={95}
            outerRadius={115}
            stroke="none"
            cornerRadius={10}
            paddingAngle={0}
            cy={126}
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
            innerRadius={95}
            outerRadius={115}
            stroke="none"
            cornerRadius={10}
            paddingAngle={0}
            cy={126}
            cx="50%"
          >
            <Cell key="cell-1" fill={'url(#linear)'} />
          </Pie>
        </PieChart>
      </ChartContainer>
      <MessageContainer>
        {maxProblems && solvedProblems ? (
          <>
            <Message>축하해요!</Message>
            <Message>지난 주보다 {solvedProblems}문제 더 풀었어요!</Message>
          </>
        ) : (
          <>
            <Message>이번 주에 푼 문제가 없어요</Message>
            <Message>문제 풀이 인증하고 그래프를 채워보세요</Message>
          </>
        )}
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
  margin-top: 0.3rem;
`;
