import styled from 'styled-components';
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

  const isButtonEnabled = repositories.length > 0;

  return (
    <RepositoriesContainer>
      <TitleContainer>
        <Title>깃허브 리포지토리</Title>
        <Essential>*</Essential>
      </TitleContainer>
      <Info>코드라이브와 연동할 깃허브 리포지토리의 이름을 작성해주세요</Info>
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
    </RepositoriesContainer>
  );
};

export default Repositories;

const RepositoriesContainer = styled.div`
  max-height: 6.6rem;

  margin-bottom: 9.7rem;
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
`;

const Button = styled.button<{ $isEnabled: boolean }>`
  width: 6.4rem;
  height: 4.8rem;
  margin-left: 1rem;

  border: none;
  border-radius: 0.6rem;
  background-color: ${({ theme, $isEnabled }) =>
    $isEnabled ? theme.colors.codrive_green : theme.colors.gray500};
  color: ${({ theme, $isEnabled }) =>
    $isEnabled ? theme.colors.gray900 : theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;
