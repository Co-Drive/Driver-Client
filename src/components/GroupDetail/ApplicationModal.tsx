import styled from 'styled-components';
import { IcSuccess } from '../../assets';
import ModalPortal from '../../common/Modal/ModalPortal';
import { ApplicationModalProps } from '../../types/\bGroupDetail/groupDetailType';

const ApplicationModal = ({ onClose }: ApplicationModalProps) => {
  const APPLICANTS_DUMMY = {
    joinNum: 3,
    applicants: [
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'REQUESTED',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'WAITING',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'JOINED',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'JOINED',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'REQUESTED',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'WAITING',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'JOINED',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'JOINED',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'WAITING',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'JOINED',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'JOINED',
      },
    ],
  };

  const { joinNum, applicants } = APPLICANTS_DUMMY;

  const handleClickBg = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <ModalPortal>
      <ModalForm onClick={handleClickBg}>
        <Modal>
          <Header>신청 현황</Header>
          <ApplicantsContainer>
            <Applicants>
              {applicants.map((applicant, idx) => {
                const { language, nickname, status } = applicant;
                return (
                  <Applicant key={idx}>
                    <TopContainer $isJoined={status === 'JOINED'}>
                      <Language>#{language}</Language>
                      {status === 'JOINED' ? (
                        <IcSuccess />
                      ) : (
                        <Status>대기</Status>
                      )}
                    </TopContainer>
                    <NicknameContainer>
                      <Nickname>{nickname}</Nickname>
                      <NicknameText>님</NicknameText>
                    </NicknameContainer>
                  </Applicant>
                );
              })}
            </Applicants>
          </ApplicantsContainer>
          <JoinedNumContainer>
            <JoinedNum>{joinNum}</JoinedNum>
            <JoinedText>명 승인</JoinedText>
          </JoinedNumContainer>
        </Modal>
      </ModalForm>
    </ModalPortal>
  );
};

export default ApplicationModal;

const ModalForm = styled.div`
  position: fixed;
  top: 11.6rem;

  width: 100%;
  height: calc(100vh - 11.6rem);

  background-color: rgb(11 12 15 / 66%);
`;

const Modal = styled.article`
  display: flex;
  align-items: end;
  flex-direction: column;

  padding: 2.4rem 0.8rem 1.8rem;
  margin: 11.8rem 46.6rem 102rem 46.8rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Header = styled.header`
  width: 100%;
  padding-bottom: 2.4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray500};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_20};
  text-align: center;
`;

const ApplicantsContainer = styled.div`
  overflow: hidden auto;

  width: 100%;
  padding-left: 1rem;
  margin: 1.8rem 0 1.4rem;
  max-height: 22.7rem;
`;

const Applicants = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  margin-right: 1rem;
`;

const Applicant = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1.1rem 1.2rem 1.4rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const TopContainer = styled.div<{ $isJoined: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({ $isJoined }) => ($isJoined ? `0.3rem` : `1rem`)};
`;

const Language = styled.p`
  margin-top: 0.3rem;

  color: ${({ theme }) => theme.colors.codrive_purple};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
`;

const Status = styled.p`
  margin-top: 0.3rem;

  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const NicknameContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const NicknameText = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const JoinedNumContainer = styled.div`
  display: flex;
  gap: 0.1rem;
  justify-content: end;
  align-items: center;

  margin-right: 2rem;
`;

const JoinedNum = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_ligth_10};
`;

const JoinedText = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_ligth_10};
`;
