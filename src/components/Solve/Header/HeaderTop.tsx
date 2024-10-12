import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IcInformation, IcStarGray, IcStarGreen } from '../../../assets';
import { HeaderTopProps } from '../../../types/Solve/solveTypes';
import SolveToolTip from './SolveToolTip';

const HeaderTop = ({
  title,
  level,
  handleClickQuestionInfo,
}: HeaderTopProps) => {
  const [selectedStar, setSelectedStar] = useState(Array(5).fill(0));
  const [modalOn, setModalOn] = useState(false);

  const handleClickIc = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    handleClickQuestionInfo({ category: 'level', e });
    setSelectedStar(
      Array(value)
        .fill(1)
        .concat(Array(5 - value).fill(0))
    );
  };
  const handleOpenModal = () => {
    setModalOn(true);
  };

  const handleCloseModal = () => {
    setModalOn(false);
  };

  useEffect(() => {
    setSelectedStar(
      Array(level)
        .fill(1)
        .concat(Array(5 - level).fill(0))
    );
  }, [level]);

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
          <LvStarContainer>
            {selectedStar.map((selected, idx) => {
              return (
                <li key={idx} value={idx + 1} onClick={(e) => handleClickIc(e)}>
                  {selected ? <IcStarGreen /> : <IcStarGray />}
                </li>
              );
            })}
          </LvStarContainer>
        </LevelDetailContainer>
        <button onClick={handleOpenModal}>
          <IcInformation />
        </button>
        {modalOn && (
          <SolveToolTip handleClose={handleCloseModal} isOpen={modalOn} />
        )}
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
  gap: 7rem;
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
  padding-right: 1.2rem;

  border-right: 0.1rem solid ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.gray300};
`;

const LvStarContainer = styled.ul`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;
