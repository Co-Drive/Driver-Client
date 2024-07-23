import styled from 'styled-components';
import { CodeSpaceHeaderProps } from '../../../types/Solve/solveTypes';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

const CodeSpaceHeader = ({
  questionInfo,
  handleClickQuestionInfo,
}: CodeSpaceHeaderProps) => {
  const { title } = questionInfo;
  return (
    <Header>
      <HeaderTop
        title={title}
        handleClickQuestionInfo={handleClickQuestionInfo}
      />
      <HeaderBottom />
    </Header>
  );
};

export default CodeSpaceHeader;

const Header = styled.header`
  display: flex;
  gap: 2.2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 92.4rem;
`;
