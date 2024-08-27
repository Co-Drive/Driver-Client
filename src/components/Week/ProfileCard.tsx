import { Cell, Pie, PieChart } from 'recharts';
import styled from 'styled-components';

interface HomeProfileCardProps {
  user: {
    userId: number;
    successRate: number;
    profileImg: string;
    nickname: string;
    language: string;
  };
}

const HomeProfileCard = ({ user }: HomeProfileCardProps) => {
  const { userId, successRate, profileImg, nickname, language } = user;

  const chartData = [
    { name: 'Success', value: successRate },
    // { name: 'Failure', value: 100 - successRate },
  ];

  return (
    <CardContainer>
      <PieChart width={110} height={110}>
        <Pie
          dataKey="value"
          data={chartData}
          startAngle={90}
          endAngle={-270}
          innerRadius={40}
          outerRadius={50}
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
          outerRadius={50}
          innerRadius={40}
          paddingAngle={0}
          stroke="none"
          cornerRadius={15}
        >
          <Cell key="success" fill="#BF57FF" />
        </Pie>
      </PieChart>
    </CardContainer>
  );
};

export default HomeProfileCard;

const CardContainer = styled.div`
  width: 38.6rem;
  max-width: 38.6rem;

  background-color: pink;
`;
