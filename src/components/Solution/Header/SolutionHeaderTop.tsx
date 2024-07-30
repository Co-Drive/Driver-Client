import styled from 'styled-components';
import { IcInformation, IcStarGray, IcStarGreen } from '../../../assets';

export interface SolutionHeaderTopProps {
  title: string;
  date: string;
  paintedStarArr: Array<number>;
}

const SolutionHeaderTop = ({
  title,
  date,
  paintedStarArr,
}: SolutionHeaderTopProps) => {
  return (
    <SolutionHeaderTopContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Date>{`작성일자 | ${date}`}</Date>
      </TitleContainer>

      <LevelContainer>
        <LevelDetailContainer>
          <LvText>난이도</LvText>
          <LvText>|</LvText>
          <LvStarContainer>
            {paintedStarArr.map((painted, idx) => {
              return (
                <li key={idx}>{painted ? <IcStarGreen /> : <IcStarGray />}</li>
              );
            })}
          </LvStarContainer>
        </LevelDetailContainer>

        <IcInformation />
      </LevelContainer>
    </SolutionHeaderTopContainer>
  );
};

export default SolutionHeaderTop;

const SolutionHeaderTopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 2.7rem;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_medium_14};
`;

const LevelContainer = styled.div`
  display: flex;
  gap: 7.4rem;
  justify-content: center;
  align-items: center;

  margin: 9.1rem 0 3rem;
`;

const LevelDetailContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
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
