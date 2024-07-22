import { useState } from 'react';
import styled from 'styled-components';
import CodeEditor from './CodeEditor';
import Memo from './Memo';

const CodeSpace = () => {
  const [code, setCode] = useState(`// code`);

  const handleChangeCode = (newCode: string) => {
    setCode(newCode);
  };

  return (
    <CodeSpaceContainer>
      <CodeEditor code={code} handleChangeCode={handleChangeCode} />
      <Memo />
    </CodeSpaceContainer>
  );
};

export default CodeSpace;

const CodeSpaceContainer = styled.section`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-direction: column;
`;
