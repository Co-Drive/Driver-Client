import styled from 'styled-components';
import CodeEditor from './CodeEditor';
import CodeSpaceHeader from './Header/CodeSpaceHeader';
import Memo from './Memo';

interface CodeSpaceProps {
  ideItems: Array<{ id: number; code: string; memo: string }>;
  handleClickLv: (clickedLv: number) => void;
  handleChangeCode: (newCode: string) => void;
  handleChangeMemo: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CodeSpace = ({
  ideItems,
  handleClickLv,
  handleChangeCode,
  handleChangeMemo,
}: CodeSpaceProps) => {
  return (
    <CodeSpaceContainer>
      <CodeSpaceHeader handleClickLv={handleClickLv} />
      {ideItems.map((item) => {
        return (
          <ContentsContainer key={item.id}>
            <CodeEditor code={item.code} handleChangeCode={handleChangeCode} />
            <Memo memo={item.memo} handleChangeMemo={handleChangeMemo} />
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
