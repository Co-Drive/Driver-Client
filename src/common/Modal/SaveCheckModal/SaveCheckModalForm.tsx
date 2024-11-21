import styled from 'styled-components';
import { IcSuccess } from '../../../assets';

const SaveCheckModalForm = ({ isCommit }: { isCommit?: boolean }) => {
  return (
    <ModalFormConatiner>
      <SaveCheckModalContainer>
        <IcSuccess />
        <Text>{isCommit ? '깃허브 자동 커밋 완료!' : '저장 되었습니다'}</Text>
      </SaveCheckModalContainer>
    </ModalFormConatiner>
  );
};

export default SaveCheckModalForm;

const ModalFormConatiner = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 11.6rem;

  width: 100%;
  height: calc(100vh - 11.6rem);

  background-color: rgb(11 12 15 / 66%);
`;

const SaveCheckModalContainer = styled.article`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;
  padding: 2.6rem 3rem 2.6rem 2.6rem;
  margin: 27.7rem 62.2rem 0 62rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray700};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};

  white-space: nowrap;
`;
