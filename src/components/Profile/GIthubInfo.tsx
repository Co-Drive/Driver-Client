import styled from 'styled-components';
import CommonInput from './../../common/CommonInput';

const GithubInfo = ({ github, handleChangeInputs }) => {
  return (
    <GithubInfoContainer>
      <GitHubTitle>깃허브 주소</GitHubTitle>
      <CommonInput
        category="github"
        value={github}
        handleChangeInputs={handleChangeInputs}
      />
    </GithubInfoContainer>
  );
};

const GithubInfoContainer = styled.section`
  display: flex;
  align-items: center;

  padding-bottom: 1.4rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};
`;

const GitHubTitle = styled.p`
  margin-right: 4.8rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default GithubInfo;
