import styled from 'styled-components';
import CommonInput from '../../common/CommonInput';
import { GithubProps } from '../../types/Register/RegisterType';

const Github = ({ github, handleChangeInputs }: GithubProps) => {
  return (
    <GithubContainer>
      <Title>깃허브 홈</Title>
      <Info>깃허브 아이디를 입력해주세요</Info>
      <CommonInput
        category="github"
        value={github}
        handleChangeInputs={handleChangeInputs}
      />
    </GithubContainer>
  );
};

export default Github;

const GithubContainer = styled.div`
  margin-bottom: 5.4rem;
`;

const Title = styled.h2`
  margin-bottom: 0.6rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const Info = styled.span`
  display: block;

  margin-bottom: 1.6rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;
