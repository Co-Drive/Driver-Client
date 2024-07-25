import styled from 'styled-components';
import { IcGithubLogo } from '../../assets';
import { LoginBtnType } from '../../types/LoginBtn/LoginBtnType';

const LoginButton = ({ onClick }: LoginBtnType) => {
  return (
    <Button type="button" onClick={onClick}>
      <IcGithubLogo />
      Github으로 시작하기
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  width: 22.8rem;
  height: 5rem;
  margin-top: 7rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.gray900};
`;

export default LoginButton;
