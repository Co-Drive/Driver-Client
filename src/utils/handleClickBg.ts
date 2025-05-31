import { HandleClickBgProps } from '../types/Modal/modalType';

export const handleClickBg = ({ e, onClose }: HandleClickBgProps) => {
  if (e.currentTarget === e.target) {
    onClose();
  }
};
