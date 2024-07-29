import styled from 'styled-components';
import {
  BtnHeart,
  BtnShare,
  IcInformation,
  IcStarGray,
  IcStarGreen,
} from '../../../assets';

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
      <Date>{`작성일자 | ${date}`}</Date>
      <TopContainer>
        <Title>{title}</Title>

        <BtnIcContainer>
          <BtnHeart />
          <BtnShare />
        </BtnIcContainer>
      </TopContainer>

      <BottomContainer>
        <LevelContainer>
          <LevelDetailContainer>
            <LvText>난이도</LvText>
            <LvText>|</LvText>
            <LvStarContainer>
              {paintedStarArr.map((painted, idx) => {
                return (
                  <li key={idx}>
                    {painted ? <IcStarGreen /> : <IcStarGray />}
                  </li>
                );
              })}
            </LvStarContainer>
          </LevelDetailContainer>

          <IcInformation />
        </LevelContainer>

        <BtnContainer>
          <RemoveBtn type="button">삭제하기</RemoveBtn>
          <ModifyBtn type="button">수정하기</ModifyBtn>
        </BtnContainer>
      </BottomContainer>
    </SolutionHeaderTopContainer>
  );
};

export default SolutionHeaderTop;

const SolutionHeaderTopContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin-bottom: 2.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const Date = styled.p`
  margin-bottom: 3.4rem;

  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_medium_14};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const BtnIcContainer = styled.div`
  display: flex;
  gap: 1.8rem;

  margin-right: 1.2rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 1.8rem 0 2.7rem 0.4rem;
`;

const LevelContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: center;
  align-items: center;
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

const BtnContainer = styled.div`
  display: flex;
  gap: 1.8rem;
`;

const commonBtnStyle = styled.button`
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const RemoveBtn = styled(commonBtnStyle)`
  background-color: ${({ theme }) => theme.colors.gray600};
`;

const ModifyBtn = styled(commonBtnStyle)`
  background-color: ${({ theme }) => theme.colors.gray500};
`;
