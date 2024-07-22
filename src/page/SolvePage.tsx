import { useState } from 'react';
import styled from 'styled-components';
import CodeSpace from '../components/Solve/CodeSpace';

const SolvePage = () => {
  const [ide, setIde] = useState({
    ideId: 0,
    ideItems: [{ id: 0, code: '// code', memo: '' }],
  });

  const { ideId, ideItems } = ide;

  const handleChangeCode = (newCode: string) => {
    setIde({
      ideItems: ideItems.map((item) =>
        ideId === item.id ? { ...item, code: newCode } : item
      ),
      ideId: ideId,
    });
  };

  const handleClickAddBtn = () => {
    const contents = {
      id: ideId + 1,
      code: '// code',
      memo: '',
    };

    setIde({
      ideItems: ideItems.concat({
        ...contents,
      }),
      ideId: ideId + 1,
    });
  };

  const handleClickGoTopBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SolvePageContainer>
      {ideItems.map((item) => {
        return (
          <CodeSpace
            key={item.id}
            ideId={ideId}
            ideItems={ideItems}
            handleChangeCode={handleChangeCode}
          />
        );
      })}

      <AddBtn type="button" onClick={handleClickAddBtn}></AddBtn>
      {ideId > 0 && (
        <GoTopBtn type="button" onClick={handleClickGoTopBtn}>
          위로
        </GoTopBtn>
      )}
    </SolvePageContainer>
  );
};

export default SolvePage;

const SolvePageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AddBtn = styled.button`
  padding: 3rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.gray600};
  color: white;
`;

const GoTopBtn = styled.button`
  padding: 3rem;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: black;
`;
