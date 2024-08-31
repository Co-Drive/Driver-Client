import styled from 'styled-components';
import { IcGithub, IcRevise } from '../../assets';

const Profile = ({}) => {
  return (
    <ProfileContainer>
      <ProfileImg>
        <Img />
      </ProfileImg>
      <ProfileInfo>
        <InfoContainer>
          <Tag>javascript</Tag>
          <GitHub>
            <IcGithub />
          </GitHub>
          <Edit>
            <IcRevise />
          </Edit>
        </InfoContainer>
        <IntroContainer>
          <NickName>문주</NickName>
          <Intro>안녕</Intro>
        </IntroContainer>
      </ProfileInfo>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.article`
  display: flex;

  height: 21.5rem;
  padding: 3.8rem 3.6rem 3.8rem 3.8rem;

  background-color: ${({ theme }) => theme.colors.gray800};
`;
const ProfileImg = styled.div`
  width: 13.9rem;
  height: 13.9rem;
  margin-right: 2.6rem;

  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.gray100};
`;
const Img = styled.article``;
const ProfileInfo = styled.article``;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.4rem;
`;
const Tag = styled.p`
  padding: 0.6rem 1rem;
  margin-right: 1.4rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.body_eng_medium_12};
  color: ${({ theme }) => theme.colors.gray900};
`;
const GitHub = styled.article`
  margin-right: 53.7rem;
`;
const Edit = styled.article``;
const IntroContainer = styled.article``;
const NickName = styled.article`
  margin-bottom: 2.5rem;

  ${({ theme }) => theme.fonts.title_bold_32};
  color: ${({ theme }) => theme.colors.white};
`;
const Intro = styled.article`
  ${({ theme }) => theme.fonts.body_medium_16};
  color: ${({ theme }) => theme.colors.gray100};
`;

export default Profile;
