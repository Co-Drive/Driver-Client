import { useState } from 'react';
import styled, { css } from 'styled-components';
import { IcCancelSmallWhite } from '../../assets';
import CommonInput from '../../common/CommonInput';
interface RepositoriesProps {
  repositories: string;
  changeRepositories: {
    isExistRepositories: boolean;
    isClickedCheckRepositoriesBtn: boolean;
  };
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRepositoriesCheck: () => void;
}

const Repositories = ({
  repositories,
  changeRepositories,
  handleChangeInputs,
  handleRepositoriesCheck,
}: RepositoriesProps) => {
  const { isExistRepositories, isClickedCheckRepositoriesBtn } =
    changeRepositories;
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  const isButtonEnabled = repositories.length > 0;

  const handleTooltipClose = () => setIsTooltipVisible(false);
  return (
    <RepositoriesContainer>
      <TitleContainer>
        <Title>깃허브 리포지토리</Title>
        <Essential>*</Essential>
      </TitleContainer>
      <Info>코드라이브와 연동할 깃허브 리포지토리의 풀네임을 작성해주세요</Info>
      <InputWrapper>
        <CommonInput
          category="repositories"
          value={repositories}
          isClickedCheckRepositoriesBtn={isClickedCheckRepositoriesBtn}
          isExitedRepositories={isExistRepositories}
          handleChangeInputs={handleChangeInputs}
        />
        <Button
          type="button"
          onClick={handleRepositoriesCheck}
          disabled={!isButtonEnabled}
          $isEnabled={isButtonEnabled}
        >
          검색
        </Button>
      </InputWrapper>
      <TooltipInfo $isVisible={isTooltipVisible}>
        <TextContainer>
          <LineText>검색버튼을 눌러 유효한</LineText>
          <LineText>리포지토리인지 확인해주세요</LineText>
        </TextContainer>
        <TooltipClose type="button" onClick={handleTooltipClose}>
          <IcCancelSmallWhite />
        </TooltipClose>
      </TooltipInfo>
    </RepositoriesContainer>
  );
};

export default Repositories;

const RepositoriesContainer = styled.div`
  margin-bottom: 9.7rem;
  max-height: 6.6rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.6rem;
  margin-left: 0.2rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_20};
`;

const Essential = styled.span`
  margin-left: 0.6rem;

  ${({ theme }) => theme.fonts.title_medium_20};
  color: ${({ theme }) => theme.colors.codrive_purple};
`;

const Info = styled.span`
  display: block;

  margin-bottom: 1.6rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;

const Button = styled.button<{ $isEnabled: boolean }>`
  width: 6.4rem;
  height: 4.8rem;
  margin-left: 1rem;

  border: none;
  border-radius: 0.6rem;
  ${({ theme, $isEnabled }) =>
    $isEnabled
      ? css`
          background-color: ${theme.colors.codrive_green};
          color: ${theme.colors.gray900};
        `
      : css`
          background-color: ${theme.colors.gray500};
          color: ${theme.colors.white};
        `};
`;

const TooltipInfo = styled.div<{ $isVisible: boolean }>`
  display: flex;
  position: absolute;
  top: 47.2%;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};

  padding: 0.8rem 0.6rem 0.8rem 1rem;
  margin-left: 30.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray400};

  white-space: nowrap;
  transform: translate(8px, -50%);

  /* 화살표 스타일 */
  &::after {
    position: absolute;
    top: 51%;
    left: -1.2rem;

    border-color: transparent rgb(100 104 117 / 100%) transparent transparent;
    border-width: 0.7rem;
    border-style: solid;
    content: '';
    transform: translateY(-50%);
  }
`;

const TooltipClose = styled.button`
  display: flex;
`;

const TextContainer = styled.div`
  display: grid;
  row-gap: 0.4rem;
`;

const LineText = styled.p`
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.body_ligth_12};
`;
