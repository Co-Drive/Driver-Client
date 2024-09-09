import { ErrorModalProps } from '../../../types/Modal/modalType';
import ModalPortal from '../ModalPortal';
import ErrorModalForm from './ErrorModalForm';

const ErrorModal = ({ errMsg, onClose, callbackPage }: ErrorModalProps) => {
  return (
    <ModalPortal>
      <ErrorModalForm errMsg={errMsg} onClose={onClose}  callbackPage={callbackPage} />
    </ModalPortal>
  );
};

export default ErrorModal;
