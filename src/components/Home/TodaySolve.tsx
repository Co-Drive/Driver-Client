import { useEffect, useState } from 'react';
import { Cell, Label, Pie, PieChart } from 'recharts';
import styled from 'styled-components';
import { BtnInformation } from '../../assets';
import useGetUserAchieve from '../../libs/hooks/Home/useGetUserAchieve';
import { TodaySolveProps } from '../../types/Home/todaySolveType';

const CustomLabel = ({
  viewBox,
  upValue,
  downValue,
  isDefault,
}: TodaySolveProps) => {
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
  const [stats, setStats] = useState({
    goal: 0,
    todayCount: 0,
  });

  const data = useGetUserAchieve();
  useEffect(() => {
    if (data) {
      const { goal, todayCount } = data.data;
      setStats({
        goal: goal,
        todayCount: todayCount,
      });
    }
  }, [data]);

  const { goal, todayCount } = stats;
  const percentage = goal && todayCount ? (todayCount / goal) * 100 : 0.01;

  const chartData = [{ name: 'Solved', value: percentage }];

  return (
    <Container>
      <TitleContainer>
        <Title>오늘 문제풀이</Title>
        <Notic>
          <BtnInformation />
          <Tooltip>
            목표설정은 우측 상단 닉네임 {'>'} 내 프로필
            <ToolTipNextLine>{'>'} 나의 목표에서 설정 가능해요</ToolTipNextLine>
          </Tooltip>
        </Notic>
      </TitleContainer>
      <Subtitle>
        달성 가능한 목표를 세우고,
        <SubTitleNextLine>매일 실천해보세요</SubTitleNextLine>
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
              fill={goal && todayCount ? 'url(#colorGradient)' : '#B2B4BA'}
            />
            <Label
              content={
                <CustomLabel
                  upValue={goal ? todayCount : '목표를'}
                  downValue={goal ? '문제' : '설정해주세요'}
                  isDefault={goal ? false : true}
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

  height: 41rem;
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

  white-space: nowrap;
`;

const ToolTipNextLine = styled.span`
  display: flex;
  align-items: center;

  margin-top: 0.4rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_12};
`;

const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.gray300};
`;

const SubTitleNextLine = styled.p`
  display: flex;

  margin-top: 0.2rem;

  ${({ theme }) => theme.fonts.body_ligth_16};
  color: ${({ theme }) => theme.colors.gray300};
`;

const PieContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  margin-top: 3.1rem;

  & :focus {
    outline: none;
  }
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
  cursor: pointer;

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

  height: 5.5rem;
  padding: 1.2rem 1.1rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_12};

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
