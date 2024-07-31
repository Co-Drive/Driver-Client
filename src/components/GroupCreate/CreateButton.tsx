import { useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../../common/CommonButton';

const CreateButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCreateButtonClick = () => {
    if (!isActive) {
      setIsActive(true);
      console.log('그룹를 생성하도록 새로운 것입니다');
      // navigator 로 이동
    } else {
      console.log('에러발생');
    }
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
