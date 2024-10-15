import styled from 'styled-components';
import CommonInput from '../../common/CommonInput';
import { RepositoriesInfoProps } from '../../types/Profile/ProfileType';

const RepositoriesInfo = ({
  repositories,
  changeRepositories,
  handleChangeInputs,
  handleRepositoriesCheck,
}: RepositoriesInfoProps) => {
  const { isExistRepositories, isClickedCheckRepositoriesBtn } =
    changeRepositories;

  return (
    <RepositoriesContainer>
      <NicknameTitle>깃허브</NicknameTitle>
      <NicknameTitle>리포지토리</NicknameTitle>
      <InputWrapper>
        <CommonInput
          category="repositories"
          value={repositories}
          isClickedCheckRepositoriesBtn={isClickedCheckRepositoriesBtn}
          isExistRepositories={isExistRepositories}
          handleChangeInputs={handleChangeInputs}
        />
        <Button type="button" onClick={handleRepositoriesCheck}>
          검색
        </Button>
      </InputWrapper>
    </RepositoriesContainer>
  );
};

const RepositoriesContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 7.7rem;
  padding-bottom: 2.4rem;
  margin-bottom: 3.1rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;

const NicknameTitle = styled.h2`
  margin-right: 8rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
`;

const InputWrapper = styled.div`
  display: flex;

  height: 5.2rem;
`;

const Button = styled.button`
  width: 6.4rem;
  height: 4.8rem;
  padding: 1.5rem 1.8rem 1.4rem;
  margin-left: 1rem;

  border: none;
  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default RepositoriesInfo;