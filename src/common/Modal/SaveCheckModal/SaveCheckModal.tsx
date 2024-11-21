import ModalPortal from '../ModalPortal';
import SaveCheckModalForm from './SaveCheckModalForm';

const SaveCheckModal = ({ isCommit }: { isCommit?: boolean }) => {
  return (
    <ModalPortal>
      <SaveCheckModalForm isCommit={isCommit} />
    </ModalPortal>
  );
};

export default SaveCheckModal;
