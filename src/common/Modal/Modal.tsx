import styled from 'styled-components';
import { ModalProps } from '../../types/Solve/solveTypes';
import LinkCopyModal from './LinkCopyModal';
import ModalPortal from './ModalPortal';
import SaveModalForm from './SaveModalForm';

const Modal = ({ onClose, isSaveModal }: ModalProps) => {
  return (
    <ModalPortal>
      <ModalFormConatiner>
        {isSaveModal ? <SaveModalForm onClose={onClose} /> : <LinkCopyModal />}
      </ModalFormConatiner>
    </ModalPortal>
  );
};

export default Modal;

const ModalFormConatiner = styled.section`
  position: fixed;
  top: 11.6rem;

  width: 100%;
  height: calc(100vh - 11.6rem);

  background-color: rgb(11 12 15 / 66%);
`;
