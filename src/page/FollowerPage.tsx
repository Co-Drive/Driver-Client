import styled, { css } from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';

const DUMMY = {
  profileImg: 'https://avatars.githubusercontent.com/u/80264647?v=4',
  nickname: '코딩하는 갱얼쥐',
  isFollowed: false,
  introduce: '안녕하세요? 풀스택 개발자 코딩하는 갱얼쥐입니다.30자',
  github: 'https://github.com/Arooming',
  group: [
    {
      id: 0,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQdMSF0UfUeev25_EDlcSS0jCfciYTLT-qw&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
    {
      id: 1,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolslbPtm3OymbdIwYgusZ9wqH4-fvxhln2A&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
    {
      id: 2,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwTi48CyZZGovLP7-u6CPqTn8ygolt2N5aA&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
    {
      id: 3,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQdMSF0UfUeev25_EDlcSS0jCfciYTLT-qw&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
    {
      id: 4,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolslbPtm3OymbdIwYgusZ9wqH4-fvxhln2A&s',
      title: '이제는 더이상 물러날 곳이 없는 스터디',
      tags: ['#swift', '#java', '#javascript'],
      introduce:
        '안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다설명칸은 두줄까지 가능합니다 안녕하세요 스터디입니다 설명칸은 두줄까지 가능합니다',
    },
  ],
  recommend: [
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      language: 'javascript',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      language: 'javascript',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      language: 'javascript',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      language: 'javascript',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      language: 'javascript',
      isFollowed: false,
    },
    {
      profileImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflIJYye-3WuwXfwuKLvVcajyyi8Rbu9Bx0g&s',
      nickname: '코딩하는 갱얼쥐',
      language: 'javascript',
      isFollowed: false,
    },
  ],
};

const FollowerPage = () => {
  const { profileImg, nickname, isFollowed, introduce, github } = DUMMY;
  return (
    <PageLayout category="홈">
      <FollowerPageContainer>
        <FollowerContainer>
          <Img src={profileImg} />
          <InfoContainer>
            <TopInfoContainer>
              <Nickname>{nickname}</Nickname>
              <FollowBtn type="button" $isFollowed={isFollowed}>
                {isFollowed ? '팔로잉' : '팔로우'}
              </FollowBtn>
            </TopInfoContainer>
            <Introduce>{introduce}</Introduce>
            <GithubContainer>
              <Github>{github}</Github>
            </GithubContainer>
          </InfoContainer>
        </FollowerContainer>
      </FollowerPageContainer>
    </PageLayout>
  );
};

export default FollowerPage;

const FollowerPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 8.6rem 25.7rem 20rem;
`;

const FollowerContainer = styled.article`
  display: flex;
  gap: 4.3rem;
  align-items: center;

  min-width: 92.4rem;

  width: 100%;
  padding-bottom: 4.3rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray600};
`;
const Img = styled.img`
  width: 12.8rem;
  height: 12.8rem;

  border-radius: 2rem;

  object-fit: cover;
`;

const InfoContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TopInfoContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  margin: 0.1rem 0 1.6rem;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const FollowBtn = styled.button<{ $isFollowed: boolean }>`
  padding: 0.6rem 1.6rem;

  border-radius: 0.6rem;

  ${({ $isFollowed, theme }) =>
    $isFollowed
      ? css`
          background-color: ${theme.colors.gray700};
          color: ${theme.colors.gray300};
        `
      : css`
          background-color: ${theme.colors.codrive_purple};
          color: ${theme.colors.white};
        `};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const Introduce = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_medium_20};
`;

const GithubContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  margin-top: 2rem;
`;

const Github = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.body_eng_regular_14};
`;
