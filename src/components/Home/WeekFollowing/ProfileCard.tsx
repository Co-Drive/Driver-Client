import { Cell, Label, Pie, PieChart } from 'recharts';
import styled from 'styled-components';
import {
  CustomLabelProps,
  HomeProfileCardProps,
} from '../../../types/Week/HomeFollowerTypes';

const CustomLabel = ({ profileImg }: CustomLabelProps) => {
  return (
    <image
      href={profileImg}
      x={8}
      y={8}
      width={60}
      height={60}
      clipPath="circle(50%)"
    />
  );
};

const HomeProfileCard = ({ user }: HomeProfileCardProps) => {
  const { userId, successRate, profileImg, nickname, language } = user;

  let NickName = nickname;
  if (nickname.length > 7) {
    NickName = nickname.slice(0, 7) + '...';
  }

  const chartData = [{ name: 'Success', value: successRate }];

  return (
    <>
      <FollowerContainer key={userId}>
        <PieChart width={76} height={76}>
          <Pie
            dataKey="value"
            data={chartData}
            startAngle={90}
            endAngle={-270}
            innerRadius={33}
            outerRadius={38}
            paddingAngle={0}
            cornerRadius={15}
            fill="#494B53"
            stroke="none"
          ></Pie>
          <Pie
            data={chartData}
            dataKey="value"
            endAngle={90 - (360 * successRate) / 100}
            startAngle={90}
            outerRadius={38}
            innerRadius={33}
            paddingAngle={0}
            stroke="none"
            cornerRadius={15}
          >
            <Cell key="success" fill="#BF57FF" />
            <Label
              content={<CustomLabel profileImg={profileImg} />}
              position="center"
            />
          </Pie>
        </PieChart>
        <Text>{NickName}</Text>
        <LanguageText>#{language}</LanguageText>
      </FollowerContainer>
    </>
  );
};

export default HomeProfileCard;

const FollowerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2.4rem;

  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;
`;

const LanguageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.body_eng_regular_14};
`;
