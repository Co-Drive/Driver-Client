import styled from 'styled-components';
import { IcHome, IcLogo } from '../assets';

interface HeaderProps {
  isLogin: boolean;
}

const Header = ({ isLogin }: HeaderProps) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <IcLogo />
        </LogoContainer>
        <NavBarContainer>
          <NavBar>
            <IconWrapper>
              <IcHome />
            </IconWrapper>
            <Text>홈</Text>
          </NavBar>
          <Text>문제풀이</Text>
          <Text>그룹</Text>
        </NavBarContainer>
        <LoginBtnContainer $isLogin={isLogin}>
          <LoginBtn>로그인</LoginBtn>
        </LoginBtnContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;

  margin: 0 23.9rem;

  background-color: pink;
`;
const LogoContainer = styled.div`
  margin-right: 3.5rem;

  background-color: orange;
`;

const NavBarContainer = styled.div`
  display: flex;
  gap: 3rem;

  background-color: blue;
`;

const NavBar = styled.ul`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.li`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.title_semiBold_18}
  color: ${({ theme }) => theme.colors.gray300};
`;

const LoginBtn = styled.a`
  ${({ theme }) => theme.fonts.title_semiBold_18}
  color: ${({ theme }) => theme.colors.white};
`;

const LoginBtnContainer = styled.div<{ $isLogin: boolean }>`
  display: flex;

  margin-right: 2rem;
  margin-left: ${({ $isLogin }) => ($isLogin ? `42rem` : `44.9rem`)};

  background-color: red;
`;
