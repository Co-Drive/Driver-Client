import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowBottomWhite, IcLoginIcon, IcLogo } from '../assets';
import { DATA } from '../constants/Header/HeaderConst';
import useGetAlarmList from '../libs/hooks/Alarm/useGetAlarmList';
import { HeaderProps } from '../types/Header/HeaderType';
import AlarmModal from './AlarmModal';
import Gnb from './Gnb';

const Header = ({ clickedCategory, handleClickCategory }: HeaderProps) => {
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem('nickname');
  const profileImg = sessionStorage.getItem('profileImg');
  const language = sessionStorage.getItem('language');
  // isLoginSuccess를 불린 값으로 정의
  const isLoginSuccess = !!(nickname && profileImg && language !== '사용언어');

  // 알람 리스트 전부를 받아와서 notifications 의 담아줌
  const { data, isLoading } = useGetAlarmList(isLoginSuccess);
  const { notifications } = (!isLoading && data?.data) || {};
  const newAlarms =
    notifications?.filter(
      (data: { isRead: boolean }) => data.isRead === false
    ) || [];

  const [hoveredCategory, setHoveredCategory] = useState('');
  const [isGnbOpen, setIsGnbOpen] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const [isNewAlarmExit, setIsNewAlarmExit] = useState(false);

  // Profile 호버만 따로 하기 위해 사용
  const isHoveredProfile = hoveredCategory === 'profile';

  const handleOpenGnb = (open: boolean, category?: string) => {
    setIsGnbOpen(open);
    if (category) setHoveredCategory(category);
  };

  const handleOpenAlarm = () => {
    setIsAlarmOpen(true);
  };

  const handleCloseAlarm = () => {
    setIsAlarmOpen(false);
  };

  useEffect(() => {
    const hasNewAlarms = newAlarms || sessionStorage.getItem('isNewAlarmExit');

    if (hasNewAlarms) {
      sessionStorage.setItem('isNewAlarmExit', 'true');
      setIsNewAlarmExit(true);
    } else {
      sessionStorage.removeItem('isNewAlarmExit');
      setIsNewAlarmExit(false);
    }
  }, [newAlarms]);

  // HeaderContainer 에 Leave 있는 이유는 Gnb 컨텐츠 부분을 꼭 지나치고 마우스를 나가야만 창이 닫혀서
  // 컨텐츠 부분을 지나치지 않더라도 바로 창이 닫히게끔 하기 위해 추가함
  return (
    <HeaderWrapper>
      <HeaderContainer onMouseLeave={() => handleOpenGnb(false)}>
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
          onMouseEnter={() => isLoginSuccess && handleOpenAlarm()}
        >
          {isLoginSuccess ? (
            <ProfileContainer>
              {isNewAlarmExit && <NewAlarm />}
              <ProfileImg src={profileImg} />
            </ProfileContainer>
          ) : (
            <IcLoginIcon />
          )}
          <LoginBtn onClick={() => !isLoginSuccess && navigate('/login')}>
            {isLoginSuccess ? `${nickname} 님` : '로그인'}
          </LoginBtn>
        </LoginBtnContainer>
        <AlarmContainer>
          {isAlarmOpen && (
            <AlarmModal
              isOpen={isAlarmOpen}
              handleClose={handleCloseAlarm}
              notifications={notifications}
            />
          )}
        </AlarmContainer>
        <IcArrowContainer
          onClick={() => isLoginSuccess && handleOpenGnb(true, 'profile')} // 클릭 시 Gnb 토글
        >
          <IcArrowBottomWhite />
          {isLoginSuccess && isGnbOpen && isHoveredProfile && (
            <Gnb category="profile" handleOpenGnb={handleOpenGnb} />
          )}
        </IcArrowContainer>
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
  margin-right: 0.8rem;
  margin-left: ${({ $isLogin }) => ($isLogin ? '29.7rem' : '34.1rem')};
`;

const ProfileContainer = styled.div`
  position: relative;

  width: 2.4rem;
  height: 2.4rem;
`;

const NewAlarm = styled.span`
  position: absolute;
  top: 0;
  right: -0.171rem;

  width: 0.771rem;
  height: 0.771rem;

  outline: 0.515rem solid ${({ theme }) => theme.colors.gray900};

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.codrive_green};
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 5rem;
  object-fit: cover;
`;

const LoginBtn = styled.button`
  color: ${({ theme }) => theme.colors.white};

  white-space: nowrap;

  ${({ theme }) => theme.fonts.title_semiBold_18}
`;

const IcArrowContainer = styled.div`
  position: relative;

  margin-right: 2rem;
`;

const AlarmContainer = styled.div`
  position: relative;
`;
