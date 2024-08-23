import styled from 'styled-components';
import ModalPortal from '../../common/Modal/ModalPortal';

const ApplicationModal = () => {
  const APPLICANTS_DUMMY = {
    joinNum: 3,
    applicants: [
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'WAITING',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'WAITING',
      },
      {
        language: 'JavaScript',
        nickname: '일이삼사오육칠팔구십',
        status: 'WAITING',
      },
    ],
  };

  const { joinNum, applicants } = APPLICANTS_DUMMY;

  return (
    <ModalPortal>
      <ModalForm>
        <Modal>
          <Header>신청 현황</Header>
          <ApplicantsContainer>
            <Applicants>
              {applicants.map((applicant, idx) => {
                const { language, nickname, status } = applicant;
                return <Applicant key={idx}></Applicant>;
              })}
            </Applicants>
          </ApplicantsContainer>
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
  align-items: center;
  flex-direction: column;

  padding: 2.4rem 0 1.8rem;
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
  max-height: 22.7rem;

  overflow: hidden auto;

  width: 100%;
  padding: 1.8rem 0.8rem 1.4rem 1.8rem;
`;

const Applicants = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(2, 1fr);
`;

const Applicant = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1.4rem 1.2rem 1.4rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;
