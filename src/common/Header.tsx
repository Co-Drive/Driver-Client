import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcLoginIcon, IcLogo } from '../assets';
import { DATA } from '../constants/Header/HeaderConst';
import { HeaderProps } from '../types/Header/HeaderType';
import Gnb from './Gnb';

const Header = ({ clickedCategory, handleClickCategory }: HeaderProps) => {
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem('nickname');
  const profileImg = sessionStorage.getItem('profileImg');
  const isLogin = nickname && nickname.length > 0;

  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const [isGnbOpen, setIsGnbOpen] = useState(false);

  const handleOpenGnb = (open: boolean) => {
    setIsGnbOpen(open);
  };

  const handleClickProfile = () => {
    setIsProfileClicked(true);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer onClick={() => navigate('/')}>
          <IcLogo />
        </LogoContainer>
        <NavBarContainer>
          <NavBarUl>
            {DATA.map((v, idx) => {
              const isClickedCategory = clickedCategory === v.text;
              return (
                <NavBar
                  key={v.text}
                  onMouseEnter={() => isClickedCategory && handleOpenGnb(true)}
                >
                  {isClickedCategory && <IconContainer>{v.icon}</IconContainer>}
                  <Text
                    onClick={(e) => isLogin && handleClickCategory(e)}
                    $isClickedCategory={isClickedCategory}
                  >
                    {v.text}
                  </Text>

                  {idx !== 0 &&
                    isClickedCategory &&
                    isGnbOpen &&
                    isLogin &&
                    !isProfileClicked && (
                      <Gnb category={v.text} handleOpenGnb={handleOpenGnb} />
                    )}
                </NavBar>
              );
            })}
          </NavBarUl>
        </NavBarContainer>
        <LoginBtnContainer
          $isLogin={isLogin ? true : false}
          onMouseEnter={() => isLogin && handleOpenGnb(true)}
          onClick={handleClickProfile}
        >
          {profileImg ? <ProfileImg src={profileImg} /> : <IcLoginIcon />}
          <LoginBtn>{isLogin ? `${nickname} 님` : '로그인'}</LoginBtn>
          {isLogin && isGnbOpen && isProfileClicked && (
            <Gnb category="profile" handleOpenGnb={handleOpenGnb} />
          )}
        </LoginBtnContainer>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.gray900};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding-top: 4.9rem;
  padding-bottom: 1.2rem;
  margin: 0 23.9rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.colors.gray300};
`;
const LogoContainer = styled.div`
  margin-right: 3.5rem;
`;

const NavBarContainer = styled.nav`
  display: flex;
  flex-grow: 1.5;
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
  position: relative;
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
  gap: 1.4rem;
  justify-content: end;
  position: relative;

  width: 23.2rem;
  margin-right: 2rem;
  margin-left: ${({ $isLogin }) => ($isLogin ? '29.7rem' : '34.1rem')};
`;

const ProfileImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  border-radius: 5rem;
  object-fit: cover;
`;

const LoginBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;

  ${({ theme }) => theme.fonts.title_semiBold_18}
`;
