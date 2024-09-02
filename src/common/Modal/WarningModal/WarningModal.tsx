import { WarningModalProps } from '../../../types/Modal/modalType';
import ModalPortal from '../ModalPortal';
import WarningMoalForm from './WarningMoalForm';

const WarningModal = ({
  isGroupStatusModal,
  data,
  onClose,
  handleClickContinueBtn,
}: WarningModalProps) => {
  return (
    <ModalPortal>
      <WarningMoalForm
        data={data}
        isGroupStatusModal={isGroupStatusModal}
        onClose={onClose}
        handleClickContinueBtn={handleClickContinueBtn}
      />
    </ModalPortal>
  );
};

export default WarningModal;
