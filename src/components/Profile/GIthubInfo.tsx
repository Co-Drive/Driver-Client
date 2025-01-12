import styled from 'styled-components';
import { GithubInfoProps } from '../../types/Profile/ProfileType';
import CommonInput from './../../common/CommonInput';

const GithubInfo = ({ github, handleChangeInputs }: GithubInfoProps) => {
  return (
    <GithubInfoContainer>
      <GitHubTitle>깃허브 주소</GitHubTitle>
      <CommonInput
        category="github"
        value={github ? github : ''}
        handleChangeInputs={handleChangeInputs}
      />
    </GithubInfoContainer>
  );
};

const GithubInfoContainer = styled.section`
  display: flex;
  align-items: center;

  padding: 3.2rem 0 1.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray700};
`;

const GitHubTitle = styled.h2`
  margin-right: 4.9rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default GithubInfo;
