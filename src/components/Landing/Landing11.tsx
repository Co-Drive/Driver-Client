import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcLoginBig, ImgLanding11Bg } from '../../assets';

const Landing11 = () => {
  const navigate = useNavigate();

  return (
    <Landing10Container>
      <TitleContainer>
        <Title>꿈을 향한 성공 궤도에 올라탈 여러분을 기다리고 있어요!</Title>
        <Text>성공적인 코딩테스트를 위한 최적의 경로</Text>
        <div>
          <IcLoginBig />
        </div>
        <HomeBtn onClick={() => navigate('/login')}>
          깃허브로 3초만에 가입하기
        </HomeBtn>
      </TitleContainer>
    </Landing10Container>
  );
};

const Landing10Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-position: center;
  background-size: cover;
  background-image: url(${ImgLanding11Bg});
  background-repeat: no-repeat;
`;

const TitleContainer = styled.div`
  padding-top: 21.4rem;

  text-align: center;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_48};
  background: radial-gradient(
    circle farthest-corner at center center,
    #fff 0%,
    #58ff7d 100%
  );
  background-color: #ffff;
  color: ${({ theme }) => theme.colors.gray100};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Text = styled.p`
  margin-top: 6.7rem;

  ${({ theme }) => theme.fonts.landing_semibold_24};
  background: radial-gradient(
    circle farthest-corner at center center,
    #fff 0%,
    #58ff7d 100%
  );
  background-color: #ffff; /* background 뒤로 이동 */
  color: ${({ theme }) => theme.colors.gray100};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HomeBtn = styled.button`
  padding: 1.8rem 11.05rem;
  margin-top: 4.8rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
  color: ${({ theme }) => theme.colors.gray900};
  box-shadow: rgb(183 255 199 / 70%) 0 0 1.5rem;
`;

export default Landing11;
