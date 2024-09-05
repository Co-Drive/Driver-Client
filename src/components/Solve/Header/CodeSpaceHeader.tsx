import styled from 'styled-components';
import { CodeSpaceHeaderProps } from '../../../types/Solve/solveTypes';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';

const CodeSpaceHeader = ({
  isOpenOptions,
  questionInfo,
  handleClickQuestionInfo,
}: CodeSpaceHeaderProps) => {
  const { title, level } = questionInfo;
  return (
    <Header>
      <HeaderTop
        title={title}
        level={level}
        handleClickQuestionInfo={handleClickQuestionInfo}
      />
      <HeaderBottom
        isOpenOptions={isOpenOptions}
        questionInfo={questionInfo}
        handleClickQuestionInfo={handleClickQuestionInfo}
      />
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

  width: 100%;
`;
