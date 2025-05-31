import styled from 'styled-components';
import { ModalProps } from '../../types/Solve/solveTypes';
import LinkCopyModalForm from './LinkCopyModalForm';
import ModalPortal from './ModalPortal';
import SaveModalForm from './SaveModalForm';
import { handleClickBg } from '../../utils/handleClickBg';

const Modal = ({
  id,
  onClose,
  handlePostTempErr,
  questionInfo,
  codeblocks,
}: ModalProps) => {
  return (
    <ModalPortal>
      <ModalFormConatiner
        onClick={(e) => onClose && handleClickBg({ e, onClose })}
      >
        {onClose ? (
          <SaveModalForm
            id={id}
            onClose={onClose}
            handlePostTempErr={handlePostTempErr}
            questionInfo={questionInfo}
            codeblocks={codeblocks}
          />
        ) : (
          <LinkCopyModalForm />
        )}
      </ModalFormConatiner>
    </ModalPortal>
  );
};

export default Modal;

const ModalFormConatiner = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 11.6rem;

  width: 100%;
  height: calc(100vh - 11.6rem);

  background-color: rgb(11 12 15 / 66%);
`;
