import styled from 'styled-components';
import { IcLoginIcon, IcLogo } from '../assets';
import { DATA } from '../constants/Header/HeaderConst';
import { HeaderProps } from '../types/Header/HeaderType';

const Header = ({ clickedCategory, handleClickCategory }: HeaderProps) => {
  const nickname = sessionStorage.getItem('nickname');
  const isLogin = nickname && nickname.length > 0;
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <IcLogo />
        </LogoContainer>
        <NavBarContainer>
          <NavBarUl>
            {DATA.map((v) => {
              return (
                <NavBar key={v.text}>
                  {isLogin && clickedCategory === v.text && (
                    <IconContainer>{v.icon}</IconContainer>
                  )}
                  <Text
                    onClick={(e) => isLogin && handleClickCategory(e)}
                    $isClickedCategory={clickedCategory === v.text}
                  >
                    {v.text}
                  </Text>
                </NavBar>
              );
            })}
          </NavBarUl>
        </NavBarContainer>
        <LoginBtnContainer $isLogin={isLogin ? true : false}>
          <IcLoginIcon />
          <LoginBtn>{isLogin ? `${nickname} 님` : '로그인'}</LoginBtn>
        </LoginBtnContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;

  /* justify-content: center; */

  width: 100%;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding-top: 4.9rem;
  padding-bottom: 1.2rem;
  margin: 0 23.9rem;

  /* max-width: 96.2rem; */

  border-bottom: 0.01rem solid ${({ theme }) => theme.colors.gray300};

  /* background-color: pink; */
`;
const LogoContainer = styled.div`
  margin-right: 3.5rem;
`;

const NavBarContainer = styled.nav`
  display: flex;
`;

const NavBarUl = styled.ul`
  display: flex;
  gap: 3rem;
`;

const NavBar = styled.li`
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p<{ $isClickedCategory: boolean }>`
  ${({ theme }) => theme.fonts.title_semiBold_18}
  color: ${({ theme, $isClickedCategory }) =>
    $isClickedCategory ? theme.colors.white : theme.colors.gray300};
  cursor: pointer;

  white-space: nowrap;
`;

const LoginBtnContainer = styled.div<{ $isLogin: boolean }>`
  display: flex;

  margin-left: ${({ $isLogin }) => ($isLogin ? '46.2rem' : '50.6rem')};
`;

const LoginBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;

  ${({ theme }) => theme.fonts.title_semiBold_18}
`;
