import styled from 'styled-components';
import { CodeSpaceProps } from '../../types/Solve/solveTypes';
import CodeEditor from './CodeEditor';
import CodeSpaceHeader from './Header/CodeSpaceHeader';
import Memo from './Memo';

const CodeSpace = ({
  ideItems,
  questionInfo,
  handleClickQuestionInfo,
  handleClickDeleteBtn,
  handleChangeCode,
  handleChangeMemo,
}: CodeSpaceProps) => {
  return (
    <CodeSpaceContainer>
      <CodeSpaceHeader
        handleClickQuestionInfo={handleClickQuestionInfo}
        questionInfo={questionInfo}
      />
      {ideItems.map((item) => {
        return (
          <ContentsContainer key={item.id}>
            {item.id > 0 && (
              <DeleteBtn
                type="button"
                onClick={() => handleClickDeleteBtn(item.id)}
              >
                삭제
              </DeleteBtn>
            )}
            <CodeEditor
              stringId={item.id.toString()}
              code={item.code}
              handleChangeCode={handleChangeCode}
            />
            <Memo
              stringId={item.id.toString()}
              memo={item.memo}
              handleChangeMemo={handleChangeMemo}
            />
          </ContentsContainer>
        );
      })}
    </CodeSpaceContainer>
  );
};

export default CodeSpace;

const CodeSpaceContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 3.2rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-direction: column;

  margin-top: 3.2rem;
`;

const DeleteBtn = styled.button`
  padding: 3rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.gray600};
  color: white;
`;
