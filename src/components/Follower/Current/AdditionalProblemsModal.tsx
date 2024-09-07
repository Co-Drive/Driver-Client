import styled from 'styled-components';
import SavedSolution from '../../../common/SolutionList/SavedSolution';
import useGetRecentFollowerRecords from '../../../libs/hooks/Follower/useGetRecentFollowerRecords';
import {
  AdditionalProblemsModalProps,
  FollowerRecordsType,
} from '../../../types/Follower/Current/currentType';

const AdditionalProblemsModal = ({
  userId,
  clickedPage,
}: AdditionalProblemsModalProps) => {
  const { data, isLoading } = useGetRecentFollowerRecords({ userId });
  const { records } = !isLoading && data.data;

  return (
    <ModalContainer>
      <AdditionalProblems>
        {!isLoading && (
          <SolutionContainer>
            {records.map((record: FollowerRecordsType, idx: number) => {
              return (
                <SavedSolution
                  key={record.recordId}
                  record={record}
                  isModal={true}
                  removeBorder={idx === records.length - 1}
                  clickedPage={clickedPage}
                />
              );
            })}
          </SolutionContainer>
        )}
      </AdditionalProblems>
    </ModalContainer>
  );
};

export default AdditionalProblemsModal;

const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;

  width: 100%;
  height: auto;
  padding-bottom: 35rem;
`;

const AdditionalProblems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-height: 50.4rem;
  overflow-y: auto;

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
