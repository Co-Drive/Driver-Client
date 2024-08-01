import styled from 'styled-components';
import CommonButton from '../../common/CommonButton';

interface CreateButtonProps {
  isActive: boolean;
}

const CreateButton = ({ isActive }: CreateButtonProps) => {
  const handleCreateButtonClick = () => {
    if (isActive) {
      console.log('navigator 로 이동 로직 구현');
    } else {
      console.log('모든 필드 채워주세요');
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
