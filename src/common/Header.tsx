import styled from 'styled-components';
import { IcHome, IcLogo } from '../assets';

interface HeaderProps {
  isLogin: boolean;
  nickname: string;
  clickedCategory: string;
  handleClickCategory: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

const DATA = [
  { icon: <IcHome />, text: '홈' },
  { icon: <IcHome />, text: '문제풀이' },
  { icon: <IcHome />, text: '그룹' },
];

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
      </NavBarContainer>
      <LoginBtnContainer $isLogin={isLogin}>
        <LoginBtn>{isLogin ? `${nickname} 님` : '로그인'}</LoginBtn>
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

  /* background-color: pink; */
`;
const LogoContainer = styled.div`
  margin-right: 3.5rem;

  /* background-color: orange; */
`;

const NavBarContainer = styled.nav`
  display: flex;
  gap: 3rem;

  /* background-color: blue; */
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
`;

const LoginBtnContainer = styled.div<{ $isLogin: boolean }>`
  display: flex;

  margin-right: 2rem;
  margin-left: ${({ $isLogin }) => ($isLogin ? `42rem` : `44.9rem`)};

  /* background-color: red; */
`;

const LoginBtn = styled.button`
  ${({ theme }) => theme.fonts.title_semiBold_18}
  color: ${({ theme }) => theme.colors.white};
`;

const BorderLine = styled.div`
  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray600};
  background-color: pink;
`;
