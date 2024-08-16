import styled from 'styled-components';

interface EditButtonProps {
  isEditing?: boolean;
  onClick: () => void;
}

const EditButton = ({ isEditing, onClick }: EditButtonProps) => {
  return (
    <Button $isEditing={isEditing} onClick={onClick}>
      {isEditing ? '저장' : '수정'}
    </Button>
  );
};

const Button = styled.button<{ $isEditing?: boolean }>`
  position: absolute;
  right: 0;

  width: 6.8rem;
  height: 4.8rem;

  border-radius: 0.8rem;
  background-color: ${({ theme, $isEditing }) =>
    $isEditing ? theme.colors.codrive_green : theme.colors.gray600};
  color: ${({ theme, $isEditing }) =>
    $isEditing ? theme.colors.gray900 : theme.colors.white};
  font-size: ${({ theme, $isEditing }) =>
    $isEditing ? theme.fonts.title_bold_16 : theme.fonts.body_ligth_16};

  text-align: center;
`;

export default EditButton;
