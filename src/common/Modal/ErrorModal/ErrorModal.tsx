import { ErrorModalProps } from '../../../types/Modal/modalType';
import ModalPortal from '../ModalPortal';
import ErrorModalForm from './ErrorModalForm';

const ErrorModal = ({ errMsg, onClose }: ErrorModalProps) => {
  return (
    <ModalPortal>
      <ErrorModalForm errMsg={errMsg} onClose={onClose} />
    </ModalPortal>
  );
};

export default ErrorModal;
