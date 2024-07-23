import styled from 'styled-components';
import { IcLogo } from '../assets';
import { DATA } from '../constants/Header/HeaderConst';
import { HeaderProps } from '../types/Header/HeaderType';

const Header = ({
  isLogin,
  nickname,
  clickedCategory,
  handleClickCategory,
}: HeaderProps) => {
  return (
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
                  onClick={(e) => handleClickCategory(e)}
                  $isClickedCategory={isLogin && clickedCategory === v.text}
                >
                  {v.text}
                </Text>
              </NavBar>
            );
          })}
        </NavBarUl>
      </NavBarContainer>
      <LoginBtnContainer $isLogin={isLogin}>
        <LoginBtn $isLogin={isLogin}>
          {isLogin ? `${nickname} 님` : '로그인'}
        </LoginBtn>
      </LoginBtnContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  margin: 0 23.9rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.colors.gray300};
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

  margin-left: ${({ $isLogin }) => ($isLogin ? `50.6rem` : `25rem`)};
`;

const LoginBtn = styled.button<{ $isLogin: boolean }>`
  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;

  ${({ theme }) => theme.fonts.title_semiBold_18}
`;
