import styled from 'styled-components';
import { IcCancelFill, IcCode } from '../../assets';
import { CodeSpaceProps } from '../../types/Solve/solveTypes';

import CodeEditor from '../../common/CodeSpace/CodeEditor';
import Memo from '../../common/CodeSpace/Memo';
import CodeSpaceHeader from './Header/CodeSpaceHeader';

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
        questionInfo={questionInfo}
        handleClickQuestionInfo={handleClickQuestionInfo}
      />
      {ideItems.map((item) => {
        return (
          <ContentsContainer key={item.id}>
            <TopBar>
              <TextContainer>
                <IcCode />
                <Text>codeblock</Text>
              </TextContainer>
              {item.id > 0 && (
                <IcCancelFill onClick={() => handleClickDeleteBtn(item.id)} />
              )}
            </TopBar>

            <CodeEditor
              isReadOnly={false}
              stringId={item.id.toString()}
              code={item.code}
              handleChangeCode={handleChangeCode}
            />

            <Memo
              isReadOnly={false}
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

  width: 100%;
  margin-top: 3.2rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;

  width: 100%;
  margin-top: 3.2rem;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 0.8rem;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  width: fit-content;
  margin-top: 1rem;
  margin-left: 0.8rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;
