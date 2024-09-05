import styled from 'styled-components';
import { IcCancelFill, IcCode } from '../../assets';
import { CodeSpaceProps } from '../../types/Solve/solveTypes';

import CodeEditor from '../../common/CodeSpace/CodeEditor';
import Memo from '../../common/CodeSpace/Memo';
import CodeSpaceHeader from './Header/CodeSpaceHeader';

const CodeSpace = ({
  ideItems,
  questionInfo,
  isOpenOptions,
  handleClickQuestionInfo,
  handleClickDeleteBtn,
  handleChangeCode,
  handleChangeMemo,
}: CodeSpaceProps) => {
  return (
    <CodeSpaceContainer>
      <CodeSpaceHeader
        isOpenOptions={isOpenOptions}
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

              {item.id == 0 && (
                <Notice>코드블록은 최대 10개까지 추가 가능합니다</Notice>
              )}
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
  margin-top: 2.2rem;
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
  align-items: center;

  width: 100%;
  margin: 1.4rem 0;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  width: fit-content;
  margin-left: 0.8rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const Notice = styled.p`
  display: flex;
  align-items: center;

  margin-right: 0.2rem;

  color: ${({ theme }) => theme.colors.green200};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;
