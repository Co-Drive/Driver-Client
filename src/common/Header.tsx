import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Logo className="nav_logo">로고</Logo>
        <NavBarContainer>
          <NavBar href="">홈</NavBar>
          <NavBar href="">문제풀이</NavBar>
          <NavBar href="">그룹</NavBar>
        </NavBarContainer>

        <LoginBtnContainer>
          <LoginBtn>로그인</LoginBtn>
        </LoginBtnContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.nav`
  /* display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1440px;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 11.6rem;

  background-color: #0f6;
`;

const Logo = styled.div`
  margin-top: 2.8rem;
  margin-left: 25.7rem;
`;

const NavBar = styled.a`
  margin-top: 2.8rem;
  margin-left: 3rem;
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;

  /* flex-grow: 1; */

  margin-right: 5rem;
`;

const LoginBtn = styled.a`
  margin-top: 3rem;
  margin-right: 20rem;
  margin-left: 56rem;
`;

const LoginBtnContainer = styled.div`
  display: flex;
`;
