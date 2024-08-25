import styled from 'styled-components';
import SavedSolution from '../../../common/SolutionList/SavedSolution';
import { CLICKED_DUMMY } from '../../../constants/Follower/currentConst';

const AdditionalProblemsModal = () => {
  const { records } = CLICKED_DUMMY;

  return (
    <AdditionalProblems>
      <SolutionContainer>
        {records.map((record, idx) => {
          return (
            <SavedSolution
              key={record.recordId}
              record={record}
              isModal={true}
              removeBorder={idx === records.length - 1}
            />
          );
        })}
      </SolutionContainer>
    </AdditionalProblems>
  );
};

export default AdditionalProblemsModal;

const AdditionalProblems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 1;

  max-height: 50.4rem;
  overflow-y: auto;

  width: 100%;
  height: auto;
  padding: 0.4rem 2.4rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray800};

  border-bottom-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;

  box-shadow: 0 4px 4px rgba(11 12 15 / 65%);
`;

const SolutionContainer = styled.div`
  width: 100%;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;
