import styled from 'styled-components';
import CommonButton from '../../common/CommonButton';
import { CreateButtonProps } from '../../types/GroupCreate/GroupCreateType';

const CreateButton = ({ isActive, onClick }: CreateButtonProps) => {
  return (
    <CreateBtnContainer>
      <CommonButton
        isActive={isActive}
        category="group_create"
        onClick={onClick}
      />
    </CreateBtnContainer>
  );
};

export default CreateButton;

const CreateBtnContainer = styled.div`
  display: flex;
  justify-content: end;

  margin-top: 3.8rem;
`;
