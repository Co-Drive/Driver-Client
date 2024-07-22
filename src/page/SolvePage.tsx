import { useState } from 'react';
import styled from 'styled-components';
import CodeSpace from '../components/Solve/CodeSpace';

const SolvePage = () => {
  const [ide, setIde] = useState();

  const handleClickAddBtn = () => {
   
  };

  return (
    <SolvePageContainer>
      <CodeSpace />

      <AddBtn type="button" onClick={handleClickAddBtn}></AddBtn>
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
