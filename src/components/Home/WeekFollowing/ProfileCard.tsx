import { useNavigate } from 'react-router-dom';
import { Cell, Label, Pie, PieChart } from 'recharts';
import styled from 'styled-components';
import {
  CustomLabelProps,
  HomeProfileCardProps,
} from '../../../types/Week/HomeFollowerTypes';

const HomeProfileCard = ({ user }: HomeProfileCardProps) => {
  const { userId, successRate, profileImg, nickname, language } = user;
  const navigate = useNavigate();

  const handleClickBtn = () => {
    navigate(`/follower/${userId}`);
  };

  const CustomLabel = ({ profileImg }: CustomLabelProps) => {
    return (
      <image
        onClick={handleClickBtn}
        href={profileImg}
        x={8}
        y={8}
        width={60}
        height={60}
        clipPath="circle(50%)"
        cursor="pointer"
      />
    );
  };

  // nickname과 language의 존재 여부에 따라 기본값 설정
  let NickName = nickname;
  if (nickname.length > 7) {
    NickName = nickname.slice(0, 7) + '...';
  }

  const Language = language && language.length > 0 ? language : '사용언어';

  const chartData = [
    { name: 'Success', value: successRate === 0 ? 0.01 : successRate },
  ];

  const endAngle = 90 - (360 * chartData[0].value) / 100;

  return (
    <FollowerContainer key={userId}>
      {nickname === '기본사용자' && language === '사용언어' ? (
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
              data={[{ name: 'Empty', value: 100 }]}
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
          <Text $isBasic={true}>기본사용자</Text>
          <LanguageText $isBasic={true}>#사용언어</LanguageText>
        </PieContainer>
      ) : (
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
          <Text onClick={handleClickBtn}>{NickName}</Text>
          <LanguageText>#{Language}</LanguageText>
        </PieContainer>
      )}
    </FollowerContainer>
  );
};

export default HomeProfileCard;

const FollowerContainer = styled.div`
  width: 11.5rem;
  max-width: 11.5rem;

  & :focus {
    outline: none;
  }
`;

const PieContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div<{ $isBasic?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-top: 2.4rem;

  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ $isBasic, theme }) =>
    $isBasic ? theme.colors.gray600 : theme.colors.white};

  white-space: nowrap;
`;

const LanguageText = styled.div<{ $isBasic?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 0.8rem;

  color: ${({ theme, $isBasic }) =>
    $isBasic ? theme.colors.gray700 : theme.colors.gray400};
  ${({ theme }) => theme.fonts.body_eng_regular_14};
`;
