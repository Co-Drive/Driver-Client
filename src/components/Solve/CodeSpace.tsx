import styled from 'styled-components';
import CodeEditor from './CodeEditor';
import Memo from './Memo';

interface CodeSpaceProps {
  ideId: number;
  ideItems: Array<{ id: number; code: string; memo: string }>;
  handleChangeCode: (newCode: string) => void;
  handleChangeMemo: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CodeSpace = ({ ideId, ideItems, handleChangeCode, handleChangeMemo }: CodeSpaceProps) => {
  return (
    <CodeSpaceContainer>
      <CodeEditor
        code={ideItems[ideId].code}
        handleChangeCode={handleChangeCode}
      />
      <Memo memo={ideItems[ideId].memo} handleChangeMemo={handleChangeMemo} />
    </CodeSpaceContainer>
  );
};

export default CodeSpace;

const CodeSpaceContainer = styled.section`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-direction: column;

  margin-top: 3.2rem;
`;
