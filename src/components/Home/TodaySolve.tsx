import { Cell, Label, Pie, PieChart } from 'recharts';
import styled from 'styled-components';
import { BtnInformation } from '../../assets';

interface CustomLabelProps {
  viewBox: {
    cx: number;
    cy: number;
  };
  upValue: string | number;
  downValue: string | number;
  isDefault: boolean;
}

const CustomLabel = ({
  viewBox,
  upValue,
  downValue,
  isDefault,
}: CustomLabelProps) => {
  const { cx, cy } = viewBox; // 중심 좌표
  const upValuePadding = isDefault ? 12 : 5;
  const downValuePadding = isDefault ? 12 : 30;
  return (
    <>
      <StyledText
        x={cx}
        y={cy - upValuePadding}
        dominantBaseline="middle"
        textAnchor="middle"
        $isDefault={isDefault}
      >
        {upValue}
      </StyledText>
      <StyledSubText
        x={cx}
        y={cy + downValuePadding}
        dominantBaseline="middle"
        textAnchor="middle"
        $isDefault={isDefault}
      >
        {downValue}
      </StyledSubText>
    </>
  );
};

const TodaySolve = () => {
  const maxProblems = 7; // 나중에 props로 받을 것
  const solvedProblems = 2; // 나중에 props로 받을 것

  const percentage =
    maxProblems && solvedProblems ? (solvedProblems / maxProblems) * 100 : 10;

  const chartData = [{ name: 'Solved', value: percentage }];

  console.log(chartData[0]);

  return (
    <Container>
      <TitleContainer>
        <Title>오늘 문제풀이</Title>
        <Notic>
          <BtnInformation />
          <Tooltip>
            목표설정은 우측 상단 <br />
            닉네임 {'>'} 내 프로필 설정 가능합니다.
          </Tooltip>
        </Notic>
      </TitleContainer>
      <Subtitle>
        달성 가능한 목표를 세우고, <br />
        매일 설천해보세요
      </Subtitle>

      <PieContainer>
        <PieChart width={168} height={168}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#BCFFCB" />
              <stop offset="100%" stopColor="#08FF3F" />
            </linearGradient>
          </defs>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={80}
            startAngle={90} // 12시 방향
            endAngle={-270} // 퍼센트에 맞춰 끝 각도를 설정
            paddingAngle={0} // 빈틈 없애기
            fill="#292A2F"
            stroke="none"
            cornerRadius={15}
          />
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={80}
            startAngle={90} // 12시 방향
            endAngle={90 - (360 * percentage) / 100} // 퍼센트에 맞춰 끝 각도를 설정
            paddingAngle={0} // 빈틈 없애기
            stroke="none"
            cornerRadius={15}
          >
            <Cell
              key={`cell-1`}
              fill={
                maxProblems && solvedProblems
                  ? 'url(#colorGradient)'
                  : '#B2B4BA'
              }
            />
            <Label
              content={
                <CustomLabel
                  upValue={
                    maxProblems && solvedProblems ? solvedProblems : '목표를'
                  }
                  downValue={
                    maxProblems && solvedProblems ? '문제' : '설정해주세요'
                  }
                  isDefault={maxProblems && solvedProblems ? false : true}
                  viewBox={{ cx: 0, cy: 0 }}
                />
              }
              position="center"
            />
          </Pie>
        </PieChart>
      </PieContainer>
    </Container>
  );
};

export default TodaySolve;

const Container = styled.div`
  width: 100%;
  max-width: 29.7rem;

  padding: 3.4rem 3.4rem 7.2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 10.1rem;
  align-items: center;

  margin-bottom: 2.2rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.title_bold_20}
  color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.p`
  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.gray300};
`;

const PieContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 3.1rem;
`;

const StyledText = styled.text<{ $isDefault?: boolean }>`
  fill: #fff;
  ${({ $isDefault, theme }) =>
    $isDefault ? theme.fonts.body_medium_16 : theme.fonts.title_bold_46};
`;

const StyledSubText = styled.text<{ $isDefault?: boolean }>`
  ${({ $isDefault, theme }) =>
    $isDefault ? theme.fonts.body_medium_16 : theme.fonts.body_ligth_16};
  fill: #fff;
`;

const Notic = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  margin-left: 2.5rem;

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  display: block;
  position: absolute;
  top: 170%;
  visibility: hidden;

  width: 22.8rem;
  height: auto;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.body_ligth_12};

  white-space: nowrap;

  opacity: 0;
  transform: translate(-2.5%);
  transition: opacity 0.3s ease-in-out;

  &::after {
    position: absolute;
    bottom: 100%;
    left: 5%;

    margin-left: -0.1rem;

    border-color: transparent transparent ${({ theme }) => theme.colors.gray600};
    border-width: 5px;
    border-style: solid;
    content: '';
  }
`;
