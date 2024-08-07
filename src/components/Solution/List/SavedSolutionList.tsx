import styled from 'styled-components';
import ListFilter from './ListFilter';
import SavedSolution from './SavedSolution';

const SavedSolutionList = () => {
  return (
    <ListContainer>
      <ListFilter />
      <SavedSolution />
    </ListContainer>
  );
};

export default SavedSolutionList;

const ListContainer = styled.article`
  display: flex;
  gap: 2.2rem;
  align-items: center;
  flex-direction: column;
  
  margin-top: 4.3rem;
`;
