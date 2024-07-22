import { useState } from 'react';
import styled from 'styled-components';
import Gray from './Gray';
import Green from './Green';

interface HeaderTopProps {
  handleClickLv: (clickedLv: number) => void;
}

const HeaderTop = ({ handleClickLv }: HeaderTopProps) => {
  const [paintedStar, setPaintedStar] = useState(Array(5).fill(0));

  const handleClickIc = (clickedLv: number) => {
    handleClickLv(clickedLv);
    setPaintedStar(
      Array(clickedLv)
        .fill(1)
        .concat(Array(5 - clickedLv).fill(0))
    );
  };

  return (
    <HeaderTopContainer>
      <TitleContainer>
        <Title>멀리 뛰기</Title>
      </TitleContainer>

      <RightContainer>
        <LevelContainer>
          <LvText>난이도</LvText>
          <LvText>|</LvText>
          <LvStarContainer>
            {paintedStar.map((star, idx) => {
              return (
                <LvIcContainer key={idx} onClick={() => handleClickIc(idx + 1)}>
                  {/* 난이도 아이콘으로 대체 예정 */}
                  {star ? <Green /> : <Gray />}
                </LvIcContainer>
              );
            })}
          </LvStarContainer>
        </LevelContainer>

        <InfoIcContainer>
          {/* information 아이콘 들어갈 예정 */}
        </InfoIcContainer>
      </RightContainer>
    </HeaderTopContainer>
  );
};

export default HeaderTop;

const HeaderTopContainer = styled.section`
  display: flex;
  gap: 1.8rem;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

// 디자인 완성 후 변경 예정 (아마 input으로 바뀔듯)
const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  width: 60.9rem;
  padding-bottom: 1.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_medium_20};
`;

const RightContainer = styled.div`
  display: flex;
  gap: 7.4rem;
  justify-content: center;
  align-items: center;

  padding-bottom: 1.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const LevelContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
`;

const LvText = styled.p`
  ${({ theme }) => theme.fonts.body_medium_20};
  color: ${({ theme }) => theme.colors.gray300};
`;

const LvStarContainer = styled.ul`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;

const LvIcContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoIcContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
