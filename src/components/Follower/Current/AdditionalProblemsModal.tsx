import styled from 'styled-components';
import SavedSolution from '../../../common/SolutionList/SavedSolution';
import useGetRecentFollowerRecords from '../../../libs/hooks/Follower/useGetRecentFollowerRecords';
import {
  AdditionalProblemsModalProps,
  FollowerRecordsType,
} from '../../../types/Follower/Current/currentType';

const AdditionalProblemsModal = ({ userId }: AdditionalProblemsModalProps) => {
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
                  followerId={userId}
                  record={record}
                  isModal={true}
                  removeBorder={idx === records.length - 1}
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

  scrollbar-color: ${({ theme }) => theme.colors.gray500};

  /* 스크롤바 굵기 설정 */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* 스크롤바 막대 설정 */
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray500};
  }

  padding: 0.4rem 1.9rem 2.4rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray800};

  border-bottom-left-radius: 1.6rem;
  border-bottom-right-radius: 1.6rem;

  box-shadow: 0 4px 4px rgba(11 12 15 / 65%);
`;

const SolutionContainer = styled.div`
  width: 100%;

  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;
