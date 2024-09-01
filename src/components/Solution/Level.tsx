import styled from 'styled-components';
import { BtnStarGraySmall, BtnStarPurpleSmall } from '../../assets';
import { LevelProps } from '../../types/Solution/solutionTypes';

const Level = ({ level }: LevelProps) => {
  const paintedStarArr = Array(level)
    .fill(1)
    .concat(Array(5 - level).fill(0));

  return (
    <LevelContainer>
      <LvText>난이도</LvText>
      <LvText>|</LvText>
      <LvStarContainer>
        {paintedStarArr.map((painted, idx) => {
          return (
            <li key={idx}>
              {painted ? <BtnStarPurpleSmall /> : <BtnStarGraySmall />}
            </li>
          );
        })}
      </LvStarContainer>
    </LevelContainer>
  );
};

export default Level;

const LevelContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;

  margin-left: 0.6rem;
`;

const LvText = styled.p`
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.gray300};
`;

const LvStarContainer = styled.ul`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;
