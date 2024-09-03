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

  // nickname과 language의 존재 여부에 따라 기본값 설정
  let NickName = nickname;
  if (nickname.length > 7) {
    NickName = nickname.slice(0, 7) + '...';
  }

  const Language = language && language.length > 0 ? language : '사용언어';

  const chartData = [
    { name: 'Success', value: successRate === 0 ? 10 : successRate },
  ];

  const endAngle = 90 - (360 * chartData[0].value) / 100;

  return (
    <>
      <FollowerContainer key={userId}>
        {user ? (
          <PieContainer>
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
              >
                <Label
                  content={<CustomLabel profileImg={profileImg} />}
                  position="center"
                />
              </Pie>
              <Pie
                data={chartData}
                dataKey="value"
                endAngle={endAngle}
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
            <LanguageText>#{Language}</LanguageText>
          </PieContainer>
        ) : (
          <PieContainer>
            <PieChart width={76} height={76}>
              <Pie
                data={[{ name: 'Gray Circle', value: 100 }]}
                dataKey="value"
                startAngle={0}
                endAngle={360}
                outerRadius={30}
                fill="#292A2F"
                stroke="none"
              />
              <Pie
                dataKey="value"
                data={[{ name: 'Empty', value: 100 }]} // 빈 차트를 위한 데이터
                startAngle={90}
                endAngle={-270}
                innerRadius={33}
                outerRadius={38}
                paddingAngle={0}
                cornerRadius={15}
                fill="#494B53"
                stroke="none"
              />
            </PieChart>
            <Text>기본사용자</Text>
            <LanguageText>#사용언어</LanguageText>
          </PieContainer>
        )}
      </FollowerContainer>
    </>
  );
};

export default HomeProfileCard;

const FollowerContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-direction: row;
`;

const PieContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column; /* Pie와 텍스트를 세로로 배치 */
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
