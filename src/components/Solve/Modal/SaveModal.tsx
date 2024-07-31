import { ModalProps } from '../../../types/Solve/solveTypes';
import ModalPortal from './ModalPortal';
import SaveModalForm from './SaveModalForm';

const SaveModal = ({ onClose }: ModalProps) => {
  return (
    <ModalPortal>
      <SaveModalForm onClose={onClose} />
    </ModalPortal>
  );
};

export default SaveModal;
