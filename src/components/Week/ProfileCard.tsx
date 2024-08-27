import { Cell, Label, Pie, PieChart } from 'recharts';
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

interface CustomLabelProps {
  profileImg: string;
}

const CustomLabel = ({ profileImg }: CustomLabelProps) => {
  return (
    <image
      href={profileImg}
      x={10}
      y={10}
      width={80}
      height={80}
      clipPath="circle(50%)" // 원형으로 자르기
      // key={userId}
    />
  );
};

const HomeProfileCard = ({ user }: HomeProfileCardProps) => {
  const { userId, successRate, profileImg, nickname, language } = user;

  let NickName = nickname;
  if (nickname.length > 7) {
    NickName = nickname.slice(0, 7) + '...';
  }

  const chartData = [
    { name: 'Success', value: successRate },
    // { name: 'Failure', value: 100 - successRate },
  ];

  return (
    <>
      <CardContainer>
        <FollowerContainer>
          <PieChart width={100} height={100}>
            <Pie
              dataKey="value"
              data={chartData}
              startAngle={90}
              endAngle={-270}
              innerRadius={30}
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
              <Label
                content={<CustomLabel profileImg={profileImg} />}
                position="center"
              />
            </Pie>
          </PieChart>
          <Text>
            <p>{NickName}</p>
          </Text>
          <LanguageText>#{language}</LanguageText>
        </FollowerContainer>
      </CardContainer>
    </>
  );
};

export default HomeProfileCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 38.6rem;
  padding: 0 1.7rem;
  margin-top: 4rem;

  background-color: pink;
  max-width: 38.6rem;
`;

const FollowerContainer = styled.div`
  background-color: cadetblue;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;
`;

const LanguageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.body_eng_regular_14};
`;
