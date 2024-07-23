import { useState } from 'react';
import styled from 'styled-components';
import { HeaderTopProps } from '../../../types/Solve/solveTypes';
import Gray from './Gray';
import Green from './Green';

const HeaderTop = ({ title, handleClickQuestionInfo }: HeaderTopProps) => {
  const [selectedStar, setSelectedStar] = useState(Array(5).fill(0));

  const handleClickIc = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    handleClickQuestionInfo({ category: 'level', e });
    setSelectedStar(
      Array(value)
        .fill(1)
        .concat(Array(5 - value).fill(0))
    );
  };

  return (
    <HeaderTopContainer>
      <TitleContainer>
        <TitleInput
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => {
            handleClickQuestionInfo({ category: 'title', e });
          }}
        />
      </TitleContainer>

      <LevelContainer>
        <LevelDetailContainer>
          <LvText>난이도</LvText>
          <LvText>|</LvText>
          <LvStarContainer>
            {selectedStar.map((selected, idx) => {
              return (
                <LvIcContainer
                  key={idx}
                  value={idx + 1}
                  onClick={(e) => handleClickIc(e)}
                >
                  {/* 난이도 아이콘으로 대체 예정 */}
                  {selected ? <Green /> : <Gray />}
                </LvIcContainer>
              );
            })}
          </LvStarContainer>
        </LevelDetailContainer>

        <InfoIcContainer>
          {/* information 아이콘 들어갈 예정 */}
        </InfoIcContainer>
      </LevelContainer>
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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  width: 60.9rem;
  padding-bottom: 1.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const TitleInput = styled.input`
  overflow: hidden;

  width: 100%;

  border: none;
  outline: none;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray100};

  ${({ theme }) => theme.fonts.title_medium_20};
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;

  &::placeholder {
    ${({ theme }) => theme.colors.gray300};
  }
`;

const LevelContainer = styled.div`
  display: flex;
  gap: 7.4rem;
  justify-content: center;
  align-items: center;

  padding-bottom: 1.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const LevelDetailContainer = styled.div`
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
