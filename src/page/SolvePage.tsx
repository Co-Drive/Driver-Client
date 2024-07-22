import { useState } from 'react';
import styled from 'styled-components';
import CodeSpace from '../components/Solve/CodeSpace';

export interface handleChangeCodeProps {
  newCode: string;
  stringId: string;
}

const SolvePage = () => {
  const [_, setLevel] = useState(0);
  const [ide, setIde] = useState({
    ideId: 0,
    ideItems: [{ id: 0, code: '// code', memo: '' }],
  });

  const { ideId, ideItems } = ide;

  const handleClickLv = (clickedLv: number) => {
    setLevel(clickedLv);
  };

  const handleChangeCode = ({ newCode, stringId }: handleChangeCodeProps) => {
    const id = parseInt(stringId);

    setIde({
      ideItems: ideItems.map((item) =>
        id === item.id ? { ...item, ['code']: newCode } : item
      ),
      ideId: ideId,
    });
  };

  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, name, value } = e.target;

    setIde({
      ideItems: ideItems.map((item) =>
        parseInt(id) === item.id ? { ...item, [name]: value } : item
      ),
      ideId: ideId,
    });
  };

  const handleClickAddBtn = () => {
    const lastItem = ideItems[ideItems.length - 1];
    const contents = {
      id: lastItem.id + 1,
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

  const handleClickDeleteBtn = (id: number) => {
    setIde({
      ideItems: ideItems.filter((item) => item.id !== id),
      ideId: ideId - 1,
    });
  };

  const handleClickGoTopBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SolvePageContainer>
      <CodeSpace
        ideItems={ideItems}
        handleClickLv={handleClickLv}
        handleClickDeleteBtn={handleClickDeleteBtn}
        handleChangeCode={handleChangeCode}
        handleChangeMemo={handleChangeMemo}
      />

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
