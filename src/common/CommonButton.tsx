import styled from 'styled-components';

interface CommonButtonProps {
  isActive: boolean;
}

const CommonButton = ({ isActive }: CommonButtonProps) => {
  return (
    <>
      <Button isActive={isActive}>가입하기</Button>
    </>
  );
};

const Button = styled.button<CommonButtonProps>`
  padding: 1.2rem 5.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.codrive_green : theme.colors.gray700};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.gray900 : theme.colors.gray300};
`;

export default CommonButton;
