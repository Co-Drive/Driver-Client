import { useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../../common/CommonButton';

const CreateButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCreateButtonClick = () => {
      setIsActive(true);
      // navigator 로 이동
  };

  return (
    <CreateBtnContainer>
      <CommonButton
        isActive={isActive}
        category="group_create"
        onClick={handleCreateButtonClick}
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
