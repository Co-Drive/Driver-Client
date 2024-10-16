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
  const language = sessionStorage.getItem('language');
  const isLoginSuccess = nickname && profileImg && language !== '사용언어';

  const [hoveredCategory, setHoveredCategory] = useState('');
  const [isGnbOpen, setIsGnbOpen] = useState(false);

  const isHoveredProfile = hoveredCategory === 'profile';

  const handleOpenGnb = (open: boolean, category?: string) => {
    setIsGnbOpen(open);
    if (category) setHoveredCategory(category);
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
              const isHoveredCategory = hoveredCategory === v.text;
              return (
                <NavBar
                  key={v.text}
                  onMouseEnter={() => handleOpenGnb(true, v.text)}
                >
                  {isClickedCategory && <IconContainer>{v.icon}</IconContainer>}
                  <Text
                    onClick={(e) => isLoginSuccess && handleClickCategory(e)}
                    $isClickedCategory={isClickedCategory}
                  >
                    {v.text}
                  </Text>

                  {idx !== 0 &&
                    isHoveredCategory &&
                    isGnbOpen &&
                    isLoginSuccess && (
                      <Gnb
                        category={hoveredCategory}
                        handleOpenGnb={handleOpenGnb}
                      />
                    )}
                </NavBar>
              );
            })}
          </NavBarUl>
        </NavBarContainer>
        <LoginBtnContainer
          $isLogin={isLoginSuccess ? true : false}
          onMouseEnter={() => isLoginSuccess && handleOpenGnb(true, 'profile')}
        >
          {isLoginSuccess ? <ProfileImg src={profileImg} /> : <IcLoginIcon />}
          <LoginBtn onClick={() => !isLoginSuccess && navigate('/login')}>
            {isLoginSuccess ? `${nickname} 님` : '로그인'}
          </LoginBtn>
          {isLoginSuccess && isGnbOpen && isHoveredProfile && (
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
  justify-content: center;
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

  width: 96.2rem;
  padding-top: 4.9rem;
  padding-bottom: 1.2rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.colors.gray600};
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
